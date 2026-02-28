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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hieulw' }],
			editLink: {
				baseUrl: 'https://github.com/hieulw/hieulw.github.io/edit/main/',
			},
			sidebar: [
				{
					label: 'Programming',
					autogenerate: { directory: 'programming' },
				},
				{
					label: 'DevOps',
					autogenerate: { directory: 'devops' },
				},
				{
					label: 'Tools',
					autogenerate: { directory: 'tools' },
				},
				{
					label: 'TIL',
					autogenerate: { directory: 'til' },
				},
				{
					label: 'Career',
					autogenerate: { directory: 'career' },
				},
				{
					label: 'About',
					items: [{ label: 'About this site', slug: 'about' }],
				},
				{
					label: 'Templates',
					items: [{ label: 'Note template', slug: 'templates/note-template' }],
				},
			],
		}),
	],
});
