import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcos F.",
      location: "Curitiba/PR",
      text: "Com a Ademicon, entendi que o consórcio pode ser também um investimento. Quando fui contemplado, vendi minha carta e tive lucro real!",
      videoId: "dQw4w9WgXcQ", // Placeholder - replace with real video ID
      rating: 5,
    },
    {
      name: "Luciana A.",
      location: "São Paulo/SP",
      text: "O atendimento foi transparente e a operação totalmente segura. Recebi o valor da venda da carta direto pela Ademicon.",
      videoId: "dQw4w9WgXcQ", // Placeholder - replace with real video ID
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            🎥 Depoimentos Reais
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes têm a dizer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
              {/* Video Embed */}
              <div className="aspect-video bg-muted relative overflow-hidden group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`Depoimento ${testimonial.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground">
                    — {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
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

export default Testimonials;
