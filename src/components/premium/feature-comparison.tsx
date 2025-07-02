import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PREMIUM_FEATURES } from "@/lib/constants";
import { Check, X } from "lucide-react";

function FeatureCell({ value, isFree }: { value: string | boolean; isFree?: boolean }) {
  if (typeof value === 'boolean') {
    if (value) {
      return <Check className={`mx-auto h-5 w-5 ${isFree ? 'text-green-500' : 'text-primary'}`} />;
    }
    return <X className="mx-auto h-5 w-5 text-destructive" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}


export function FeatureComparison() {
  return (
    <div className="mt-16 sm:mt-24">
      <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
        Full Feature Comparison
      </h2>
      <div className="mt-8 overflow-hidden rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/10 hover:bg-muted/10">
              <TableHead className="w-1/2 py-4 font-headline text-base text-foreground sm:w-2/3">Feature</TableHead>
              <TableHead className="py-4 text-center font-headline text-base text-foreground">Free</TableHead>
              <TableHead className="py-4 text-center font-headline text-base text-foreground">Premium</TableHead>
            </TableRow>
          </TableHeader>
          {PREMIUM_FEATURES.map((category) => (
            <TableBody key={category.category}>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableCell colSpan={3} className="font-headline text-base font-semibold text-foreground">
                  {category.category}
                </TableCell>
              </TableRow>
              {category.features.map((feature) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium text-muted-foreground">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    <FeatureCell value={feature.free} isFree />
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureCell value={feature.premium} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
}
