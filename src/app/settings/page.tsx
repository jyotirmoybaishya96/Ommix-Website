import { SettingsView } from '@/components/settings/settings-view';
import { Cog } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 sm:py-24">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Cog className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">Settings</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Customize your experience. Your preferences are saved locally in your browser.
        </p>
      </div>
      <div className="mt-12">
        <SettingsView />
      </div>
    </div>
  );
}
