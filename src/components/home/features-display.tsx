import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants';
import Image from 'next/image';

export default function FeaturesDisplay() {
  return (
    <section id="features" className="w-full py-16 sm:py-24">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Packed with Features
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Omnix is designed with a comprehensive suite of tools to provide the ultimate server management experience.
        </p>
        <Tabs defaultValue={FEATURES[0].title} className="mt-8">
          <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="inline-flex w-max sm:w-full sm:grid sm:grid-cols-3 md:grid-cols-6">
              {FEATURES.map((feature) => (
                <TabsTrigger key={feature.title} value={feature.title}>
                  <feature.Icon className="mr-2 h-4 w-4" />
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {FEATURES.map((feature) => (
            <TabsContent key={feature.title} value={feature.title}>
              <Card className="mt-4 text-left">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                      {feature.title}
                    </CardTitle>
                    <CardContent className="pt-4 text-muted-foreground">
                      {feature.description}
                    </CardContent>
                  </CardHeader>
                  <div className="p-4">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} feature`}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                      data-ai-hint={feature.aiHint}
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
