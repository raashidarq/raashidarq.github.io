import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://raashidarq.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({filter: (page) => !/\/(notes|writing)(\/|$)/.test(new URL(page).pathname) && !/\/work\/(grifindo-payroll|malcolm-photography|weather-app-dashboard)\//.test(new URL(page).pathname)}),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  prefetch: true,
});
