import type { Metadata } from 'next';
import './globals.css';
import '../lib/i18n'; // Import to initialize i18next
import { Toaster } from '@/components/ui/toaster';
import { SettingsProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageTransition } from '@/components/layout/page-transition';
import { GuestBanner } from '@/components/layout/guest-banner';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Omnix - The All-in-One Discord Bot',
  description: 'Omnix provides powerful moderation, anti-nuke, ticketing, music, and more to elevate your Discord server.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Suspense>
          <SettingsProvider>
            <div className="flex min-h-screen flex-col">
              <GuestBanner />
              <Header />
              <PageTransition>
                {children}
              </PageTransition>
              <Footer />
            </div>
            <Toaster />
          </SettingsProvider>
        </Suspense>
      </body>
    </html>
  );
}
