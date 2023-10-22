import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import clickDirective from './src/directives/register'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [svelte(), tailwind({ applyBaseStyles: false }), /* clickDirective() */]
});
