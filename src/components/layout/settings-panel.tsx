'use client';

import { useSettings } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Text, Check, Languages } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ACCENT_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';

export function SettingsPanel() {
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    language,
    setLanguage,
    accentColor,
    setAccentColor,
    resetSettings,
  } = useSettings();
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleReset = () => {
    resetSettings();
    toast({
      description: t('settings_panel.reset_success'),
    });
  };

  return (
    <div className="grid gap-6 py-4">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="theme" className="text-left">
          {t('settings_panel.theme')}
        </Label>
        <div className="col-span-2 flex items-center justify-start rounded-lg border p-1">
          <Button variant={theme === 'light' ? 'secondary' : 'ghost'} size="sm" className="w-full" onClick={() => setTheme('light')}>
            <Sun className="mr-2 h-4 w-4" /> {t('settings_panel.theme_light')}
          </Button>
          <Button variant={theme === 'dark' ? 'secondary' : 'ghost'} size="sm" className="w-full" onClick={() => setTheme('dark')}>
            <Moon className="mr-2 h-4 w-4" /> {t('settings_panel.theme_dark')}
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="font-size" className="text-left">
          {t('settings_panel.font_size')}
        </Label>
        <div className="col-span-2 flex items-center justify-start rounded-lg border p-1">
          <Button variant={fontSize === 'sm' ? 'secondary' : 'ghost'} size="sm" className="w-full" onClick={() => setFontSize('sm')}>
            <Text className="mr-2 h-3 w-3" /> {t('settings_panel.font_size_small')}
          </Button>
          <Button variant={fontSize === 'base' ? 'secondary' : 'ghost'} size="sm" className="w-full" onClick={() => setFontSize('base')}>
            <Text className="mr-2 h-4 w-4" /> {t('settings_panel.font_size_default')}
          </Button>
          <Button variant={fontSize === 'lg' ? 'secondary' : 'ghost'} size="sm" className="w-full" onClick={() => setFontSize('lg')}>
            <Text className="mr-2 h-5 w-5" /> {t('settings_panel.font_size_large')}
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="language" className="text-left">
          {t('settings_panel.language')}
        </Label>
        <div className="col-span-2">
          <Select value={language} onValueChange={value => setLanguage(value as any)}>
            <SelectTrigger>
              <SelectValue placeholder={t('settings_panel.language')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-start gap-4">
        <Label className="pt-2 text-left">{t('settings_panel.accent_color')}</Label>
        <div className="col-span-2 flex flex-wrap gap-2">
          {ACCENT_COLORS.map(color => (
            <button
              key={color.name}
              type="button"
              onClick={() => setAccentColor(color.color)}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full border-2',
                accentColor === color.color ? 'border-foreground' : 'border-transparent'
              )}
              style={{ backgroundColor: `hsl(${color.color})` }}
              aria-label={color.name}
            >
              {accentColor === color.color && <Check className="h-5 w-5 text-primary-foreground" />}
            </button>
          ))}
        </div>
      </div>
      <Separator />
      <Button variant="outline" onClick={handleReset}>
        {t('settings_panel.reset')}
      </Button>
    </div>
  );
}
