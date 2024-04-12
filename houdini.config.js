/// <references types="houdini-svelte">
/// <references types="houdini-plugin-svelte-global-stores">

/** @type {import('houdini').ConfigFile} */

const config = {
	defaultCachePolicy: 'CacheOrNetwork',
	defaultPartial: true,
	defaultFragmentMasking: 'disable',
	framework: 'sveltekit',
	schemaPath: './schema.graphql',
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
	},

	// Yeah... AppSync only allows their build-in scalars:
	// AWSDate, AWSDateTime, AWSEmail, AWSIPAddress, AWSJSON, AWSPhone, AWSTime, AWSTimestamp, AWSURL
	scalars: {
		AWSJSON: {
			type: 'object',
			unmarshal(val) {
				return val && typeof val === 'string' ? JSON.parse(val) : val;
			},
			marshal(obj) {
				return obj && typeof obj !== 'string' ? JSON.stringify(obj) : obj;
			}
		},

		DateTime: {
			type: 'Date',
			unmarshal(val) {
				return val ? new Date(val) : null;
			},
			marshal(date) {
				return date && date.getTime();
			}
		}
	}
};

export default config;
