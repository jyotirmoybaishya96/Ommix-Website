'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';
import { NAV_LINKS, DISCORD_INVITE_URL } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../theme-provider';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const { isMounted } = useSettings();

  useEffect(() => {
    // This is to force a re-render when the language changes,
    // which is now handled correctly by the provider.
  }, [isMounted, i18n.language]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const getLinkLabel = (label: string) => {
    const defaultValue = label.charAt(0).toUpperCase() + label.slice(1);
    if (!isMounted) {
      return defaultValue;
    }
    return t(`header.${label}`, { defaultValue });
  };

  const navItems = NAV_LINKS.map((link) => (
    <Button key={link.href} variant={pathname === link.href ? 'secondary' : 'ghost'} asChild>
      <Link href={link.href} onClick={closeMobileMenu}>
        {getLinkLabel(link.label)}
      </Link>
    </Button>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <Bot className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Omnix</span>
        </Link>
        
        <nav className="hidden items-center gap-2 md:flex">
          {navItems}
          <Button asChild>
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">{isMounted ? t('header.invite') : 'Invite'}</a>
          </Button>
        </nav>

        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2 text-left" onClick={closeMobileMenu}>
                      <Bot className="h-8 w-8 text-primary" />
                      <span className="font-headline text-2xl font-bold">Omnix</span>
                    </Link>
                  </SheetTitle>
              </SheetHeader>
              <ScrollArea className="flex-grow">
                <nav className="flex flex-col gap-4 pt-4 pr-4">
                  {navItems}
                   <Button asChild className='mt-4'>
                      <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">{isMounted ? t('header.invite') : 'Invite'}</a>
                  </Button>
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
