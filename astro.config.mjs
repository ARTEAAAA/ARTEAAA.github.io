// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ARTEAAAA.github.io',
	base: '/ARTEAAA.github.io/',
	integrations: [mdx(), sitemap()],
});