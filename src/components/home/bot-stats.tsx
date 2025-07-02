'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Users, Wifi, Clock } from 'lucide-react';

type BotStats = {
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
  <Card className="smooth-hover text-center">
    <CardHeader className="flex flex-col items-center justify-center gap-2">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="font-headline text-lg">{label}</CardTitle>
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <Skeleton className="mx-auto h-9 w-28" />
      ) : (
        <div className="font-headline text-3xl font-bold h-9 flex items-center justify-center">
          {value}
        </div>
      )}
    </CardContent>
  </Card>
);

export default function BotStats() {
  const [stats, setStats] = useState<BotStats | null>(null);

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
    <section className="w-full bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
