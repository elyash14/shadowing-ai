import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react({
      include: '**/*.disabled',
    }),
  ],
  root: resolve('./react-app'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  build: {
    outDir: resolve('./react-app/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./react-app/src/main.jsx'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};