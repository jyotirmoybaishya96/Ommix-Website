
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants';
import { FeatureCanvas } from './feature-canvas';
import { motion } from 'framer-motion';

export default function FeaturesDisplay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="features" className="w-full py-16 sm:py-24">
      <div className="container mx-auto">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Packed with Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Omnix is designed with a comprehensive suite of tools to provide the ultimate server management experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group flex h-full flex-col text-left transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <feature.Icon className="h-8 w-8 shrink-0 text-primary transition-all duration-300 group-hover:text-primary-foreground group-hover:bg-primary rounded-md p-1" />
                    </motion.div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
