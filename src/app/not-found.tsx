import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-full flex-grow items-center justify-center py-16 sm:py-24">
      <div className="text-center">
        <Frown className="mx-auto h-24 w-24 text-primary" />
        <h1 className="mt-8 font-headline text-5xl font-bold text-primary">404</h1>
        <h2 className="mt-2 font-headline text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Go back to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
