import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  site: "https://yucheon6000.github.io",
  base: "tutorial-intro-web"
});