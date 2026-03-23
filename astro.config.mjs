// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hieulw.github.io',
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop',
		},
	},
	integrations: [
		starlight({
			title: "Hieu's Knowledge Base",
			description: 'Code. Systems. Growth.',
			customCss: ['./src/styles/site.css'],
			expressiveCode: {
				themes: ['gruvbox-dark-hard', 'gruvbox-light-hard'],
			},
			sidebar: [{ label: 'Forge', autogenerate: { directory: 'forge' } }],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hieulw' }],
			editLink: {
				baseUrl: 'https://github.com/hieulw/hieulw.github.io/edit/main/',
			},
		}),
	],
});
