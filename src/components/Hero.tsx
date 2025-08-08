import { Button } from "@/components/ui/button";
import { Star, Sparkles, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-natal-luz.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Natal Luz em Gramado - A magia do Natal" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Snow Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'var(--snow-background)' }}></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
          <span className="text-secondary font-semibold text-lg">Natal Luz 2024</span>
          <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Viva a Magia do
          <span className="block text-secondary drop-shadow-lg">Natal Luz</span>
          <span className="block text-4xl md:text-5xl">em Gramado</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          Descubra o espetáculo natalino mais encantador do Brasil. 
          Luzes, música, magia e momentos inesquecíveis te esperam na Serra Gaúcha.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-white/90">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Novembro a Janeiro</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Gramado, RS</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
            ))}
            <span className="text-white/90 ml-2">Experiência 5 estrelas</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="hero" className="group">
            <Sparkles className="h-5 w-5 group-hover:animate-spin" />
            Reservar Agora
          </Button>
          <Button variant="secondary" size="hero" className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
            Ver Pacotes
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/60">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Descubra mais</span>
          <div className="w-px h-8 bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;