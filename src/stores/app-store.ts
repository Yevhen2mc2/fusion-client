import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface AppState {
  user: object | null;
  isAuthenticated: boolean;
  login: (user: object) => void;
  logout: () => void;
  theme: Theme;
  cycleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      theme: 'dark' as Theme,
      cycleTheme: () =>
        set((s) => ({
          theme:
            s.theme === 'system'
              ? 'light'
              : s.theme === 'light'
                ? 'dark'
                : 'system',
        })),
    }),
    { name: 'app' },
  ),
);
