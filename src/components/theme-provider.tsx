'use client';

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'sm' | 'base' | 'lg';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [fontSize, setFontSizeState] = useState<FontSize>('base');

  useEffect(() => {
    const storedTheme = localStorage.getItem('omnix-theme') as Theme | null;
    const storedFontSize = localStorage.getItem('omnix-font-size') as FontSize | null;

    if (storedTheme) {
      setThemeState(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark');
    }

    if (storedFontSize) {
      setFontSizeState(storedFontSize);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('omnix-theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const applyFontSize = (newSize: FontSize) => {
    setFontSizeState(newSize);
    localStorage.setItem('omnix-font-size', newSize);
    const root = document.documentElement;
    if (newSize === 'sm') root.style.fontSize = '87.5%'; // 14px
    else if (newSize === 'lg') root.style.fontSize = '112.5%'; // 18px
    else root.style.fontSize = '100%'; // 16px
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  
  useEffect(() => {
    applyFontSize(fontSize);
  }, [fontSize]);

  const value = useMemo(() => ({
    theme,
    setTheme: applyTheme,
    fontSize,
    setFontSize: applyFontSize,
  }), [theme, fontSize]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
