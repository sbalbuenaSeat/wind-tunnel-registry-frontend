import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import { Provider } from '@components/ui/provider';
import { App } from '@/App.tsx';
import { AuthProvider } from './context/AuthContext';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider>
          <Suspense
            fallback={
              <Center h="100vh">
                <Spinner size="xl" color="blue.500" />
              </Center>
            }
          >
            <App />
          </Suspense>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
