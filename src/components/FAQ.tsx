import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "É seguro vender a carta contemplada?",
      answer: "Sim. O processo é realizado com suporte direto da Ademicon e toda a documentação é validada pela administradora. Você tem total segurança jurídica e transparência em todas as etapas.",
    },
    {
      question: "Posso realmente lucrar com o consórcio?",
      answer: "Sim! O lucro vem da valorização da carta contemplada no momento da venda. Quando você vende sua carta a alguém que precisa do crédito imediatamente, a diferença entre o que você pagou e o valor de venda se torna seu lucro.",
    },
    {
      question: "Há taxas extras?",
      answer: "Apenas taxas administrativas já incluídas no plano — sem juros. A Ademicon trabalha com transparência total e todos os custos são informados previamente.",
    },
    {
      question: "Quanto tempo leva para ser contemplado?",
      answer: "O tempo varia conforme o grupo e pode acontecer por sorteio mensal ou lance. Alguns clientes são contemplados nos primeiros meses, outros levam mais tempo. Você pode acompanhar tudo pelo portal da Ademicon.",
    },
    {
      question: "Como funciona o processo de venda da carta?",
      answer: "A Ademicon facilita todo o processo. Após a contemplação, você pode optar por vender a carta através da própria administradora, que cuida de toda a burocracia e garante a segurança da transação.",
    },
    {
      question: "Quem pode comprar um consórcio Ademicon?",
      answer: "Qualquer pessoa física ou jurídica pode investir em um consórcio Ademicon. É necessário ter mais de 18 anos, CPF/CNPJ válido e passar pela análise cadastral da administradora.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            ❓ Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Respostas para as perguntas mais comuns
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-elegant transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
