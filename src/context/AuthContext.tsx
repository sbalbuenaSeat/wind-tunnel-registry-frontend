import { createContext, type ReactNode } from 'react';
import { useCheckSession } from '@/hooks/useCheckSession/useCheckSession.ts';

interface AuthContextType {
  name: string;
  isAuthenticated: boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { name, isAuthenticated, loading } = useCheckSession();

  return (
    <AuthContext.Provider
      value={{
        name,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
