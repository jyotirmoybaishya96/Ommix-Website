'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PREMIUM_FEATURES } from "@/lib/constants";
import { Check, X } from "lucide-react";
import { motion } from 'framer-motion';

function FeatureCell({ value, isFree }: { value: string | boolean; isFree?: boolean }) {
  if (typeof value === 'boolean') {
    if (value) {
      return (
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} viewport={{ once: true }}>
          <Check className={`mx-auto h-5 w-5 ${isFree ? 'text-green-500' : 'text-primary'}`} />
        </motion.div>
      );
    }
    return (
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} viewport={{ once: true }}>
        <X className="mx-auto h-5 w-5 text-destructive" />
      </motion.div>
    );
  }
  return <span className="text-sm text-foreground">{value}</span>;
}


export function FeatureComparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
  };

  return (
    <motion.div 
      className="mt-16 sm:mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
        Full Feature Comparison
      </h2>
      <div className="mt-8 overflow-hidden rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/10 hover:bg-muted/10">
              <TableHead className="w-1/2 py-4 font-headline text-base text-foreground sm:w-2/3">Feature</TableHead>
              <TableHead className="py-4 text-center font-headline text-base text-foreground">Free</TableHead>
              <TableHead className="py-4 text-center font-headline text-base text-foreground">Premium</TableHead>
            </TableRow>
          </TableHeader>
          {PREMIUM_FEATURES.map((category) => (
            <motion.tbody 
              key={category.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.tr variants={itemVariants} className="bg-muted/50 hover:bg-muted/50">
                <TableCell colSpan={3} className="font-headline text-base font-semibold text-foreground">
                  {category.category}
                </TableCell>
              </motion.tr>
              {category.features.map((feature) => (
                <motion.tr variants={itemVariants} key={feature.name}>
                  <TableCell className="font-medium text-muted-foreground">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    <FeatureCell value={feature.free} isFree />
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureCell value={feature.premium} />
                  </TableCell>
                </motion.tr>
              ))}
            </motion.tbody>
          ))}
        </Table>
      </div>
    </motion.div>
  );
}
