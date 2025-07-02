'use client';

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import i18n from '@/lib/i18n';
import { ACCENT_COLORS } from '@/lib/constants';

type Theme = 'light' | 'dark';
type FontSize = 'sm' | 'base' | 'lg';
type Language = 'en' | 'es' | 'hi';

type SettingsProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  resetSettings: () => void;
};

const SettingsProviderContext = createContext<SettingsProviderState | undefined>(undefined);

const GUEST_SETTINGS_KEY = 'omnix-guest-settings';

type GuestSettings = {
  theme: Theme;
  fontSize: FontSize;
  language: Language;
  accentColor: string;
};

const defaultSettings: GuestSettings = {
  theme: 'light',
  fontSize: 'base',
  language: 'en',
  accentColor: ACCENT_COLORS[0].color,
};

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<GuestSettings>(defaultSettings);

  useEffect(() => {
    let loadedSettings: GuestSettings;
    try {
      const storedSettings = localStorage.getItem(GUEST_SETTINGS_KEY);
      if (storedSettings) {
        loadedSettings = { ...defaultSettings, ...JSON.parse(storedSettings) };
      } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        loadedSettings = { ...defaultSettings, theme: 'dark' };
      } else {
        loadedSettings = defaultSettings;
      }
    } catch (error) {
      console.error('Failed to parse guest settings from localStorage', error);
      loadedSettings = defaultSettings;
    }
    setSettings(loadedSettings);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(GUEST_SETTINGS_KEY, JSON.stringify(settings));

      const root = document.documentElement;
      
      // Apply theme
      root.classList.remove('light', 'dark');
      root.classList.add(settings.theme);

      // Apply font size
      if (settings.fontSize === 'sm') root.style.fontSize = '87.5%'; // 14px
      else if (settings.fontSize === 'lg') root.style.fontSize = '112.5%'; // 18px
      else root.style.fontSize = '100%'; // 16px

      // Apply accent color
      root.style.setProperty('--primary', settings.accentColor);
      root.style.setProperty('--ring', settings.accentColor);

      // Apply language
      if (i18n.language !== settings.language) {
        i18n.changeLanguage(settings.language);
      }
    } catch (error) {
      console.error('Failed to apply guest settings', error);
    }
  }, [settings]);

  const value = useMemo(
    () => ({
      ...settings,
      setTheme: (theme: Theme) => setSettings(s => ({ ...s, theme })),
      setFontSize: (fontSize: FontSize) => setSettings(s => ({ ...s, fontSize })),
      setLanguage: (language: Language) => setSettings(s => ({ ...s, language })),
      setAccentColor: (accentColor: string) => setSettings(s => ({ ...s, accentColor })),
      resetSettings: () => {
        localStorage.removeItem(GUEST_SETTINGS_KEY);
        const newSettings = {
          ...defaultSettings,
          theme: window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        };
        setSettings(newSettings);
      },
    }),
    [settings]
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
