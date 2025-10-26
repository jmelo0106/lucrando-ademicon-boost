import { Shield, Award, TrendingUp, Users } from "lucide-react";

const ConsultantIntro = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Foto da Consultora */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src="/placeholder.svg"
                  alt="Camilla - Consultora Ademicon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Apresentação */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Olá, sou a <span className="text-primary">Camilla</span>
              </h2>
              <p className="text-xl text-primary font-semibold">
                Consultora Especializada Ademicon
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Estou aqui para ajudar você a entender como transformar seu investimento em consórcio 
              numa oportunidade real de lucro. Com a Ademicon, você conta com uma das administradoras 
              mais sólidas e confiáveis do mercado.
            </p>

            {/* Pontos Fortes da Ademicon */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Por que escolher a Ademicon?
              </h3>
              
              <div className="grid gap-4">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Segurança e Confiança</h4>
                    <p className="text-sm text-muted-foreground">
                      Autorizada e fiscalizada pelo Banco Central do Brasil
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Excelência Reconhecida</h4>
                    <p className="text-sm text-muted-foreground">
                      Mais de 30 anos de experiência no mercado de consórcios
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Alto Potencial de Lucro</h4>
                    <p className="text-sm text-muted-foreground">
                      Estratégias comprovadas para maximizar seu retorno financeiro
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Atendimento Personalizado</h4>
                    <p className="text-sm text-muted-foreground">
                      Suporte completo em todas as etapas do seu investimento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantIntro;
