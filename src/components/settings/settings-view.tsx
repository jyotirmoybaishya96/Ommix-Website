
'use client';

import { useSettings } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Text, Check, Monitor } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ACCENT_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SettingsView() {
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    language,
    setLanguage,
    accentColor,
    setAccentColor,
    backgroundEffect,
    setBackgroundEffect,
    cardStyle,
    setCardStyle,
    resetSettings,
    isMounted,
  } = useSettings();
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleReset = () => {
    resetSettings();
    toast({
      description: t('settings_panel.reset_success'),
    });
  };

  if (!isMounted) {
    return (
        <div className="space-y-8 animate-pulse">
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-9 w-48" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-9 w-56" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-28" />
                        <div className="flex gap-3">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-2/3" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-10 w-full" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-10 w-full" />
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4 text-destructive" />
                    <Skeleton className="h-4 w-2/3" />
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                        <Skeleton className="h-10 w-20" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{t('settings_panel.tabs.customization')}</CardTitle>
          <CardDescription>Adjust the appearance of the user interface.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Label className="flex-shrink-0">{t('settings_panel.theme')}</Label>
            <div className="w-full overflow-x-auto pb-2 -mb-2 sm:w-auto">
              <div className="inline-flex w-max items-center rounded-lg border p-1 space-x-1">
                <Button variant={theme === 'light' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" /> {t('settings_panel.theme_light')}
                </Button>
                <Button variant={theme === 'dark' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" /> {t('settings_panel.theme_dark')}
                </Button>
                <Button variant={theme === 'system' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setTheme('system')}>
                  <Monitor className="mr-2 h-4 w-4" /> {t('settings_panel.theme_system')}
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Label className="flex-shrink-0">{t('settings_panel.font_size')}</Label>
             <div className="w-full overflow-x-auto pb-2 -mb-2 sm:w-auto">
                <div className="inline-flex w-max items-center rounded-lg border p-1 space-x-1">
                    <Button variant={fontSize === 'sm' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setFontSize('sm')}>
                    <Text className="mr-2 h-3 w-3" /> {t('settings_panel.font_size_small')}
                    </Button>
                    <Button variant={fontSize === 'base' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setFontSize('base')}>
                    <Text className="mr-2 h-4 w-4" /> {t('settings_panel.font_size_default')}
                    </Button>
                    <Button variant={fontSize === 'lg' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setFontSize('lg')}>
                    <Text className="mr-2 h-5 w-5" /> {t('settings_panel.font_size_large')}
                    </Button>
                </div>
            </div>
          </div>
           <Separator />
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Label className="flex-shrink-0">{t('settings_panel.accent_color')}</Label>
            <div className="overflow-x-auto pb-2 -mb-2">
              <div className="flex w-max flex-nowrap gap-3">
                {ACCENT_COLORS.map(color => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setAccentColor(color.color)}
                    className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-full border-2 transition-transform hover:scale-110 flex-shrink-0',
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
          </div>
          <Separator />
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Label className="flex-shrink-0">{t('settings_panel.card_style')}</Label>
             <div className="w-full overflow-x-auto pb-2 -mb-2 sm:w-auto">
                <div className="inline-flex w-max items-center rounded-lg border p-1 space-x-1">
                    <Button variant={cardStyle === 'default' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setCardStyle('default')}>
                      {t('settings_panel.style_default')}
                    </Button>
                    <Button variant={cardStyle === 'glass' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setCardStyle('glass')}>
                      {t('settings_panel.style_glass')}
                    </Button>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize background effects and other visual elements.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <Label>{t('settings_panel.background_effect')}</Label>
                <Select value={backgroundEffect} onValueChange={value => setBackgroundEffect(value as any)}>
                    <SelectTrigger>
                    <SelectValue placeholder={t('settings_panel.background_effect')} />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="none">{t('settings_panel.effect_none')}</SelectItem>
                    <SelectItem value="aurora">{t('settings_panel.effect_aurora')}</SelectItem>
                    <SelectItem value="snowfall">{t('settings_panel.effect_snowfall')}</SelectItem>
                    <SelectItem value="bubbles">{t('settings_panel.effect_bubbles')}</SelectItem>
                    <SelectItem value="confetti">{t('settings_panel.effect_confetti')}</SelectItem>
                    <SelectItem value="static">{t('settings_panel.effect_static')}</SelectItem>
                    <SelectItem value="stars">{t('settings_panel.effect_stars')}</SelectItem>
                    <SelectItem value="grid">{t('settings_panel.effect_grid')}</SelectItem>
                    <SelectItem value="gradient">{t('settings_panel.effect_gradient')}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>{t('settings_panel.tabs.general')}</CardTitle>
            <CardDescription>Manage language and other application settings.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <Label>{t('settings_panel.language')}</Label>
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
        </CardContent>
      </Card>
      
      <Card className="border-destructive">
        <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>These actions are permanent and cannot be undone.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
             <div>
                <p className="font-semibold text-foreground">Reset Settings</p>
                <p className="text-sm text-muted-foreground">Reset all your customization to their default values.</p>
             </div>
             <Button variant="destructive" onClick={handleReset}>{t('settings_panel.reset')}</Button>
           </div>
        </CardContent>
      </Card>

    </div>
  );
}
