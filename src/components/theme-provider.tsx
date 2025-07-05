
'use client';

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import i18n from '@/lib/i18n';
import { ACCENT_COLORS } from '@/lib/constants';

type Theme = 'light' | 'dark' | 'system';
type FontSize = 'sm' | 'base' | 'lg';
type Language = 'en' | 'es' | 'hi' | 'de' | 'fr' | 'ja' | 'ru' | 'pt' | 'zh-CN' | 'ar' | 'ko' | 'it' | 'nl' | 'tr' | 'pl' | 'sv' | 'vi' | 'id' | 'th';
type BackgroundEffect = 'none' | 'aurora' | 'snowfall' | 'bubbles' | 'confetti' | 'static' | 'stars' | 'grid' | 'gradient';
type CardStyle = 'default' | 'glass';

type SettingsProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  backgroundEffect: BackgroundEffect;
  setBackgroundEffect: (effect: BackgroundEffect) => void;
  cardStyle: CardStyle;
  setCardStyle: (style: CardStyle) => void;
  resetSettings: () => void;
  isMounted: boolean;
};

const SettingsProviderContext = createContext<SettingsProviderState | undefined>(undefined);

const GUEST_SETTINGS_KEY = 'omnix-guest-settings';

type GuestSettings = {
  theme: Theme;
  fontSize: FontSize;
  language: Language;
  accentColor: string;
  backgroundEffect: BackgroundEffect;
  cardStyle: CardStyle;
};

const defaultSettings: GuestSettings = {
  theme: 'system',
  fontSize: 'base',
  language: 'en',
  accentColor: ACCENT_COLORS[0].color,
  backgroundEffect: 'aurora',
  cardStyle: 'default',
};

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<GuestSettings>(defaultSettings);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let loadedSettings: GuestSettings;
    try {
      const storedSettings = localStorage.getItem(GUEST_SETTINGS_KEY);
      if (storedSettings) {
        loadedSettings = { ...defaultSettings, ...JSON.parse(storedSettings) };
      } else {
        loadedSettings = defaultSettings;
      }
    } catch (error) {
      console.error('Failed to parse guest settings from localStorage', error);
      loadedSettings = defaultSettings;
    }
    setSettings(loadedSettings);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    try {
      localStorage.setItem(GUEST_SETTINGS_KEY, JSON.stringify(settings));

      const root = document.documentElement;
      
      root.classList.remove('light', 'dark');

      let effectiveTheme = settings.theme;
      if (effectiveTheme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      root.classList.add(effectiveTheme);

      root.style.fontSize = settings.fontSize === 'sm' ? '87.5%' : settings.fontSize === 'lg' ? '112.5%' : '100%';
      root.style.setProperty('--primary', settings.accentColor);
      root.style.setProperty('--ring', settings.accentColor);
      root.dataset.cardStyle = settings.cardStyle;

      if (i18n.language !== settings.language) {
        i18n.changeLanguage(settings.language);
      }
      
      document.body.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out';
    } catch (error) {
      console.error('Failed to apply guest settings', error);
    }
  }, [settings, isMounted]);

  const value = useMemo(
    () => ({
      ...settings,
      setTheme: (theme: Theme) => setSettings(s => ({ ...s, theme })),
      setFontSize: (fontSize: FontSize) => setSettings(s => ({ ...s, fontSize })),
      setLanguage: (language: Language) => setSettings(s => ({ ...s, language })),
      setAccentColor: (accentColor: string) => setSettings(s => ({ ...s, accentColor })),
      setBackgroundEffect: (backgroundEffect: BackgroundEffect) => setSettings(s => ({ ...s, backgroundEffect })),
      setCardStyle: (cardStyle: CardStyle) => setSettings(s => ({ ...s, cardStyle })),
      resetSettings: () => {
        localStorage.removeItem(GUEST_SETTINGS_KEY);
        setSettings(defaultSettings);
      },
      isMounted,
    }),
    [settings, isMounted]
  );

  return <SettingsProviderContext.Provider value={value}>{children}</SettingsProviderContext.Provider>;
}

export const useSettings = () => {
  const context = useContext(SettingsProviderContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
