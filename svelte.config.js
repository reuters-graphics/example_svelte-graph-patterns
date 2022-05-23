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
