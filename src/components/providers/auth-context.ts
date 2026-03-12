import { createContext } from 'react';

export interface AuthContextValue {
  isAuthenticated: boolean;
  login: (user: object) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
