import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock, Star } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Reserve Sua Experiência
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e garante sua viagem dos sonhos para o Natal Luz
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe especializada está pronta para criar a experiência perfeita para você e sua família em Gramado.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(54) 3286-1234</p>
                      <p className="text-sm text-muted-foreground">Atendimento 24 horas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">(54) 99999-8888</p>
                      <p className="text-sm text-muted-foreground">Resposta imediata</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">E-mail</h4>
                      <p className="text-muted-foreground">contato@gramadoturismo.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 2 horas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary" />
                Por que escolher nossa agência?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Especialistas em Gramado há mais de 10 anos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Parceiros oficiais dos principais hotéis e atrações
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Atendimento personalizado 24 horas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Melhor preço garantido
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Card */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-primary/5">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-foreground">
                  Solicite Seu Orçamento
                </CardTitle>
                <CardDescription className="text-base">
                  Montaremos o melhor pacote para você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <Button variant="hero" size="lg" className="w-full">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Agora
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    <Phone className="h-5 w-5" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Mail className="h-5 w-5" />
                    Enviar E-mail
                  </Button>
                </div>

                <div className="text-center pt-4 border-t">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4" />
                    Horário de Atendimento
                  </div>
                  <p className="text-sm text-foreground font-medium">
                    Todos os dias das 8h às 22h
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Atendimento facilitado no Whatsapp
                  </p>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;