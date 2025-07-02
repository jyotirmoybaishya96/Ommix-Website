'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PremiumPlans() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = {
    free: {
      name: 'Free',
      description: 'The essentials for getting started with server management.',
      buttonText: 'Currently Active',
      features: [
        'Basic Moderation',
        'Ticketing System',
        'Standard Music Quality',
        'Community Support',
      ],
    },
    premium: {
      name: 'Premium',
      description: 'Unlock all features for the ultimate server experience.',
      buttonText: 'Upgrade to Premium',
      features: [
        'Everything in Free',
        'Advanced Anti-Nuke',
        'AI-Powered Auto-Mod',
        'Custom Branding',
        'High-Quality Music',
        'Priority Support',
      ],
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="mt-16">
      <motion.div
        className="flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Label htmlFor="billing-cycle">Monthly</Label>
        <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} aria-label="billing-cycle" />
        <Label htmlFor="billing-cycle">Yearly</Label>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isYearly ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="ml-2 origin-left rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
        >
          Save 15%
        </motion.div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="flex h-full flex-col rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">{plans.free.name}</CardTitle>
              <CardDescription>{plans.free.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col gap-6">
              <div className="font-headline text-4xl font-bold">
                $0
                <span className="text-lg font-normal text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {plans.free.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button disabled variant="outline" className="w-full">
                {plans.free.buttonText}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Card className="relative flex h-full flex-col rounded-lg border-2 border-primary shadow-lg shadow-primary/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{plans.premium.name}</CardTitle>
              <CardDescription>{plans.premium.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col gap-6">
              <div className="relative h-[44px] font-headline text-4xl font-bold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isYearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    {isYearly ? '$8.49' : '$9.99'}
                  </motion.span>
                </AnimatePresence>
                <span className="ml-24 text-lg font-normal text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {plans.premium.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full smooth-hover">
                {plans.premium.buttonText}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
