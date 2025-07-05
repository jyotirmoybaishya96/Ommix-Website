
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DISCORD_INVITE_URL, FEATURES } from '@/lib/constants';

const featureCategories = [
  {
    name: "Protection",
    features: FEATURES.filter(f => ["Anti-Nuke", "Auto-Mod", "Moderation", "Logging", "Ignore"].includes(f.title))
  },
  {
    name: "Community",
    features: FEATURES.filter(f => ["Welcomer", "Giveaway", "Reaction Roles", "Custom Roles", "VC Roles", "Fun"].includes(f.title))
  },
  {
    name: "Support & Utility",
    features: FEATURES.filter(f => ["AI", "Ticketing", "Autoresponder", "JoinDM", "Utility", "Counter", "Profile Pictures (Pfp)"].includes(f.title))
  },
  {
    name: "Voice & Media",
    features: FEATURES.filter(f => ["Music", "Voice", "Media Channels"].includes(f.title))
  },
   {
    name: "General",
    features: FEATURES.filter(f => ["General"].includes(f.title))
  },
];


export default function FeaturesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="container mx-auto py-16 sm:py-24 overflow-hidden">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Bot className="h-8 w-8 text-primary" />
            </motion.div>
            <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Packed with Features</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Omnix is designed with a comprehensive suite of tools to provide the ultimate server management experience.
            </p>
        </motion.div>
        
        <Tabs defaultValue="Protection" className="mt-16 w-full">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <TabsList className="mx-auto grid h-auto max-w-4xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {featureCategories.map(category => (
                        <TabsTrigger key={category.name} value={category.name} className="py-2">{category.name}</TabsTrigger>
                    ))}
                </TabsList>
            </motion.div>

            {featureCategories.map(category => (
                <TabsContent key={category.name} value={category.name} className="mt-2 focus-visible:ring-0">
                    <motion.div
                        className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={category.name} // re-trigger animation on tab change
                    >
                        {category.features.map(feature => (
                            <motion.div key={feature.title} variants={cardVariants} className="h-full">
                                <Card className="group flex h-full flex-col text-left transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                              <feature.Icon className="h-6 w-6 text-primary"/>
                                            </div>
                                            <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex flex-grow flex-col gap-4 pt-0">
                                        <p className="flex-grow text-muted-foreground">{feature.description}</p>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="mt-auto">Learn More</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle className="flex items-center gap-3 font-headline text-2xl">
                                                        <feature.Icon className="h-7 w-7 text-primary" />
                                                        {feature.title}
                                                    </DialogTitle>
                                                    <DialogDescription className="pt-2 text-left">{feature.description}</DialogDescription>
                                                </DialogHeader>
                                                <ul className="space-y-3 pt-4">
                                                    {feature.details.map(detail => (
                                                        <li key={detail} className="flex items-start gap-3 text-muted-foreground">
                                                            <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                                                            <span className="text-left">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </DialogContent>
                                        </Dialog>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </TabsContent>
            ))}
        </Tabs>

        <motion.div 
          className="mt-16 rounded-lg bg-muted/50 p-8 text-center sm:mt-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className="font-headline text-3xl font-bold">Ready to Elevate Your Server?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join thousands of other communities who trust Omnix for powerful, reliable, and easy-to-use server management.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="smooth-hover">
                    <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                        Invite to Discord
                    </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="smooth-hover">
                    <Link href="/premium">
                        Compare Plans
                    </Link>
                </Button>
            </div>
        </motion.div>

      </div>
  );
}
