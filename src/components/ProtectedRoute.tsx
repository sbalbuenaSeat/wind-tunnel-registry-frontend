import { Navigate, Outlet } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import { useCheckSession } from '@/hooks/useCheckSession/useCheckSession.ts';

export const ProtectedRoute = () => {
  const { user, loading } = useCheckSession();

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
