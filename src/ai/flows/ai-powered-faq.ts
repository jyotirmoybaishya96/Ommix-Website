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

const prompt = ai.definePrompt({
  name: 'aiPoweredFAQPrompt',
  input: {schema: AiPoweredFAQInputSchema},
  output: {schema: AiPoweredFAQOutputSchema},
  prompt: `You are an AI assistant designed to answer questions about a Discord bot. Please provide a helpful and informative answer to the following question:\n\nQuestion: {{{question}}}`,
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
