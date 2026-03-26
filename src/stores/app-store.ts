import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

export interface User {
  firstName: string;
  lastName: string;
  bio: string;
  avatar?: string;
  stats: {
    videos: number;
    followers: number;
    following: number;
    likes: number;
  };
  analytics?: {
    views30d: number;
    engagementRate: number;
    newFollowers: number;
    newFollowersGrowth: number;
    avgWatchTimeSec: number;
  };
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (
    updates: Partial<Pick<User, 'firstName' | 'lastName' | 'bio'>>,
  ) => void;
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
      updateUser: (updates) =>
        set((s) => (s.user ? { user: { ...s.user, ...updates } } : {})),
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
