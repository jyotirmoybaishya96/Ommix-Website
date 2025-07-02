
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BOT_STATS } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

type LiveStats = {
  servers: number;
  users: number;
  ping: number;
  uptime: string;
};

const statKeyMap: { [label: string]: keyof LiveStats } = {
  'Servers': 'servers',
  'Users': 'users',
  'Ping': 'ping',
  'Uptime': 'uptime',
};

export default function BotStats() {
  const [liveStats, setLiveStats] = useState<LiveStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data: LiveStats = await response.json();
        setLiveStats(data);
      } catch (error) {
        console.error("Error fetching bot stats:", error);
        // In a real app, you might set an error state here
      }
    };

    fetchStats(); // Fetch immediately on component mount
    const intervalId = setInterval(fetchStats, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const getStatDisplayValue = (label: string) => {
    if (!liveStats) {
      return <Skeleton className="h-9 w-28" />;
    }

    const key = statKeyMap[label];
    const value = liveStats[key];

    switch (label) {
      case 'Servers':
        return `${Number(value).toLocaleString()}+`;
      case 'Users':
        return `${(Number(value) / 1000000).toFixed(1)}M+`;
      case 'Ping':
        return `${value}ms`;
      case 'Uptime':
        return String(value);
      default:
        return 'N/A';
    }
  };

  return (
    <section className="w-full bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {BOT_STATS.map((stat, index) => (
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
                  <p className="font-headline text-3xl font-bold h-9 flex items-center justify-center">
                    {getStatDisplayValue(stat.label)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
