import { createContext, type ReactNode } from 'react';
import { useCheckSession } from '@/hooks/useCheckSession/useCheckSession.ts';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, loading } = useCheckSession();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
