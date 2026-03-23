import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import { ProtectedRoute } from '@components/ProtectedRoute.tsx';
import { Dashboard, Home } from './routes/lazyRoutes';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};
