'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Copy, Check, QrCode, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SUPPORT_SERVER_URL } from '@/lib/constants';

const UPI_ID = 'jyotimoy-baishya@fam';
const PREMIUM_PRICE = '₹799/mo';

export default function PurchasePage() {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID);
    toast({
      description: 'UPI ID copied to clipboard!',
    });
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="w-full max-w-md"
      >
        <Card className="overflow-hidden shadow-2xl shadow-primary/10">
          <CardHeader className="bg-muted/30 p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
            >
              <QrCode className="h-8 w-8 text-primary" />
            </motion.div>
            <CardTitle className="font-headline text-3xl">Complete Your Purchase</CardTitle>
            <CardDescription className="mt-2">
              Scan the QR code or use the UPI ID below to get Omnix Premium.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src="https://placehold.co/256x256.png"
                  alt="UPI QR Code"
                  width={256}
                  height={256}
                  data-ai-hint="QR code"
                  className="rounded-lg border-4 border-primary/20 p-2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Label htmlFor="upi-id" className="text-sm font-medium text-muted-foreground">
                  UPI ID
                </Label>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    id="upi-id"
                    type="text"
                    readOnly
                    value={UPI_ID}
                    className="flex-grow rounded-md border bg-muted/50 px-3 py-2 font-mono text-sm text-foreground"
                  />
                  <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy UPI ID">
                    {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-between rounded-lg border bg-muted/30 p-4"
              >
                <span className="font-headline text-lg">Total Amount:</span>
                <span className="font-headline text-2xl font-bold text-primary">{PREMIUM_PRICE}</span>
              </motion.div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4 bg-muted/30 p-6 text-center">
            <p className="text-xs text-muted-foreground">
              After payment, please join our Discord server and open a ticket with your transaction ID to activate your subscription.
            </p>
            <div className="flex w-full gap-2">
              <Button variant="outline" asChild className="w-full">
                <Link href="/premium">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button asChild className="w-full">
                <a href={SUPPORT_SERVER_URL} target="_blank" rel="noopener noreferrer">
                  Go to Discord
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

// Dummy Label component to satisfy TS since it's not a real form
function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={className} {...props} />;
}
