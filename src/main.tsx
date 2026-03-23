import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '@components/ui/provider';
import { App } from '@/App.tsx';
import { AuthProvider } from './context/AuthContext';

// biome-ignore lint/style/noNonNullAssertion: Necessary for mounting React
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
