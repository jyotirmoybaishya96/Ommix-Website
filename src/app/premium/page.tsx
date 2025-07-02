'use client';

import { PremiumPlans } from '@/components/premium/premium-plans';
import { FeatureComparison } from '@/components/premium/feature-comparison';
import { Gem } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PremiumPage() {
  return (
    <div className="container mx-auto max-w-5xl overflow-hidden py-16 sm:py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
          animate={{ rotate: [0, 10, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Gem className="h-8 w-8 text-primary" />
        </motion.div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Unlock Premium</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Supercharge your server with Omnix Premium. Get access to exclusive features and priority support.
        </p>
      </motion.div>

      <PremiumPlans />
      <FeatureComparison />
    </div>
  );
}
