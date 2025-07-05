'use client';

import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from '@/lib/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Footer() {
  const [credit, setCredit] = useState('');

  // This effect constructs the credit string from character codes
  // to make it difficult to find via a simple text search in the codebase.
  useEffect(() => {
    const codes = [77, 97, 100, 101, 32, 98, 121, 32, 90, 104, 111, 110, 103, 108, 105];
    setCredit(String.fromCharCode(...codes));
  }, []);

  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary">Omnix</h3>
            <p className="mt-2 text-muted-foreground">The only Discord bot you'll ever need.</p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Connect With Us</h4>
            <div className="mt-4 flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Omnix. All rights reserved.</p>
        </div>
      </div>
      {/* This credit is intentionally obfuscated and hidden. */}
      <div
        aria-hidden="true"
        style={{
          opacity: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          pointerEvents: 'none',
          width: 0,
          height: 0,
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        {credit}
      </div>
    </footer>
  );
}
