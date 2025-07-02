'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Cog, Menu, Bot } from 'lucide-react';
import { NAV_LINKS, DISCORD_INVITE_URL } from '@/lib/constants';
import { SettingsPanel } from './settings-panel';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = NAV_LINKS.map((link) => (
    <Button key={link.href} variant={pathname === link.href ? 'secondary' : 'ghost'} asChild>
      <Link href={link.href} onClick={closeMobileMenu}>
        {link.label}
      </Link>
    </Button>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Omnix</span>
        </Link>
        
        {isMobile ? (
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex h-full flex-col justify-center gap-4">
                {navItems}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden items-center gap-4 md:flex">
            {navItems}
            <Button asChild>
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">Invite Omnix</a>
            </Button>
            <Sheet open={isSettingsOpen} onOpenChange={setSettingsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Cog />
                  <span className="sr-only">Open Settings</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SettingsPanel />
              </SheetContent>
            </Sheet>
          </nav>
        )}
      </div>
    </header>
  );
}
