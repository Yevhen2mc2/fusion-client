import { type ReactNode } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useAppStore as useAuth } from '../../stores/app-store.ts';

const PUBLIC_PATHS = ['/login'];

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && !PUBLIC_PATHS.includes(location.pathname)) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
}
