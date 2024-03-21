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

	scalars: {
		/* in your case, something like */
		AWSJSON: {
			// <- The GraphQL Scalar
			type: 'YourType_AWSJSON' // <-  The TypeScript type
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
