import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	url: 'https://fmfxd3pstrhzffv2nppqxedxa4.appsync-api.us-east-1.amazonaws.com/graphql',
	fetchParams({ session }) {
		console.log({ session });
		return {
			headers: {
				'Content-Type': 'application/graphql',
				'x-api-key': 'da2-f37zboib4fenllbsxqymmoo2p4'
			}
		};
	}
});
