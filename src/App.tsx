import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import { ProtectedRoute } from '@components/ProtectedRoute';
import { Dashboard } from '@pages/Dashboard/Dashboard.tsx';
import { Home } from '@pages/Home/Home.tsx';

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
