'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BOT_STATS } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Stat = {
  label: string;
  value: string;
  Icon: React.ElementType;
};

const initialStatsData = BOT_STATS.map(stat => ({
  ...stat,
  numericValue: parseFloat(stat.value.replace(/,/g, ''))
}));

export default function BotStats() {
  const [stats, setStats] = useState(initialStatsData);
  const [uptime, setUptime] = useState('99.9%');
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          if (stat.label === 'Uptime') return stat;
          const change = Math.floor(Math.random() * (stat.numericValue * 0.005)) - Math.floor(stat.numericValue * 0.0025);
          const newNumericValue = Math.max(0, stat.numericValue + change);
          return {
            ...stat,
            numericValue: newNumericValue,
            value: stat.label === 'Ping' ? `${Math.round(newNumericValue)}ms` : Math.round(newNumericValue).toLocaleString(),
          };
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const uptimeInterval = setInterval(() => {
      const now = Date.now();
      const diff = (now - startTime) / 1000;
      const d = Math.floor(diff / (24 * 3600));
      const h = Math.floor((diff % (24 * 3600)) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      setUptime(`${d}d ${h}h ${m}m`);
    }, 60000);
    return () => clearInterval(uptimeInterval);
  }, [startTime]);


  const getStatDisplayValue = (stat: any) => {
    if (stat.label === 'Uptime') return uptime;
    return stat.value;
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
