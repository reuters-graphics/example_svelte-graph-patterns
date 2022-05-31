import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		paths: {
			assets:
			  process.env.NODE_ENV === 'production' ? 'https://reuters-graphics.github.io/example_svelte-graph-patterns/cdn' : '',
			base:
			  process.env.NODE_ENV === 'production'
				? '/example_svelte-graph-patterns'
				: '',
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
		  }),
		trailingSlash: 'always',
		prerender: {
			default: true
		  },
		vite: {
			ssr: {
				noExternal: ['prismjs'],
			},
			optimizeDeps: {
				exclude: [],
				include: [],
			  },
		}
	}
};

export default config;
