import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Thermometer, Calendar, Camera } from "lucide-react";

const AboutGramado = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Natal Luz",
      description: "O maior espetáculo natalino da América Latina, de outubro a janeiro"
    },
    {
      icon: Thermometer,
      title: "Clima",
      description: "Temperaturas amenas o ano todo, inverno de 5°C a 15°C"
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "115 km de Porto Alegre, na região da Serra Gaúcha"
    },
    {
      icon: Camera,
      title: "Arquitetura",
      description: "Influência alemã com construções em estilo enxaimel"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Gramado, a Cidade do Natal
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              Localizada na Serra Gaúcha, Gramado é mundialmente conhecida pelo seu charme europeu 
              e pelo maior espetáculo natalino da América Latina. A cidade encanta visitantes 
              o ano todo com sua arquitetura única, gastronomia excepcional e paisagens deslumbrantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg md:text-xl">{highlight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm md:text-base">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 md:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Por que escolher Gramado?
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
              <p>
                🎄 <strong>Natal Luz único:</strong> De outubro a janeiro, a cidade se transforma 
                no maior espetáculo natalino da América Latina, com shows, decorações e eventos especiais.
              </p>
              <p>
                🏔️ <strong>Paisagens deslumbrantes:</strong> Cercada por montanhas, lagos e florestas, 
                oferece cenários perfeitos para fotos e momentos inesquecíveis.
              </p>
              <p>
                🍷 <strong>Gastronomia renomada:</strong> Restaurantes premiados, fondues tradicionais, 
                chocolates artesanais e vinhos da região da Serra Gaúcha.
              </p>
              <p>
                🎭 <strong>Cultura e entretenimento:</strong> Festivais de cinema, teatro, música e 
                parques temáticos únicos como Mini Mundo e Snowland.
              </p>
              <p>
                🏨 <strong>Hospitalidade excepcional:</strong> Hotéis charmosos, pousadas aconchegantes 
                e atendimento caloroso que faz você se sentir em casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGramado;