import { Card } from "@/components/ui/card";
import { CreditCard, Timer, DollarSign, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Escolha o seu plano",
      description: "Defina o valor de crédito e o tipo de consórcio que melhor se adequa aos seus objetivos.",
    },
    {
      icon: Timer,
      title: "Aguarde a contemplação",
      description: "Seja sorteado ou contemplado por lance — acompanhe seu grupo mensalmente.",
    },
    {
      icon: DollarSign,
      title: "Venda sua carta contemplada",
      description: "Transfira o direito do crédito e lucre com a diferença entre o valor pago e o valor de venda.",
    },
    {
      icon: Shield,
      title: "Receba com segurança",
      description: "Toda a operação é supervisionada pela Ademicon com total transparência.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            💡 Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda o caminho para lucrar com seu consórcio Ademicon
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            🧩 <em>Simples, legal e com total suporte administrativo.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
