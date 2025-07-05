
'use client';

import { useSettings } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Moon, Sun, Text, Check, Monitor, Ban, Droplets, Grid3x3, Languages, Palette, PartyPopper, Paintbrush, Radio, Snowflake, Sparkles, Sunrise
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ACCENT_COLORS } from '@/lib/constants';
import { cn, hexToHsl } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const backgroundEffectsOptions = [
    { value: 'none', labelKey: 'settings_panel.effect_none', Icon: Ban },
    { value: 'aurora', labelKey: 'settings_panel.effect_aurora', Icon: Sunrise },
    { value: 'snowfall', labelKey: 'settings_panel.effect_snowfall', Icon: Snowflake },
    { value: 'bubbles', labelKey: 'settings_panel.effect_bubbles', Icon: Droplets },
    { value: 'confetti', labelKey: 'settings_panel.effect_confetti', Icon: PartyPopper },
    { value: 'static', labelKey: 'settings_panel.effect_static', Icon: Radio },
    { value: 'stars', labelKey: 'settings_panel.effect_stars', Icon: Sparkles },
    { value: 'grid', labelKey: 'settings_panel.effect_grid', Icon: Grid3x3 },
    { value: 'gradient', labelKey: 'settings_panel.effect_gradient', Icon: Palette },
];

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
  const colorInputRef = React.useRef<HTMLInputElement>(null);

  const handleReset = () => {
    resetSettings();
    toast({
      description: t('settings_panel.reset_success'),
    });
  };
  
  const selectedEffect = backgroundEffectsOptions.find(e => e.value === backgroundEffect);

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
              <div className="flex w-max flex-nowrap items-center gap-3">
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
                {/* Custom Color Picker */}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 flex-shrink-0 rounded-full border-dashed transition-transform hover:scale-110"
                  aria-label="Pick a custom color"
                  onClick={() => colorInputRef.current?.click()}
                >
                  <Palette className="h-4 w-4" />
                </Button>
                <input
                  ref={colorInputRef}
                  id="custom-color-picker"
                  type="color"
                  className="invisible h-0 w-0"
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const hex = e.target.value;
                      const hsl = hexToHsl(hex);
                      setAccentColor(hsl);
                  }}
                />
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
                         {selectedEffect ? (
                            <div className="flex items-center gap-2">
                                <selectedEffect.Icon className="h-4 w-4 text-muted-foreground" />
                                <span>{t(selectedEffect.labelKey)}</span>
                            </div>
                         ) : (
                           <div className="flex items-center gap-2">
                             <Paintbrush className="h-4 w-4 text-muted-foreground" />
                             <span>{t('settings_panel.background_effect')}</span>
                           </div>
                         )}
                    </SelectTrigger>
                    <SelectContent>
                        {backgroundEffectsOptions.map((effect) => (
                             <SelectItem key={effect.value} value={effect.value}>
                                <div className="flex items-center gap-2">
                                    <effect.Icon className="h-4 w-4" />
                                    <span>{t(effect.labelKey)}</span>
                                </div>
                            </SelectItem>
                        ))}
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
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder={t('settings_panel.language')} />
                  </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                    <SelectItem value="ru">Русский</SelectItem>
                    <SelectItem value="pt">Português</SelectItem>
                    <SelectItem value="zh-CN">简体中文</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="ko">한국어</SelectItem>
                    <SelectItem value="it">Italiano</SelectItem>
                    <SelectItem value="nl">Nederlands</SelectItem>
                    <SelectItem value="tr">Türkçe</SelectItem>
                    <SelectItem value="pl">Polski</SelectItem>
                    <SelectItem value="sv">Svenska</SelectItem>
                    <SelectItem value="vi">Tiếng Việt</SelectItem>
                    <SelectItem value="id">Bahasa Indonesia</SelectItem>
                    <SelectItem value="th">ไทย</SelectItem>
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
