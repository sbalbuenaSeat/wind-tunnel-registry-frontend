import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = () => {
  useAuth();

  // if (loading) {
  //   return <div>Cargando...</div>;
  // }
  //
  // return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
  return <Navigate to="/" replace />;
};
