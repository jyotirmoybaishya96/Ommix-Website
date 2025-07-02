
'use client';

import { Button } from '@/components/ui/button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import { useSettings } from '../theme-provider';

export default function HeroSection() {
  const { t } = useTranslation();
  const { isMounted } = useSettings();

  if (!isMounted) {
    return (
      <section className="w-full py-20 text-center md:py-32 lg:py-40">
        <div className="container mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            The All-in-One <span className="text-primary">Discord Bot</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Omnix provides powerful moderation, anti-nuke, ticketing, music, and more to elevate your Discord server.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="smooth-hover">
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                Invite to Discord
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="smooth-hover">
              <Link href="/#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 text-center md:py-32 lg:py-40">
      <div className="container mx-auto">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <Trans i18nKey="hero.title">
            The All-in-One <span className="text-primary">Discord Bot</span>
          </Trans>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="smooth-hover">
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              {t('hero.invite_button')}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="smooth-hover">
            <Link href="/#features">
              {t('hero.learn_more_button')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
