import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Percent, Users, Briefcase } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança total",
      description: "Administradora autorizada pelo Banco Central",
    },
    {
      icon: TrendingUp,
      title: "Lucro expressivo",
      description: "Possibilidade de alto retorno ao revender a carta contemplada",
    },
    {
      icon: Percent,
      title: "Sem juros",
      description: "Apenas taxa de administração, sem juros abusivos",
    },
    {
      icon: Users,
      title: "Suporte profissional",
      description: "Gestão e atendimento humano em todas as etapas",
    },
    {
      icon: Briefcase,
      title: "Liberdade de escolha",
      description: "Escolha bem, valor e prazo que se adequam ao seu perfil",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            🏆 Benefícios Ademicon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Por que investir no consórcio Ademicon?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    ✅ {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
