import { defineConfig } from 'astro/config';
import tailwindCss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alireza.es',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindCss()],
  },
});
