import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Clock, Heart, Shield } from "lucide-react";

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
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with logo space */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col items-center gap-6 md:gap-8 mb-8">
              {/* Logo placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">LOGO</div>
                  <div className="text-xs text-muted-foreground">Sua Agência</div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Quem Somos
                </h2>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Especialistas em Gramado desde 2009
                </Badge>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Somos uma agência de turismo <strong className="text-foreground">especializada em Gramado e região</strong>, 
                com mais de 15 anos de experiência criando experiências inesquecíveis na Serra Gaúcha.
              </p>
              <p>
                Nossa paixão pela cidade do Natal Luz nos motiva a oferecer o melhor atendimento, 
                com <strong className="text-foreground">pacotes personalizados</strong> e 
                <strong className="text-foreground"> suporte completo</strong> para que sua viagem seja perfeita em todos os detalhes.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg bg-gradient-to-br from-card to-card/80 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                      <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-xs md:text-sm text-muted-foreground text-center leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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