import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/554198821487?text=Quero+entender+como+ter+lucro+com+meu+consórcio+Ademicon";

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
              ✅ Transforme seu consórcio em oportunidade de lucro real
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              <strong>Invista com segurança, seja contemplado e venda sua carta com apoio da Ademicon.</strong>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg h-16 px-10 shadow-2xl font-semibold group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Fale com um consultor via WhatsApp agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <p className="text-primary-foreground/80 text-sm">
            📞 Atendimento imediato • 🔒 100% Seguro • ✅ Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
