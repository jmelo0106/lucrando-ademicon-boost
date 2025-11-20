import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, CheckCircle, TrendingUp } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5541998821487?text=Quero+saber+como+lucrar+com+meu+consórcio+Ademicon";

  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center">
            <div className="inline-block">
              <div className="bg-gradient-primary bg-clip-text text-transparent font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Ademicon
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                💰 Invista em cartas de consórcio e potencialize sua <span className="bg-gradient-primary bg-clip-text text-transparent">alavancagem financeira</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Compre sua carta de consórcio enquanto ela ainda está valorizando e prepare-se para lucrar com uma venda futura lucrativa. 
                A Ademicon oferece a oportunidade de transformar seu investimento em receita segura e crescente.
              </p>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Aproveite o mercado escalável de cartas contempladas, um caminho inteligente para quem busca alavancar seu patrimônio com negociação transparente e apoio especializado.
              </p>
              
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-all text-lg h-14 px-8 shadow-elegant"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Quero investir e lucrar com consórcio
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
