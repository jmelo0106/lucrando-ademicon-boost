import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const ProfitTable = () => {
  const investments = [
    { monthly: "R$ 269,84", credit: "R$ 80 Mil", profit: "R$ 32 Mil" },
    { monthly: "R$ 337,30", credit: "R$ 100 Mil", profit: "R$ 40 Mil" },
    { monthly: "R$ 674,60", credit: "R$ 200 Mil", profit: "R$ 80 Mil" },
    { monthly: "R$ 1.011,90", credit: "R$ 300 Mil", profit: "R$ 120 Mil" },
    { monthly: "R$ 1.686,50", credit: "R$ 500 Mil", profit: "R$ 200 Mil" },
    { monthly: "R$ 2.361,10", credit: "R$ 700 Mil", profit: "R$ 280 Mil" },
    { monthly: "R$ 3.451,00", credit: "R$ 1 Milhão", profit: "R$ 400 Mil" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            📊 Tabela de Ganhos
          </h2>
          <p className="text-xl text-muted-foreground">
            Grupo de Investidores — Potencial de Lucro
          </p>
        </div>
        
        <Card className="overflow-hidden shadow-elegant max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-primary hover:bg-gradient-primary">
                  <TableHead className="text-primary-foreground font-semibold text-base">
                    💵 Investimento Mensal
                  </TableHead>
                  <TableHead className="text-primary-foreground font-semibold text-base">
                    💰 Valor do Crédito
                  </TableHead>
                  <TableHead className="text-primary-foreground font-semibold text-base">
                    📈 Lucro Médio
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investments.map((item, index) => (
                  <TableRow 
                    key={index}
                    className="hover:bg-secondary transition-colors"
                  >
                    <TableCell className="font-medium text-base">
                      {item.monthly}
                    </TableCell>
                    <TableCell className="text-base">{item.credit}</TableCell>
                    <TableCell className="font-bold text-success text-base flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {item.profit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            📈 <em>Os valores são estimativas médias de mercado, variando conforme as condições de contemplação e valorização da carta.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfitTable;
