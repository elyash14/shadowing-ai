import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import Layout from './Layout';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: 0.42,
  primaryColor: 'violet'
});

document.addEventListener('DOMContentLoaded', () => {
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
      let page = pages[`./pages/${name}.tsx`]
      page.default.layout = page.default.layout || (page => <Layout children={page} />)
      return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
      createRoot(el).render( <MantineProvider defaultColorScheme="dark" theme={theme}><App {...props} /></MantineProvider>);
    }
  }).then(() => {});
});