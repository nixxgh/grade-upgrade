// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://grade-upgrade.nixxgh.workers.dev',
  build: {
    inlineStylesheets: 'always'
  },
  server: {
    host: true,
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
