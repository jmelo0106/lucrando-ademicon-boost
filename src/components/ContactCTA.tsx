import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  const whatsappLink = "https://wa.me/5541999999999?text=Tenho+interesse+em+investir+no+consórcio+Ademicon+e+entender+os+lucros+com+a+carta+contemplada";

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 shadow-elegant bg-card">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                📞 Simule agora e descubra seu potencial de ganho
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha os dados e fale com um consultor especializado
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                className="bg-success hover:bg-success/90 text-success-foreground text-lg h-14 px-8 shadow-elegant w-full sm:w-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Falar via WhatsApp agora
                </a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-sm font-medium text-foreground">(41) XXXX-XXXX</p>
                <p className="text-xs text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-sm font-medium text-foreground">contato@ademicon.com.br</p>
                <p className="text-xs text-muted-foreground">Resposta em até 24h</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                <p className="text-sm font-medium text-foreground">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Atendimento instantâneo</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactCTA;
