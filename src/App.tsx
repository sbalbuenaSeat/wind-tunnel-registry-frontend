import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import { ProtectedRoute } from '@components/ProtectedRoute.tsx';
import { DashboardProvider } from '@/context/DashboardContext/DashboardContext';
import { Dashboard, Home } from './routes/lazyRoutes';

export const App = () => {
  return (
    <DashboardProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Route>
      </Routes>
    </DashboardProvider>
  );
};
