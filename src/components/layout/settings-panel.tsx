'use client';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Text } from 'lucide-react';

export function SettingsPanel() {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <div className="grid gap-6 py-4">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="theme" className="text-left">
          Theme
        </Label>
        <div className="col-span-2 flex items-center justify-start rounded-lg border p-1">
          <Button
            variant={theme === 'light' ? 'secondary' : 'ghost'}
            size="sm"
            className="w-full"
            onClick={() => setTheme('light')}
          >
            <Sun className="mr-2 h-4 w-4" /> Light
          </Button>
          <Button
            variant={theme === 'dark' ? 'secondary' : 'ghost'}
            size="sm"
            className="w-full"
            onClick={() => setTheme('dark')}
          >
            <Moon className="mr-2 h-4 w-4" /> Dark
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="font-size" className="text-left">
          Font Size
        </Label>
        <div className="col-span-2 flex items-center justify-start rounded-lg border p-1">
            <Button
            variant={fontSize === 'sm' ? 'secondary' : 'ghost'}
            size="sm"
            className="w-full"
            onClick={() => setFontSize('sm')}
          >
            <Text className="mr-2 h-3 w-3" /> Small
          </Button>
          <Button
            variant={fontSize === 'base' ? 'secondary' : 'ghost'}
            size="sm"
            className="w-full"
            onClick={() => setFontSize('base')}
          >
            <Text className="mr-2 h-4 w-4" /> Default
          </Button>
            <Button
            variant={fontSize === 'lg' ? 'secondary' : 'ghost'}
            size="sm"
            className="w-full"
            onClick={() => setFontSize('lg')}
          >
            <Text className="mr-2 h-5 w-5" /> Large
          </Button>
        </div>
      </div>
    </div>
  );
}
