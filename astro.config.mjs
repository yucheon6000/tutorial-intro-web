import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
import normalize from 'normalize-path';
import fs from 'fs';
import starlight from "@astrojs/starlight";

// 파일명 정규화 함수
function normalizeFilenames(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const normalized = normalize(file);
    if (file !== normalized) {
      fs.renameSync(`${dir}/${file}`, `${dir}/${normalized}`);
    }
  });
}

// 빌드 시 실행
normalizeFilenames('./public/image');


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '국립공주대학교 게임디자인학과 제20회 졸업전시회',
    }),
    mdx(), react(),
  ],
  site: "https://knugame.kr/",
  base: "/2024/"
  // base: "tutorial-intro-web"
});