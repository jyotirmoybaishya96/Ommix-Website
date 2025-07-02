'use client';

import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex h-full flex-grow items-center justify-center py-16 sm:py-24">
      <div className="text-center">
        <TriangleAlert className="mx-auto h-24 w-24 text-destructive" />
        <h1 className="mt-8 font-headline text-5xl font-bold text-destructive">500</h1>
        <h2 className="mt-2 font-headline text-3xl font-semibold">Something went wrong</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          We're sorry, but an unexpected error occurred on our end. Please try again later.
        </p>
        <Button onClick={() => reset()} className="mt-8">
          Try again
        </Button>
      </div>
    </div>
  );
}
