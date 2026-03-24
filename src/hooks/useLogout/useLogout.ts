import { useNavigate } from 'react-router-dom';
import { logout } from '@services/authService/auth.service';
import { mutate as globalMutate } from 'swr';
import useSWRMutation from 'swr/mutation';

export const useLogout = () => {
  const navigate = useNavigate();

  const { trigger, isMutating, error } = useSWRMutation('auth-logout', logout, {
    onSuccess: async () => {
      await globalMutate(
        'user-session',
        { authenticated: false, name: '' },
        true,
      );
      navigate('/');
    },
  });

  const handleLogout = async () => {
    try {
      await trigger();
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  return { handleLogout, loading: isMutating, error };
};
