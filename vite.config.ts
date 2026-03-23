import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      API_URL: JSON.stringify(env.VITE_API_URL),
    },
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'vendor-react';
              if (
                id.includes('@chakra-ui') ||
                id.includes('@emotion') ||
                id.includes('framer-motion')
              )
                return 'vendor-ui';
              return 'vendor';
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '@tests': path.resolve(__dirname, './src/tests'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@services': path.resolve(__dirname, './src/services'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/test-globals.ts',
    },
  };
});
