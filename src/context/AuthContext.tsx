import { createContext, type ReactNode } from 'react';
import { useCheckSession } from '../hooks/useCheckSession/useCheckSession.ts';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useCheckSession();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
