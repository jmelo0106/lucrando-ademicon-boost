import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

const ExplainerArticle = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              💬 Como o consórcio Ademicon pode gerar lucro
            </h2>
          </div>
          
          <Card className="p-8 lg:p-12 shadow-elegant space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando sua carta é contemplada, você recebe o{" "}
                <strong className="text-foreground">direito de usar o crédito total</strong> do grupo.
                Muitos investidores escolhem{" "}
                <strong className="text-foreground">vender essa carta</strong> a quem deseja o crédito
                imediatamente — e é aí que o{" "}
                <strong className="text-success">lucro acontece</strong>.
              </p>
            </div>
            
            <div className="bg-gradient-hero rounded-xl p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                Exemplo Prático
              </h3>
              
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-base font-semibold">Situação</TableHead>
                    <TableHead className="text-base font-semibold text-right">Valor (R$)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-base">Total pago em parcelas</TableCell>
                    <TableCell className="text-base text-right">45.000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-base">Valor da carta contemplada</TableCell>
                    <TableCell className="text-base text-right">70.000</TableCell>
                  </TableRow>
                  <TableRow className="border-t-2 border-primary">
                    <TableCell className="text-base font-bold">Lucro aproximado</TableCell>
                    <TableCell className="text-xl font-bold text-success text-right">
                      25.000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="bg-success/10 border border-success/20 rounded-xl p-6">
              <p className="text-base text-foreground leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-success">A transação é feita com acompanhamento da própria Ademicon</strong>,
                  garantindo segurança e formalização total em todas as etapas do processo.
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExplainerArticle;
