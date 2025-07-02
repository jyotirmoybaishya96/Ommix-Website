'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

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

  return (
    <div className="mt-16">
      <div className="flex items-center justify-center space-x-2">
        <Label htmlFor="billing-cycle">Monthly</Label>
        <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} />
        <Label htmlFor="billing-cycle">Yearly</Label>
        <span className="ml-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Save 15%
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <Card className="flex flex-col rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
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
              {plans.free.features.map(feature => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button disabled variant="outline" className="w-full">
              {plans.free.buttonText}
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="relative flex flex-col rounded-lg border-2 border-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle className="font-headline">{plans.premium.name}</CardTitle>
            <CardDescription>{plans.premium.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-grow flex-col gap-6">
            <div className="font-headline text-4xl font-bold">
              {isYearly ? '$8.33' : '$9.99'}
              <span className="text-lg font-normal text-muted-foreground">/mo</span>
            </div>
             <ul className="space-y-3 text-muted-foreground">
              {plans.premium.features.map(feature => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full smooth-hover">
              {plans.premium.buttonText}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
