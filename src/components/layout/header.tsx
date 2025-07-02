'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Cog, Menu, Bot } from 'lucide-react';
import { NAV_LINKS, DISCORD_INVITE_URL } from '@/lib/constants';
import { SettingsPanel } from './settings-panel';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../theme-provider';

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  
  // This seems unused, but it's a trick to force re-render when language changes
  const { language } = useSettings();
  useEffect(() => {
  }, [language]);


  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = NAV_LINKS.map((link) => (
    <Button key={link.href} variant={pathname === link.href ? 'secondary' : 'ghost'} asChild>
      <Link href={link.href} onClick={closeMobileMenu}>
        {t(`header.${link.label}` as any, { defaultValue: link.label.charAt(0).toUpperCase() + link.label.slice(1) })}
      </Link>
    </Button>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <Bot className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Omnix</span>
        </Link>
        
        <nav className="hidden items-center gap-2 md:flex">
          {navItems}
          <Button asChild>
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">{t('header.invite')}</a>
          </Button>
          <Sheet open={isSettingsOpen} onOpenChange={setSettingsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Cog />
                <span className="sr-only">Open Settings</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t('header.settings.title')}</SheetTitle>
                <SheetDescription>
                  {t('header.settings.description')}
                </SheetDescription>
              </SheetHeader>
              <SettingsPanel />
            </SheetContent>
          </Sheet>
        </nav>

        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2 text-left" onClick={closeMobileMenu}>
                    <Bot className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">Omnix</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems}
                 <Button asChild className='mt-4'>
                    <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">{t('header.invite')}</a>
                </Button>
                <div className='mt-4 border-t pt-4'>
                   <SettingsPanel />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
