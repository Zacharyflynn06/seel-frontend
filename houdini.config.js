/// <references types="houdini-svelte">
/// <references types="houdini-plugin-svelte-global-stores">

/** @type {import('houdini').ConfigFile} */

const config = {
	defaultCachePolicy: 'CacheOrNetwork',
	defaultPartial: true,
	defaultFragmentMasking: 'disable',
	framework: 'sveltekit',
	watchSchema: {
		url: 'https://fmfxd3pstrhzffv2nppqxedxa4.appsync-api.us-east-1.amazonaws.com/graphql',
		headers: {
			'Content-Type': 'application/graphql',
			'x-api-key': 'da2-f37zboib4fenllbsxqymmoo2p4'
		}
	},
	plugins: {
		'houdini-plugin-svelte-global-stores': {
			prefix: 'GQL_',
			generate: ['mutation', 'subscription', 'fragment']
		},
		'houdini-svelte': {}
	}
};

export default config;
