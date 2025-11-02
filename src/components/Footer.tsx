import { Shield, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="bg-gradient-primary bg-clip-text text-transparent font-bold text-3xl">
              Ademicon
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Consórcios de Investimento S/A
            </p>
            <div className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-success flex-shrink-0 mt-1" />
              <p className="text-background/80 text-sm">
                Autorizada e fiscalizada pelo Banco Central do Brasil
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Contato</h3>
            <div className="space-y-3">
              <a href="tel:41998821487" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(41) 99882-1487</span>
              </a>
              <a href="mailto:camillagarnik@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">camillagarnik@gmail.com</span>
              </a>
              <a href="https://wa.me/5541998821487" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">WhatsApp: (41) 9 9882-1487</span>
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Localização</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <p className="text-background/80 text-sm">
                Curitiba – PR<br />
                Brasil
              </p>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Links Úteis</h3>
            <div className="space-y-3">
              <a href="https://www.ademicon.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">www.ademicon.com.br</span>
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {new Date().getFullYear()} Ademicon Consórcios de Investimento S/A. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>🔒 Site seguro e protegido</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
