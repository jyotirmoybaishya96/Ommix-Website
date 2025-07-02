'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { TrendingUp, BarChart2, Users } from 'lucide-react';

const serverGrowthData = [
  { month: 'January', servers: 1200 },
  { month: 'February', servers: 1500 },
  { month: 'March', servers: 1800 },
  { month: 'April', servers: 2200 },
  { month: 'May', servers: 2500 },
  { month: 'June', servers: 2800 },
];

const serverGrowthChartConfig: ChartConfig = {
  servers: {
    label: 'Servers',
    color: 'hsl(var(--primary))',
  },
};

const commandUsageData = [
    { command: '/play', count: 125000 },
    { command: '/ban', count: 15000 },
    { command: '/kick', count: 22000 },
    { command: '/ticket', count: 85000 },
    { command: '/mute', count: 45000 },
    { command: '/anti-nuke', count: 5000 },
];

const commandUsageChartConfig: ChartConfig = {
    count: {
        label: 'Usage Count',
        color: 'hsl(var(--accent))',
    },
};

const activeUsersData = Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    users: 800000 + (i * 5000) + Math.floor(Math.random() * 20000),
}));

const activeUsersChartConfig: ChartConfig = {
    users: {
        label: 'Active Users',
        color: 'hsl(var(--primary))',
    },
};

export default function StatusPage() {
    return (
        <div className="container mx-auto py-16 sm:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">Bot Status & Analytics</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Live metrics and analytics for the Omnix bot.
                p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-6 w-6 text-primary" /> Server Growth
                        </CardTitle>
                        <CardDescription>Total servers over the last 6 months.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={serverGrowthChartConfig} className="h-[250px] w-full">
                            <AreaChart data={serverGrowthData} margin={{ left: 12, right: 12 }}>
                                <defs>
                                    <linearGradient id="fillServers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-servers)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--color-servers)" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 12 }} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `${Number(value) / 1000}k`} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                <Area dataKey="servers" type="natural" fill="url(#fillServers)" stroke="var(--color-servers)" stackId="a" />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart2 className="h-6 w-6 text-primary" /> Command Usage
                        </CardTitle>
                        <CardDescription>Top commands used in the last 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={commandUsageChartConfig} className="h-[250px] w-full">
                            <BarChart data={commandUsageData} layout="vertical" margin={{ left: 10, right: 10 }}>
                                <CartesianGrid horizontal={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="command" type="category" tickLine={false} axisLine={false} tickMargin={8} width={80} tick={{ fontSize: 12 }} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                <Bar dataKey="count" fill="var(--color-count)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
            
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-6 w-6 text-primary" /> Daily Active Users
                        </CardTitle>
                        <CardDescription>Daily active users over the last 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={activeUsersChartConfig} className="h-[300px] w-full">
                            <AreaChart data={activeUsersData} margin={{ left: 12, right: 12 }}>
                                <defs>
                                    <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-users)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--color-users)" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 12 }} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `${Number(value) / 1000}k`} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                <Area dataKey="users" type="natural" fill="url(#fillUsers)" stroke="var(--color-users)" />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
