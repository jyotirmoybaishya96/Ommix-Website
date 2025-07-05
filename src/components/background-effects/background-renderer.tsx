'use client';

import { useSettings } from '@/components/theme-provider';
import { AnimatePresence, motion } from 'framer-motion';

const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
};

function AuroraBackground() {
  return <motion.div {...motionProps} key="aurora" className="aurora-background" />;
}

function SnowfallBackground() {
  const snowflakes = Array.from({ length: 150 });
  return (
    <motion.div {...motionProps} key="snowfall" className="snowfall-background">
      {snowflakes.map((_, i) => (
        <div key={i} className="snowflake" />
      ))}
    </motion.div>
  );
}

function BubblesBackground() {
  const bubbles = Array.from({ length: 50 });
  return (
    <motion.div {...motionProps} key="bubbles" className="bubbles-background">
      {bubbles.map((_, i) => (
        <div key={i} className="bubble" />
      ))}
    </motion.div>
  );
}

function ConfettiBackground() {
  const confetti = Array.from({ length: 150 });
  return (
    <motion.div {...motionProps} key="confetti" className="confetti-background">
      {confetti.map((_, i) => (
        <div key={i} className="confetti" />
      ))}
    </motion.div>
  );
}

function StaticBackground() {
  return <motion.div {...motionProps} key="static" className="static-background" />;
}

function StarsBackground() {
  const stars = Array.from({ length: 50 });
  return (
    <motion.div {...motionProps} key="stars" className="stars-background">
      {stars.map((_, i) => (
        <div key={i} className="star" />
      ))}
    </motion.div>
  );
}

function GridBackground() {
  return <motion.div {...motionProps} key="grid" className="grid-background" />;
}

function GradientBackground() {
    return <motion.div {...motionProps} key="gradient" className="gradient-background" />;
}

export function BackgroundRenderer() {
  const { backgroundEffect, isMounted } = useSettings();

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {backgroundEffect === 'aurora' && <AuroraBackground />}
      {backgroundEffect === 'snowfall' && <SnowfallBackground />}
      {backgroundEffect === 'bubbles' && <BubblesBackground />}
      {backgroundEffect === 'confetti' && <ConfettiBackground />}
      {backgroundEffect === 'static' && <StaticBackground />}
      {backgroundEffect === 'stars' && <StarsBackground />}
      {backgroundEffect === 'grid' && <GridBackground />}
      {backgroundEffect === 'gradient' && <GradientBackground />}
    </AnimatePresence>
  );
}
