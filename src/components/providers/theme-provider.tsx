import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './theme-context.ts';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) ?? 'system',
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('ion-palette-dark');
      return;
    }

    if (theme === 'light') {
      root.classList.remove('ion-palette-dark');
      return;
    }

    // system
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    root.classList.toggle('ion-palette-dark', mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      root.classList.toggle('ion-palette-dark', e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme =
        prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return <ThemeContext value={{ theme, cycleTheme }}>{children}</ThemeContext>;
}
