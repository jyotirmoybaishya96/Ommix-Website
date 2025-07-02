import { SupportForm } from '@/components/support/support-form';
import { Lightbulb } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 sm:py-24">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Lightbulb className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">AI-Powered Support</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a question about Omnix? Ask our AI assistant for help with features, setup, or troubleshooting.
        </p>
      </div>
      <div className="mt-12">
        <SupportForm />
      </div>
    </div>
  );
}
