import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é a melhor época para visitar Gramado?",
      answer: "A melhor época depende do seu objetivo. Para o Natal Luz, visite de outubro a janeiro. Para clima mais frio e romântico, junho a agosto. Para preços mais baixos e menos multidões, março a maio e setembro."
    },
    {
      question: "Quantos dias são necessários para conhecer Gramado?",
      answer: "Recomendamos pelo menos 3 a 4 dias para conhecer os principais pontos turísticos. Para uma experiência mais completa incluindo Canela e região, considere de 5 a 7 dias."
    },
    {
      question: "Preciso de carro para me locomover em Gramado?",
      answer: "Não é obrigatório. O centro de Gramado é compacto e pode ser explorado a pé. Há também transporte público, táxis e aplicativos. Para visitar Canela e atrações mais distantes, um carro pode ser útil."
    },
    {
      question: "Quais são os ingressos obrigatórios para o Natal Luz?",
      answer: "Os principais shows pagos são: Nativitaten (show da Natividade), Grande Desfile de Natal e show do Lago Negro. Há também eventos gratuitos como a decoração das ruas e algumas apresentações no centro."
    },
    {
      question: "Gramado é uma cidade cara?",
      answer: "Gramado tem preços acima da média nacional, especialmente durante o Natal Luz. Para economizar: visite fora da alta temporada, reserve com antecedência, considere pousadas em vez de hotéis de luxo, e aproveite atrações gratuitas."
    },
    {
      question: "Que roupas levar para Gramado?",
      answer: "Leve roupas para frio mesmo no verão (casaco leve). No inverno: casacos pesados, luvas, gorros e sapatos fechados. Sempre tenha um guarda-chuva, pois pode chover em qualquer época."
    },
    {
      question: "Posso levar crianças para Gramado?",
      answer: "Sim! Gramado é muito family-friendly. Há atrações específicas para crianças como Mini Mundo, Aldeia do Papai Noel, Snowland e diversos parques. A maioria dos restaurantes têm opções kids."
    },
    {
      question: "Como chegar em Gramado saindo de outras cidades?",
      answer: "De avião: voe para Porto Alegre (115km de distância). De carro: Gramado fica na RS-115. Há também ônibus diretos de várias capitais. Oferecemos transfers e pacotes completos com transporte incluído."
    },
    {
      question: "Quais documentos preciso para viajar para Gramado?",
      answer: "Para brasileiros: RG original em bom estado ou CNH dentro da validade. Para estrangeiros: passaporte válido. Crianças precisam de RG ou certidão de nascimento."
    },
    {
      question: "Vocês oferecem parcelamento para os pacotes?",
      answer: "Sim! Oferecemos parcelamento em até 12x sem juros no cartão de crédito para a maioria dos nossos pacotes. Também aceitamos PIX com desconto e boleto bancário."
    },
    {
      question: "Posso cancelar minha viagem?",
      answer: "Sim, seguimos as políticas de cancelamento de acordo com a antecedência: até 30 dias antes - reembolso total; de 15 a 29 dias - 80% de reembolso; de 7 a 14 dias - 50%; menos de 7 dias - consulte nossa equipe."
    },
    {
      question: "Vocês têm suporte durante a viagem?",
      answer: "Sim! Oferecemos suporte 24h via WhatsApp durante toda sua estadia. Também temos parcerias locais para assistência imediata em Gramado e região."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <HelpCircle className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
            </div>
            <p className="text-base md:text-xl text-muted-foreground">
              Tire suas dúvidas sobre viagens para Gramado e nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-0 bg-card rounded-lg shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 md:py-5 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                  <span className="text-sm md:text-base font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 md:pb-5 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 md:p-8 rounded-xl">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                Não encontrou sua resposta?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Nossa equipe especializada está pronta para ajudar você a planejar sua viagem perfeita!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://wa.me/5551999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base font-medium"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="tel:+5551999999999"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base font-medium"
                >
                  📞 Telefone
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;