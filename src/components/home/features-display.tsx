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
import { FEATURES } from '@/lib/constants';
import { FeatureCanvas } from './feature-canvas';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function FeaturesDisplay() {
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
    <section id="features" className="w-full py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Packed with Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Omnix is designed with a comprehensive suite of tools to provide the ultimate server management experience.
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mt-8 w-full"
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
      </div>
    </section>
  );
}
