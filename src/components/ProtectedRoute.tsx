import { Navigate, Outlet } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth/useAuth.ts';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log(isAuthenticated, 'isAuthenticated');

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
