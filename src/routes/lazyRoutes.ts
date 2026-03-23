import { lazy } from 'react';

/**
 * Helper to handle lazy loading of named exports
 * @param importFn - The dynamic import function: () => import('...')
 * @param name - The name of the exported component
 */
export const lazyNamed = <T extends Record<string, any>>(
  importFn: () => Promise<T>,
  name: keyof T
) => {
  return lazy(() =>
    importFn().then((module) => ({
      default: module[name],
    }))
  );
};

// Defined routes with lazy loading
export const Dashboard = lazyNamed(() => import('@pages/Dashboard/Dashboard.tsx'), 'Dashboard');
export const Home = lazyNamed(() => import('@pages/Home/Home.tsx'), 'Home');
