import { use } from 'react';
import { ThemeContext, type ThemeContextValue } from './theme-context.ts';

export function useTheme(): ThemeContextValue {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');

  return ctx;
}
