import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Clock, Camera, Star, Info } from "lucide-react";
import lagoNegroImage from "@/assets/lago-negro.jpg";

const TouristSpots = () => {
  const spots = [
    {
      id: 1,
      name: "Lago Negro",
      shortDescription: "Lago artificial cercado por pinheiros, ideal para caminhadas românticas",
      fullDescription: "O Lago Negro é um dos cartões postais mais famosos de Gramado. Criado artificialmente na década de 1940, o lago está cercado por árvores trazidas da Floresta Negra alemã, criando um ambiente único e romântico. Durante o Natal Luz, o local recebe iluminação especial que reflete nas águas escuras do lago.",
      image: lagoNegroImage,
      duration: "1-2 horas",
      bestTime: "Fim de tarde e noite",
      highlights: ["Pedalinhos", "Trilha ao redor do lago", "Iluminação natalina", "Área para piquenique"],
      ticketPrice: "Gratuito",
      tips: "Visite durante o pôr do sol para fotos incríveis. No Natal Luz, a iluminação especial cria um ambiente mágico."
    },
    {
      id: 2,
      name: "Rua Coberta",
      shortDescription: "Centro gastronômico e cultural coberto, coração do Natal Luz",
      fullDescription: "A Rua Coberta é o epicentro cultural de Gramado, especialmente durante o Natal Luz. Este espaço coberto abriga restaurantes, cafés, lojas de artesanato e é palco de diversos espetáculos natalinos. Sua arquitetura europeia e decoração temática fazem dela um dos locais mais fotografados da cidade.",
      image: lagoNegroImage,
      duration: "2-3 horas",
      bestTime: "Noite (durante os shows)",
      highlights: ["Shows natalinos", "Gastronomia típica", "Artesanato local", "Arquitetura europeia"],
      ticketPrice: "Entrada gratuita, shows têm valores variados",
      tips: "Chegue cedo para garantir lugar nos shows. Reserve mesa nos restaurantes com antecedência."
    },
    {
      id: 3,
      name: "Mini Mundo",
      shortDescription: "Parque temático com miniaturas de construções famosas do mundo",
      fullDescription: "O Mini Mundo é um parque temático único que reproduz em miniatura diversas construções famosas do mundo e da região. Durante o Natal Luz, o parque ganha decoração especial com milhares de luzes, criando um cenário encantador tanto para crianças quanto para adultos.",
      image: lagoNegroImage,
      duration: "1-2 horas",
      bestTime: "Tarde e início da noite",
      highlights: ["Miniaturas detalhadas", "Iluminação natalina", "Jardins temáticos", "Ferrovia em miniatura"],
      ticketPrice: "R$ 35,00 (adulto)",
      tips: "Ideal para ir com crianças. Durante o Natal Luz, funciona até mais tarde com iluminação especial."
    },
    {
      id: 4,
      name: "Igreja São Pedro",
      shortDescription: "Igreja histórica com arquitetura gótica e vista panorâmica",
      fullDescription: "A Igreja São Pedro é um dos marcos arquitetônicos de Gramado. Sua torre oferece uma vista panorâmica da cidade, especialmente bela durante o Natal Luz quando toda Gramado se ilumina. A arquitetura gótica e os vitrais coloridos fazem dela um local de grande beleza e significado histórico.",
      image: lagoNegroImage,
      duration: "30-45 minutos",
      bestTime: "Final de tarde",
      highlights: ["Vista panorâmica", "Arquitetura gótica", "Vitrais históricos", "Localização central"],
      ticketPrice: "Gratuito",
      tips: "Suba na torre para ter a melhor vista da cidade iluminada. Respeite os horários de funcionamento."
    },
    {
      id: 5,
      name: "Aldeia do Papai Noel",
      shortDescription: "Parque temático natalino funcionando o ano todo",
      fullDescription: "A Aldeia do Papai Noel é o único parque temático natalino do mundo que funciona o ano todo. Durante o Natal Luz, recebe decoração especial e novos espetáculos. É o local perfeito para vivenciar a magia do Natal em qualquer época do ano, com casa do Papai Noel, oficinas dos duendes e muito mais.",
      image: lagoNegroImage,
      duration: "2-3 horas",
      bestTime: "Qualquer horário",
      highlights: ["Casa do Papai Noel", "Oficina dos duendes", "Espetáculos temáticos", "Loja de presentes"],
      ticketPrice: "R$ 45,00 (adulto)",
      tips: "Perfeito para famílias com crianças. Durante o Natal Luz, há espetáculos especiais."
    },
    {
      id: 6,
      name: "Snowland",
      shortDescription: "Primeiro parque de neve indoor da América Latina",
      fullDescription: "O Snowland é uma experiência única na América Latina - um parque de neve indoor com temperatura de -5°C. Oferece diversas atividades como esqui, snowboard, trenó e brincadeiras na neve. Durante o Natal Luz, o parque oferece atividades especiais e decoração temática.",
      image: lagoNegroImage,
      duration: "2-4 horas",
      bestTime: "Qualquer horário",
      highlights: ["Neve verdadeira", "Esqui e snowboard", "Trenó", "Roupas térmicas incluídas"],
      ticketPrice: "A partir de R$ 89,00",
      tips: "Reserve com antecedência. Roupas térmicas são fornecidas pelo parque."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pontos Turísticos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra os lugares mais encantadores de Gramado durante o Natal Luz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot) => (
            <Dialog key={spot.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card to-card/80">
                  <div className="relative overflow-hidden">
                    <img 
                      src={spot.image} 
                      alt={spot.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <Camera className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {spot.ticketPrice}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {spot.name}
                      </CardTitle>
                      <Info className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardDescription className="text-sm">
                      {spot.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {spot.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-xs">Clique para detalhes</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Ver Mais Informações
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    {spot.name}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {spot.fullDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img 
                    src={spot.image} 
                    alt={spot.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Informações Básicas
                      </h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong>Duração:</strong> {spot.duration}</p>
                        <p><strong>Melhor horário:</strong> {spot.bestTime}</p>
                        <p><strong>Entrada:</strong> {spot.ticketPrice}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        Destaques
                      </h4>
                      <ul className="space-y-1">
                        {spot.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">💡 Dicas Especiais</h4>
                    <p className="text-sm text-muted-foreground">{spot.tips}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      Incluir no Roteiro
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Solicitar Informações
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="christmas" size="lg" className="group">
            <MapPin className="h-5 w-5 group-hover:bounce transition-transform" />
            Criar Roteiro Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;