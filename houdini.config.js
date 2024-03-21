/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://fmfxd3pstrhzffv2nppqxedxa4.appsync-api.us-east-1.amazonaws.com/graphql',
		headers: {
			'Content-Type': 'application/graphql',
			'x-api-key': 'da2-7yhtur24n5avjazt66mmdsoboy'
		}
	},
	plugins: {
		'houdini-svelte': {}
	},
	framework: 'sveltekit',
	include: ['src/lib/graphql/**/*.gql', 'src/routes/**/*.{svelte,graphql,gql,ts,js}'],

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
