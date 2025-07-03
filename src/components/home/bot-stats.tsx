'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Server, Users, Wifi, Clock } from 'lucide-react';

type BotStatsData = {
  guilds: number;
  users: number;
  channels: number;
  ping: number;
  uptime: number; // in seconds
};

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) {
    return '0d 0h 0m';
  }
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
};

function AnimatedCounter({ value, isTime = false }: { value: number; isTime?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const springValue = useSpring(0, {
    damping: 20,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [springValue, value, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  const formattedValue = isTime ? formatTime(displayValue) : Math.round(displayValue).toLocaleString();

  return <span ref={ref}>{formattedValue}</span>;
}

export default function BotStats() {
  const [stats, setStats] = useState<BotStatsData | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const statItems = [
    { label: 'Servers', value: stats?.guilds ?? 0, Icon: Server },
    { label: 'Users', value: stats?.users ?? 0, Icon: Users },
    { label: 'Ping', value: stats?.ping ?? 0, Icon: Wifi, suffix: 'ms' },
    { label: 'Uptime', value: stats?.uptime ?? 0, isTime: true, Icon: Clock },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <section className="relative w-full py-24 sm:py-32">
       <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Powering Thousands of Communities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Omnix is trusted by a rapidly growing number of servers, providing reliable and powerful tools for communities of all sizes.
          </p>
        </motion.div>
        
        <motion.div 
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
          {statItems.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <item.Icon className="h-7 w-7 text-primary" />
                <h3 className="text-lg font-semibold text-muted-foreground">{item.label}</h3>
              </div>
              <div className="mt-2 font-headline text-4xl font-bold md:text-5xl">
                {stats ? (
                  <>
                    <AnimatedCounter value={item.value} isTime={item.isTime} />
                    {item.suffix}
                  </>
                ) : (
                  <Skeleton className="mx-auto h-12 w-32" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
