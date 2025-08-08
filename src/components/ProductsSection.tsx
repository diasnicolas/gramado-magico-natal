import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Plane, MapPin, Package, Star, Clock, Users } from "lucide-react";
import hotelImage from "@/assets/hotel-gramado.jpg";
import passeiosImage from "@/assets/passeios-gramado.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Hotéis de Luxo",
      description: "Hospedagens exclusivas com temática natalina e vista para as luzes",
      image: hotelImage,
      icon: Hotel,
      price: "A partir de R$ 280/noite",
      features: ["Café da manhã incluso", "Vista para decoração", "Spa e aquecimento"],
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      title: "Pacotes Completos",
      description: "Hospedagem + passeios + ingressos para shows do Natal Luz",
      image: passeiosImage,
      icon: Package,
      price: "A partir de R$ 850/pessoa",
      features: ["3 dias / 2 noites", "Ingressos inclusos", "Transporte local"],
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: "Passeios Exclusivos",
      description: "Tours guiados pelos pontos turísticos e experiências únicas",
      image: passeiosImage,
      icon: MapPin,
      price: "A partir de R$ 120/pessoa",
      features: ["Guia especializado", "Transporte incluído", "Degustação local"],
      rating: 4.7,
      reviews: 203
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Produtos Turísticos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pacotes especiais para tornar sua experiência em Gramado inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card to-card/80">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="default">
                    Reservar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="group">
            <Package className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            Ver Todos os Pacotes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;