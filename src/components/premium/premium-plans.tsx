'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Gem, Rocket, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const planData = [
  {
    name: 'Free',
    icon: Sparkles,
    description: 'For individuals and small communities getting started.',
    price: { monthly: 0, yearly: 0 },
    button: { text: 'Currently Active', variant: 'outline', disabled: true, href: '#' },
    features: [
      'Basic Moderation',
      'Ticketing System',
      'Standard Music Quality',
      'Community Support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    icon: Gem,
    description: 'For growing servers that need more power and features.',
    price: { monthly: 799, yearly: 679 },
    button: { text: 'Upgrade to Pro', variant: 'default', disabled: false, href: '/purchase' },
    features: [
      'Everything in Free',
      'Advanced Anti-Nuke',
      'AI-Powered Auto-Mod',
      'Custom Branding',
      'High-Quality Music',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    description: 'For large-scale communities requiring dedicated solutions.',
    price: { monthly: 2499, yearly: 2129 },
    button: { text: 'Contact Sales', variant: 'outline', disabled: false, href: '/support' },
    features: [
      'Everything in Pro',
      'Dedicated Bot Instance',
      'SLA & Uptime Guarantee',
      'Onboarding Assistance',
      'Custom Feature Development',
      '24/7 Enterprise Support',
    ],
    isPopular: false,
  },
];


export function PremiumPlans() {
  const [isYearly, setIsYearly] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  
  const featureListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
  };

  return (
    <div className="mt-16">
      <motion.div
        className="flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
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

      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {planData.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            className={cn(plan.isPopular && "relative")}
          >
            {plan.isPopular && (
              <motion.div 
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-md" 
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              />
            )}
             <motion.div
              className="relative h-full"
              whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
            >
              <Card className={cn(
                "flex h-full flex-col rounded-xl border shadow-sm transition-shadow",
                 plan.isPopular ? "border-primary/20 shadow-primary/10" : "hover:shadow-2xl"
              )}>
                 {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                <CardHeader className="items-center text-center">
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <plan.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <CardTitle className="pt-2 font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col gap-6 text-center">
                   <div className="relative h-12 font-headline text-5xl font-bold">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={isYearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-x-0"
                        >
                           ₹{isYearly ? plan.price.yearly : plan.price.monthly}
                           <span className="text-base font-normal text-muted-foreground">/mo</span>
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <Button asChild className="w-full smooth-hover" variant={plan.button.variant as any} disabled={plan.button.disabled}>
                        <Link href={plan.button.href}>{plan.button.text}</Link>
                    </Button>
                </CardContent>
                <CardFooter className="flex-col !p-0">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-t">
                        <AccordionTrigger className="px-6 text-sm font-medium text-muted-foreground hover:no-underline">
                          What's included
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <motion.ul 
                            className="space-y-3 text-left text-sm text-muted-foreground"
                            variants={featureListVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {plan.features.map((feature) => (
                              <motion.li 
                                  key={feature}
                                  className="flex items-start gap-3"
                                  variants={featureItemVariants}
                                >
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                          </motion.ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
