import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
<<<<<<< HEAD
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
	let plugins = [sveltekit()];
	if (mode === 'development') {
		plugins = [nodeLoaderPlugin(), sveltekit()];
	}
=======

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
	const plugins = [sveltekit()];
>>>>>>> 5533523 (uninstall houdini, rip out folders autogenerated by houdini)

	return {
		plugins
	};
});
