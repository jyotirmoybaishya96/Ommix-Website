'use client';

import { useSettings } from '@/components/theme-provider';
import { AnimatePresence, motion } from 'framer-motion';

function AuroraBackground() {
  return (
    <motion.div
      key="aurora"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="aurora-background"
    />
  );
}

function SnowfallBackground() {
  const snowflakes = Array.from({ length: 150 });
  return (
    <motion.div
      key="snowfall"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="snowfall-background"
    >
      {snowflakes.map((_, i) => (
        <div key={i} className="snowflake" />
      ))}
    </motion.div>
  );
}

export function BackgroundRenderer() {
  const { backgroundEffect, isMounted } = useSettings();

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {backgroundEffect === 'aurora' && <AuroraBackground />}
      {backgroundEffect === 'snowfall' && <SnowfallBackground />}
    </AnimatePresence>
  );
}
