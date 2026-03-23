import { type FC, type ReactElement, type ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from '@components/ui/provider';
import {
  type RenderOptions,
  render as rtlRender,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import { SWRConfig } from 'swr';
import { AuthProvider } from '@/context/AuthContext.tsx';

/**
 * Global wrapper with `SWRConfig` and Chakra UI `Provider` to disable caching in tests.
 */
const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
    <AuthProvider>
      <Provider>{children}</Provider>
    </AuthProvider>
  </SWRConfig>
);

/**
 * Renders a React component wrapped with `SWRConfig` and `MemoryRouter`.
 *
 * @param ui - The React component to render.
 * @param route - The initial route for the `MemoryRouter`.
 * @param path - The path for the route.
 * @param options - Additional options for the `render()` function.
 */
const render = (
  ui: ReactElement,
  {
    route = '/',
    path = '*',
    ...options
  }: RenderOptions & { route?: string; path?: string } = {},
) => {
  return rtlRender(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path={path} element={ui} />
      </Routes>
    </MemoryRouter>,
    {
      wrapper: Wrapper,
      ...options,
    },
  );
};

/**
 * Renders a React hook wrapped with `SWRConfig`.
 *
 * @param hook - The React hook to test.
 */
const renderHook = <T,>(hook: () => T) => {
  return rtlRenderHook(() => hook(), { wrapper: Wrapper });
};

export * from '@testing-library/react';
export { render, renderHook };
