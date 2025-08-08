import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Plane, MapPin, Package, Star, Clock, Users } from "lucide-react";
import hotelImage from "@/assets/hotel-gramado.jpg";
import passeiosImage from "@/assets/passeios-gramado.jpg";

const ProductsSection = () => {
  const services = [
    {
      id: 1,
      title: "Passagens Aéreas",
      description: "Voos com as melhores tarifas e horários para Gramado",
      image: passeiosImage,
      icon: Plane,
      features: ["Parcelamento sem juros", "Flexibilidade de datas", "Suporte 24h"]
    },
    {
      id: 2,
      title: "Hospedagem",
      description: "Hotéis, pousadas e resorts com temática natalina",
      image: hotelImage,
      icon: Hotel,
      features: ["Café da manhã incluso", "Localização privilegiada", "Cancelamento grátis"]
    },
    {
      id: 3,
      title: "Passeios e Tours",
      description: "Tours guiados pelos pontos turísticos e experiências exclusivas",
      image: passeiosImage,
      icon: MapPin,
      features: ["Guia especializado", "Transporte incluído", "Grupos pequenos"]
    },
    {
      id: 4,
      title: "Ingressos",
      description: "Shows do Natal Luz, parques temáticos e atrações",
      image: passeiosImage,
      icon: Package,
      features: ["Entrada garantida", "Sem filas", "Melhores lugares"]
    },
    {
      id: 5,
      title: "Seguro Viagem",
      description: "Proteção completa para sua viagem com cobertura nacional",
      image: hotelImage,
      icon: Users,
      features: ["Cobertura médica", "Cancelamento de viagem", "Bagagem extraviada"]
    },
    {
      id: 6,
      title: "Pacotes Completos",
      description: "Tudo incluso: passagem, hospedagem, passeios e ingressos",
      image: passeiosImage,
      icon: Star,
      features: ["Economia garantida", "Planejamento completo", "Suporte local"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos tudo que você precisa para uma viagem perfeita a Gramado. Desde passagens aéreas até ingressos para o Natal Luz, cuidamos de cada detalhe da sua experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card to-card/80">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="default">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="group">
            <Package className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;