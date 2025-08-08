import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Clock, Heart, Shield } from "lucide-react";
import logoAgencia from "@/assets/logo_agencia.png";

const AboutAgency = () => {
  const stats = [
    { icon: Users, number: "10.000+", label: "Clientes Satisfeitos" },
    { icon: Award, number: "15", label: "Anos de Experiência" },
    { icon: MapPin, number: "500+", label: "Viagens Realizadas" },
    { icon: Clock, number: "24h", label: "Suporte Disponível" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Paixão por Gramado",
      description: "Conhecemos cada cantinho da cidade e criamos experiências únicas"
    },
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Parceiros certificados e total suporte durante sua viagem"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e merece um planejamento especial"
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with logo space */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col items-center gap-6 md:gap-8 mb-8">
              {/* Logo placeholder */}
              
                <img className="w-100 h-30"
          src={logoAgencia} 
          alt="Logotipo TravelLSTur" 
        />

              
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Quem Somos
                </h2>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Na TravelLStur, viajar é viver experiências que ficam para sempre. Somos apaixonados por explorar o mundo e estamos preparados para ajudar você a descobrir os melhores destinos, com praticidade e de maneira descomplicada.
              </p>
              <p>
                Fundada por um profissional graduado em Turismo e Hotelaria, com 18 anos de experiência no setor hoteleiro e especialização na Espanha e em Portugal, a TravelLStur oferece atendimento personalizado: afinal, cada viagem e cada viajante são únicos e oferecemos a devida atenção a suas necessidades.
              </p>
            </div>
          </div>


          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80 group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Pronto para sua próxima aventura?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Deixe nossos especialistas criarem a viagem dos seus sonhos para Gramado
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="group">
                  <Heart className="h-5 w-5 group-hover:scale-110 transition-transform mr-2" />
                  Fale com Nossos Especialistas
                </Button>
                <Button variant="secondary" size="lg">
                  Ver Nossos Pacotes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;