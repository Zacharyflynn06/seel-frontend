import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: 'https://fmfxd3pstrhzffv2nppqxedxa4.appsync-api.us-east-1.amazonaws.com/graphql',

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	fetchParams() {
		return {
			headers: {
				'Content-Type': 'application/graphql',
				'x-api-key': 'da2-7yhtur24n5avjazt66mmdsoboy'
			}
		};
	}
});
