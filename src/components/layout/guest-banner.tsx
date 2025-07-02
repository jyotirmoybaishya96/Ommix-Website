
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Info, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../theme-provider';

export function GuestBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const { isMounted } = useSettings();

  useEffect(() => {
    const guestBannerDismissed = localStorage.getItem('guest-banner-dismissed');
    if (!guestBannerDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('guest-banner-dismissed', 'true');
  };

  if (!isVisible || !isMounted) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-primary/10 px-6 py-2.5 text-primary sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6">
          <Info className="mr-2 inline h-4 w-4" />
          {t('guest_banner.message')}
        </p>
        <div className="flex gap-x-2">
          <Button size="sm" variant="outline" className="bg-background/50 backdrop-blur-sm">
            {t('guest_banner.login_button')}
          </Button>
          <Button size="sm" variant="ghost" onClick={handleDismiss}>
            {t('guest_banner.continue_button')}
          </Button>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
          <span className="sr-only">Dismiss</span>
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
