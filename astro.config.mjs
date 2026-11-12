import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// `site` drives canonical URLs, Open Graph URLs and the sitemap. Change it if the domain changes.
export default defineConfig({
  site: 'https://imeldayayala.com.ng',
  trailingSlash: 'always',
  // React is only used for the two application forms (islands); every other page ships no framework.
  integrations: [sitemap(), react()],
});
