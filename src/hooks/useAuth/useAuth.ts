import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext/AuthContext.tsx';

interface AuthContextType {
  name: string;
  isAuthenticated: boolean;
  loading: boolean;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
