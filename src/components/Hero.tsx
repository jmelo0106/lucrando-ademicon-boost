import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, CheckCircle, TrendingUp } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5541999999999?text=Quero+saber+como+lucrar+com+meu+consórcio+Ademicon";

  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="bg-gradient-primary bg-clip-text text-transparent font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Ademicon
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              💰 Consórcio pode gerar{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                grande lucratividade
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Invista em um consórcio Ademicon e descubra como transformar sua carta contemplada em{" "}
              <strong className="text-foreground">lucro real e seguro</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all text-lg h-14 px-8 shadow-elegant"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Fale com um especialista agora
                </a>
              </Button>
            </div>
            
            {/* Trust Elements */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Autorizada pelo Banco Central
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Transação segura e transparente
                </p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Suporte personalizado Ademicon
                </p>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-card p-8">
              <div className="aspect-square bg-gradient-hero rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <TrendingUp className="w-24 h-24 text-primary mx-auto" />
                  <div className="text-4xl font-bold text-foreground">Lucro Real</div>
                  <div className="text-xl text-muted-foreground">com seu consórcio</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
