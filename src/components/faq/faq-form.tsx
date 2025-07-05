'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiPoweredFAQ } from '@/Omnix/flows/ai-powered-faq';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Loader2 } from 'lucide-react';

const formSchema = z.object({
  question: z.string().min(10, {
    message: 'Question must be at least 10 characters.',
  }),
});

export function FaqForm() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnswer(null);
    setError(null);
    try {
      const result = await aiPoweredFAQ({ question: values.question });
      setAnswer(result.answer);
    } catch (e) {
      setError('An error occurred while fetching the answer. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., How do I configure reaction roles?"
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Ask Question
            </Button>
          </form>
        </Form>
        
        {error && (
          <div className="mt-6 rounded-md border border-destructive bg-destructive/10 p-4 text-center text-sm text-destructive">
            {error}
          </div>
        )}

        {isLoading && (
          <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Our AI is searching for an answer...</p>
          </div>
        )}

        {answer && (
          <Card className="mt-6 bg-muted/50">
            <CardHeader className="flex-row items-center gap-4 space-y-0">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                 <Bot className="h-6 w-6 text-primary" />
               </div>
              <CardTitle className="font-headline">AI Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{answer}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
