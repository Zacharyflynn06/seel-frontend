import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
	let plugins = [sveltekit()];
	if (mode === 'development') {
		plugins = [nodeLoaderPlugin(), sveltekit()];
	}

	return {
		plugins
	};
});
