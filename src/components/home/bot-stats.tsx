
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const StatBox = ({
  label,
  value,
  Icon,
  isLoading,
}: {
  label: string;
  value: string;
  Icon: React.ElementType;
  isLoading: boolean;
}) => (
  <Card className="border-primary-foreground/20 bg-white/10 text-center text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
    <CardHeader className="flex flex-col items-center justify-center gap-2 pb-2">
      <Icon className="h-8 w-8" />
      <CardTitle className="font-headline text-lg">{label}</CardTitle>
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <Skeleton className="mx-auto h-9 w-28 bg-white/20" />
      ) : (
        <div className="flex h-9 items-center justify-center font-headline text-3xl font-bold">
          {value}
        </div>
      )}
    </CardContent>
  </Card>
);

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
    const interval = setInterval(fetchStats, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      label: 'Servers',
      value: stats ? stats.guilds.toLocaleString() : '0',
      Icon: Server,
    },
    {
      label: 'Users',
      value: stats ? stats.users.toLocaleString() : '0',
      Icon: Users,
    },
    {
      label: 'Ping',
      value: stats ? `${stats.ping}ms` : '0ms',
      Icon: Wifi,
    },
    {
      label: 'Uptime',
      value: stats ? formatTime(stats.uptime) : '0d 0h 0m',
      Icon: Clock,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-card to-muted py-16 sm:py-24">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
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
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatBox
                label={stat.label}
                value={stat.value}
                Icon={stat.Icon}
                isLoading={!stats}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
