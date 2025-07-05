'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const FeatureCard = ({
  feature,
  className,
}: {
  feature: (typeof FEATURES)[0];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const { width, height, left, top } = rect;
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -20;
    const rotateY = (x / width - 0.5) * 20;
    setRotate({ x: rotateX, y: rotateY });

    ref.current?.style.setProperty('--x', `${x}px`);
    ref.current?.style.setProperty('--y', `${y}px`);
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/20 p-px shadow-2xl shadow-black/20",
        className
      )}
    >
      <div className="relative z-10 h-full w-full rounded-[11px] bg-card/80 p-6 backdrop-blur-sm">
        {/* Glare effect */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(400px circle at var(--x) var(--y), hsl(var(--primary) / 0.15), transparent 40%)',
          }}
        />
        
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
            <feature.Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default function FeaturesDisplay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="features" className="w-full py-24 sm:py-32">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            The Ultimate Toolkit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Omnix isn't just a bot; it's an entire ecosystem of tools designed to make your server thrive.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
            <motion.div variants={itemVariants} className="lg:col-span-2">
                <FeatureCard feature={FEATURES[0]} className="h-full" />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FeatureCard feature={FEATURES[1]} className="h-full" />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FeatureCard feature={FEATURES[2]} className="h-full" />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-2">
                <FeatureCard feature={FEATURES[3]} className="h-full" />
            </motion.div>
             <motion.div variants={itemVariants}>
                <FeatureCard feature={FEATURES[4]} className="h-full" />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-2">
                <FeatureCard feature={FEATURES[5]} className="h-full" />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
