import { HoudiniClient } from '$houdini';
// import { createClient } from 'graphql-ws';
// import { subscription } from '$houdini/plugins';

export default new HoudiniClient({
	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	url: 'https://fmfxd3pstrhzffv2nppqxedxa4.appsync-api.us-east-1.amazonaws.com/graphql',

	// plugins: [
	// 	subscription(() =>
	// 		createClient({
	// 			url: 'wss://fmfxd3pstrhzffv2nppqxedxa4.appsync-realtime-api.us-east-1.amazonaws.com/graphql',
	// 			connectionParams: () => {
	// 				return {
	// 					headers: {
	// 						'x-api-key': 'da2-f37zboib4fenllbsxqymmoo2p4',
	// 						host: 'fmfxd3pstrhzffv2nppqxedxa4.appsync-api.us-east-1.amazonaws.com',
	// 						'Sec-WebSocket-Protocol': 'graphql-transport-ws'
	// 					}
	// 				};
	// 			}
	// 		})
	// 	)
	// ],
	fetchParams({ session }) {
		// console.log({ session });
		return {
			headers: {
				'Content-Type': 'application/graphql',
				'x-api-key': 'da2-f37zboib4fenllbsxqymmoo2p4'
			}
		};
	}
});
