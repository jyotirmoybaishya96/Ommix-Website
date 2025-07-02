import { PremiumPlans } from '@/components/premium/premium-plans';
import { FeatureComparison } from '@/components/premium/feature-comparison';
import { Gem } from 'lucide-react';

export default function PremiumPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16 sm:py-24">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Gem className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Unlock Premium</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Supercharge your server with Omnix Premium. Get access to exclusive features and priority support.
        </p>
      </div>

      <PremiumPlans />
      <FeatureComparison />
    </div>
  );
}
