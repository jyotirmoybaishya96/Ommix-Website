'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ_DATA = [
  {
    question: "What is Omnix?",
    answer: "Omnix is an all-in-one Discord bot designed to provide a comprehensive suite of tools for server management, including moderation, anti-nuke, ticketing, music, and much more. It's built to be powerful, reliable, and easy to use."
  },
  {
    question: "How do I invite Omnix to my server?",
    answer: "You can invite Omnix to your server by clicking on the 'Invite to Discord' button on our homepage. You will need to have 'Manage Server' permissions in the server you want to add the bot to."
  },
  {
    question: "Is Omnix free to use?",
    answer: "Yes, Omnix has a robust free version with a wide range of features. We also offer premium plans for users who want access to even more advanced features and capabilities."
  },
  {
    question: "How do I get support?",
    answer: "For general questions, you can use our AI-powered FAQ page. For specific issues or to report a bug, please join our official support server on Discord and create a support ticket via our /support page."
  },
  {
    question: "How does the Anti-Nuke feature work?",
    answer: "Our Anti-Nuke system monitors administrative actions in your server. If it detects suspicious activity, like a rapid series of kicks or bans, it can automatically intervene to lock down the server and alert server owners, preventing catastrophic damage."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Find answers to common questions about Omnix. For more specific queries, visit our{' '}
          <Link href="/faq" className="text-primary hover:underline">
            AI-powered FAQ page
          </Link>.
        </p>
        <Accordion type="single" collapsible className="mt-8 w-full text-left">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-headline text-lg hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
