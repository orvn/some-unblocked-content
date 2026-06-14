import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  // Production domain — only used for canonical URLs (no sitemap; site is delisted)
  site: 'https://some-unblocked-content.pages.dev',

  output: 'static',

  integrations: [
    alpinejs({ entrypoint: '/src/entrypoint' }),
  ],

  // Security headers for the development server
  server: {
    port: 14480,
  },

  vite: {
    server: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  },
});
