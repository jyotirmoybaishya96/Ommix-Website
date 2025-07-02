import { FaqForm } from '@/components/faq/faq-form';
import { HelpCircle } from 'lucide-react';

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 sm:py-24">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <HelpCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Got questions? Our AI is here to help! Ask anything about Omnix, from feature explanations to setup guides.
        </p>
      </div>
      <div className="mt-12">
        <FaqForm />
      </div>
    </div>
  );
}
