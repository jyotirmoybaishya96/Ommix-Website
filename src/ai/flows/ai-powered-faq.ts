'use server';

/**
 * @fileOverview An AI-powered FAQ for the Discord bot, answering user questions with GenAI.
 *
 * - aiPoweredFAQ - A function that handles the question answering process.
 * - AiPoweredFAQInput - The input type for the aiPoweredFAQ function.
 * - AiPoweredFAQOutput - The return type for the aiPoweredFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { FEATURES } from '@/lib/constants';

const AiPoweredFAQInputSchema = z.object({
  question: z.string().describe('The question to ask about the Discord bot.'),
});
export type AiPoweredFAQInput = z.infer<typeof AiPoweredFAQInputSchema>;

const AiPoweredFAQOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question about the Discord bot.'),
});
export type AiPoweredFAQOutput = z.infer<typeof AiPoweredFAQOutputSchema>;

export async function aiPoweredFAQ(input: AiPoweredFAQInput): Promise<AiPoweredFAQOutput> {
  return aiPoweredFAQFlow(input);
}

const featuresContext = FEATURES.map(f => `- ${f.title}: ${f.description}`).join('\n');

const prompt = ai.definePrompt({
  name: 'aiPoweredFAQPrompt',
  input: {schema: AiPoweredFAQInputSchema},
  output: {schema: AiPoweredFAQOutputSchema},
  prompt: `You are an AI assistant for a Discord bot called "Omnix", designed to answer frequently asked questions. Use the following information about Omnix's features to provide a helpful and informative answer.

Bot Features:
${featuresContext}

Question: {{{question}}}`,
});

const aiPoweredFAQFlow = ai.defineFlow(
  {
    name: 'aiPoweredFAQFlow',
    inputSchema: AiPoweredFAQInputSchema,
    outputSchema: AiPoweredFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
