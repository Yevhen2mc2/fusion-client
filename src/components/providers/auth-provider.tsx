import { useState, useCallback, type ReactNode } from 'react';
import { AuthContext } from './auth-context.ts';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('user'),
  );

  const login = useCallback((user: object) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext>
  );
}
