import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Fully static output — the whole site prerenders to HTML/CSS/JS in
		// build/, deployable to any static host (Vercel, GitHub Pages,
		// Netlify, …). On Vercel, vercel.json points the platform at build/
		// and disables the SvelteKit preset so it's served as plain static.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	compilerOptions: {
		runes: true
	}
};

export default config;
