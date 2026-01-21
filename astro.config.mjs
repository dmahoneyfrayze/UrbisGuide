// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://guide.urbisconcepts.com',
  trailingSlash: 'always',
  output: 'server',
  adapter: netlify(),
  build: {
    format: 'directory'
  },

  integrations: [
    sitemap(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push", "fbq"],
      },
    })
  ]
});