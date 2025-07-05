'use client';

import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useSettings } from '../theme-provider';
import { cn } from '@/lib/utils';
import { Trans } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  const { isMounted } = useSettings();
  const heroTitle = t('hero.title', { defaultValue: "The All-in-One <1>Discord Bot</1>" });

  // Logic to parse the string and prepare words for animation
  const parts = heroTitle.split(/<\/?1>/); // Splits by <1> or </1>
  const words = parts.flatMap((part, index) => {
    if (!part) return [];
    const isPrimary = index === 1; // The part inside <1>...</1>
    return part.trim().split(' ').map(word => ({ text: word, isPrimary }));
  });

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for the title words
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const titleChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="relative w-full overflow-hidden py-32 text-center md:py-40 lg:py-48"
    >
      <div className="aurora-background" />

      <div className="container relative z-10 mx-auto">
        <h1
          className="font-headline text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {isMounted ? (
            <motion.div
              style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}
              variants={titleContainer}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={titleChild}
                  style={{ marginRight: "0.5rem" }}
                  className={cn(word.isPrimary && "text-primary")}
                  key={index}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <Trans i18nKey="hero.title">
              The All-in-One <span className="text-primary">Discord Bot</span>
            </Trans>
          )}
        </h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Omnix provides powerful moderation, anti-nuke, ticketing, music, and more to elevate your Discord server.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild className="smooth-hover shadow-lg shadow-primary/20">
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              Invite to Discord
            </a>
          </Button>
          <div className="smooth-hover rounded-md bg-gradient-to-r from-primary/50 to-accent/50 p-px">
            <Button size="lg" asChild className="bg-background/50 text-foreground backdrop-blur-sm hover:bg-accent/10">
              <Link href="/features">
                Explore Features
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
