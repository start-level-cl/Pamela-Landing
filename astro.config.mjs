import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pamela-landing.j-a-garcia13m.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
