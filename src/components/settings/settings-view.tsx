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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
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
    resetSettings,
    isMounted,
  } = useSettings();
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleReset = () => {
    resetSettings();
    toast({
      description: t('settings_panel.reset_success', { defaultValue: 'Settings have been reset.' }),
    });
  };

  if (!isMounted) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="space-y-4 py-4 animate-pulse">
                    <Skeleton className="h-10 w-full" />
                    <div className="pt-6 space-y-8">
                        <div className="space-y-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-9 rounded-lg" />
                        </div>
                        <div className="space-y-3">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-9 rounded-lg" />
                        </div>
                        <div className="space-y-3">
                            <Skeleton className="h-4 w-28" />
                            <div className="flex flex-wrap gap-3">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card>
        <CardContent className="p-6">
            <Tabs defaultValue="customization" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customization">{t('settings_panel.tabs.customization', { defaultValue: 'Customization' })}</TabsTrigger>
                <TabsTrigger value="general">{t('settings_panel.tabs.general', { defaultValue: 'General' })}</TabsTrigger>
              </TabsList>
              <TabsContent value="customization" className="pt-6">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <Label>{t('settings_panel.theme', { defaultValue: 'Theme' })}</Label>
                    <div className="overflow-x-auto pb-2 -mb-2">
                      <div className="inline-flex w-max items-center rounded-lg border p-1 space-x-1">
                        <Button variant={theme === 'light' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setTheme('light')}>
                          <Sun className="mr-2 h-4 w-4" /> {t('settings_panel.theme_light', { defaultValue: 'Light' })}
                        </Button>
                        <Button variant={theme === 'dark' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setTheme('dark')}>
                          <Moon className="mr-2 h-4 w-4" /> {t('settings_panel.theme_dark', { defaultValue: 'Dark' })}
                        </Button>
                        <Button variant={theme === 'system' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setTheme('system')}>
                          <Monitor className="mr-2 h-4 w-4" /> {t('settings_panel.theme_system', { defaultValue: 'System' })}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>{t('settings_panel.font_size', { defaultValue: 'Font Size' })}</Label>
                    <div className="overflow-x-auto pb-2 -mb-2">
                      <div className="inline-flex w-max items-center rounded-lg border p-1 space-x-1">
                        <Button variant={fontSize === 'sm' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setFontSize('sm')}>
                          <Text className="mr-2 h-3 w-3" /> {t('settings_panel.font_size_small', { defaultValue: 'Small' })}
                        </Button>
                        <Button variant={fontSize === 'base' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setFontSize('base')}>
                          <Text className="mr-2 h-4 w-4" /> {t('settings_panel.font_size_default', { defaultValue: 'Default' })}
                        </Button>
                        <Button variant={fontSize === 'lg' ? 'secondary' : 'ghost'} size="sm" className="flex-shrink-0 px-3" onClick={() => setFontSize('lg')}>
                          <Text className="mr-2 h-5 w-5" /> {t('settings_panel.font_size_large', { defaultValue: 'Large' })}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>{t('settings_panel.accent_color', { defaultValue: 'Accent Color' })}</Label>
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

                  <div className="space-y-3">
                    <Label>{t('settings_panel.background_effect', { defaultValue: 'Background Effect' })}</Label>
                    <Select value={backgroundEffect} onValueChange={value => setBackgroundEffect(value as any)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('settings_panel.background_effect')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">{t('settings_panel.effect_none', { defaultValue: 'None' })}</SelectItem>
                        <SelectItem value="aurora">{t('settings_panel.effect_aurora', { defaultValue: 'Aurora' })}</SelectItem>
                        <SelectItem value="snowfall">{t('settings_panel.effect_snowfall', { defaultValue: 'Snowfall' })}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="general" className="pt-6">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <Label>{t('settings_panel.language', { defaultValue: 'Language' })}</Label>
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
                  
                  <Separator className="!my-10" />

                  <Button variant="outline" onClick={handleReset} className="w-full">
                    {t('settings_panel.reset', { defaultValue: 'Reset All Settings' })}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
        </CardContent>
    </Card>
  );
}
