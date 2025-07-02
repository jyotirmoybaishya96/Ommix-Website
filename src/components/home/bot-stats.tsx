'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BOT_STATS } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const initialStats = BOT_STATS.map(stat => ({
  ...stat,
  numericValue: parseFloat(stat.value.replace(/,/g, '').replace('+', '').replace('M', '000000').replace('ms', '')),
}));

export default function BotStats() {
  const [stats, setStats] = useState(initialStats);
  const [uptime, setUptime] = useState({ d: 0, h: 0, m: 0 });
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setStats(prevStats => prevStats.map(stat => (stat.label === 'Servers' ? { ...stat, numericValue: stat.numericValue + 1 } : stat)));
      }, 8000),
      setInterval(() => {
        setStats(prevStats => prevStats.map(stat => (stat.label === 'Users' ? { ...stat, numericValue: stat.numericValue + Math.floor(Math.random() * 5 + 3) } : stat)));
      }, 2000),
      setInterval(() => {
        setStats(prevStats => prevStats.map(stat => (stat.label === 'Ping' ? { ...stat, numericValue: 45 + Math.floor(Math.random() * 10) - 5 } : stat)));
      }, 3000),
      setInterval(() => {
        const now = Date.now();
        const diff = (now - startTime) / 1000;
        const d = Math.floor(diff / (24 * 3600));
        const h = Math.floor((diff % (24 * 3600)) / 3600);
        const m = Math.floor((diff % 3600) / 60);
        setUptime({ d, h, m });
      }, 60000)
    ];

    return () => intervals.forEach(clearInterval);
  }, [startTime]);

  const getStatDisplayValue = (stat: typeof stats[0]) => {
    if (stat.label === 'Uptime') {
      return `${uptime.d}d ${uptime.h}h ${uptime.m}m`;
    }
    if (stat.label === 'Ping') {
      return `${Math.round(stat.numericValue)}ms`;
    }
    if (stat.numericValue > 1000000) {
      return `${(stat.numericValue / 1000000).toFixed(1)}M+`;
    }
    return `${Math.round(stat.numericValue).toLocaleString()}+`;
  };

  return (
    <section className="w-full bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="smooth-hover text-center">
                <CardHeader className="flex flex-col items-center justify-center gap-2">
                  <stat.Icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-headline text-3xl font-bold">{getStatDisplayValue(stat)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
