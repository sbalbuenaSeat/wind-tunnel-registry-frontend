import { checkSession } from '@services/authService/auth.service.ts';
import useSWR from 'swr';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export const useCheckSession = () => {
  const { data: user, isLoading } = useSWR<User>('user-login', checkSession, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return {
    user,
    isAuthenticated: !!user,
    loading: isLoading,
  };
};
