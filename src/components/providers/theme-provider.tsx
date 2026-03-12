import { useEffect, type ReactNode } from 'react';
import { useAppStore } from '../../stores/app-store.ts';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useAppStore((s) => s.theme);

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

  return <>{children}</>;
}
