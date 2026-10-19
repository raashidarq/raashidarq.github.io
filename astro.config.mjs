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
    sitemap({filter: (page) => !/\/writing(\/|$)/.test(new URL(page).pathname) && !/\/work\/(grifindo-payroll|malcolm-photography|weather-app-dashboard|keepclose|cropcare|smartdrive|tally)\//.test(new URL(page).pathname)}),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  // GitHub Pages serves directory output and 301s '/x' to '/x/'. Kept as 'ignore' so dev links
  // without a slash still resolve; internal hrefs should be written with trailing slashes.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  prefetch: true,
  // The product case studies were folded into the product pages; keep old links working.
  redirects: {
    '/work/keepclose': '/products/keepclose/',
    '/work/cropcare': '/products/cropcare/',
    '/work/smartdrive': '/products/smartdrive/',
    '/work/tally': '/products/tally/',
  },
});
