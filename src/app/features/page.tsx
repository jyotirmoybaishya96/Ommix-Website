
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { DISCORD_INVITE_URL, FEATURES } from '@/lib/constants';
import { FeatureCanvas } from '@/components/home/feature-canvas';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Bot, CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function FeaturesPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Bot className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Packed with Features</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Omnix is designed with a comprehensive suite of tools to provide the ultimate server management experience.
            </p>
        </div>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent className="-ml-4">
            {FEATURES.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="flex h-full flex-col text-left transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <feature.Icon className="h-8 w-8 shrink-0 text-primary" />
                        <CardTitle className="font-headline text-2xl">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col gap-4 pt-0">
                      <div className="relative w-full overflow-hidden rounded-lg bg-muted/50" style={{aspectRatio: '500 / 300'}}>
                        <FeatureCanvas title={feature.title} />
                      </div>
                      <p className="flex-grow text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'h-[8px] rounded-full transition-all duration-300 ease-in-out',
                current === index ? 'w-[24px] bg-primary' : 'w-[8px] bg-muted-foreground/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-24">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">A Closer Look</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Dive into the specifics of what makes Omnix the right choice for your community.
                </p>
            </div>

            <Accordion type="single" collapsible className="mt-12 w-full space-y-4">
                {FEATURES.map((feature, index) => (
                    <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-md data-[state=open]:border-primary data-[state=open]:shadow-lg"
                    >
                    <AccordionTrigger className="w-full px-6 py-5 text-left font-headline text-lg transition-colors hover:no-underline data-[state=open]:bg-primary/5 data-[state=open]:text-primary">
                        <div className="flex items-center gap-4">
                            <feature.Icon className="h-6 w-6 shrink-0" />
                            {feature.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                        <p className="mb-4">{feature.description}</p>
                        <ul className="space-y-3">
                            {feature.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>

        <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center sm:mt-24">
            <h2 className="font-headline text-3xl font-bold">Ready to Elevate Your Server?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join thousands of other communities who trust Omnix for powerful, reliable, and easy-to-use server management.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="smooth-hover">
                    <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                        Invite to Discord
                    </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="smooth-hover">
                    <Link href="/premium">
                        Compare Plans
                    </Link>
                </Button>
            </div>
        </div>

      </div>
  );
}
