
'use client';

import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import { useSettings } from '../theme-provider';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedBlob = ({ className, animationProps }: any) => (
  <motion.div
    variants={{
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    }}
    className={cn(
      "absolute rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl",
      className
    )}
    {...animationProps}
  />
);

export default function HeroSection() {
  const { t } = useTranslation();
  const { isMounted } = useSettings();

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="relative w-full overflow-hidden py-20 text-center md:py-32 lg:py-40"
    >
      <div className="absolute inset-0 -z-10">
        <AnimatedBlob 
          className="h-[300px] w-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2" 
          animationProps={{ transition: { delay: 0.1, duration: 0.8, ease: "easeOut" } }} 
        />
        <AnimatedBlob 
          className="bottom-0 right-0 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2" 
          animationProps={{ transition: { delay: 0.2, duration: 1.0, ease: "easeOut" } }}
        />
         <AnimatedBlob 
          className="top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
          animationProps={{ transition: { delay: 0.3, duration: 1.2, ease: "easeOut" } }}
        />
      </div>

      <div className="container relative z-0 mx-auto">
        <motion.h1 
          variants={itemVariants}
          className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <Trans i18nKey="hero.title">
            The All-in-One <span className="text-primary">Discord Bot</span>
          </Trans>
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {t('hero.subtitle', 'Omnix provides powerful moderation, anti-nuke, ticketing, music, and more to elevate your Discord server.')}
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild className="smooth-hover">
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              {t('hero.invite_button', 'Invite to Discord')}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="smooth-hover">
            <Link href="/features">
              {t('hero.learn_more_button', 'Learn More')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
