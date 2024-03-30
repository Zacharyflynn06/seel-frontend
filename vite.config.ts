import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import houdini from 'houdini/vite';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
	let plugins = [houdini(), sveltekit()];
	if (mode === 'development') {
		plugins = [nodeLoaderPlugin(), ...plugins];
	}

	return {
		plugins
	};
});
