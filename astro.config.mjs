import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  site: "https://knugame.kr/",
  base: "/2024/"
  // base: "tutorial-intro-web"
});