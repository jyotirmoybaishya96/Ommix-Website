'use client';

import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useSettings } from '../theme-provider';

const AnimatedWords = ({ text }: { text: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
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
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.5rem" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};


export default function HeroSection() {
  const { t } = useTranslation();
  const { isMounted } = useSettings();
  const heroTitle = t('hero.title', { defaultValue: "The All-in-One Discord Bot" });

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
            <AnimatedWords text={heroTitle} />
          ) : (
            "The All-in-One Discord Bot"
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
          <Button size="lg" variant="outline" asChild className="smooth-hover border-foreground/20 bg-background/50 backdrop-blur-sm">
            <Link href="/features">
              Explore Features
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
