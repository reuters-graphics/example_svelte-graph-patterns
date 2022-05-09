import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs/cdn',
		  }),
		vite: {
			optimizeDeps: {
				exclude: ['svelte-prism'],
				include: [],
			  },
		}
	}
};

export default config;
