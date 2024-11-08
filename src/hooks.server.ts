import { fetchUserAttributes } from '@aws-amplify/auth';
import type { Handle } from '@sveltejs/kit';

import { sequence } from '@sveltejs/kit/hooks';

async function authorize({ resolve, event }) {
	// let currentUser;

	const jwt = event.cookies.get('session_id');

	if (!jwt) {
		console.log('no cookie');
		return resolve(event);
	}

	// console.log({ cookieId });

	// try {
	// 	const userStore = new GetUserStore();

	// 	const req = await userStore.fetch({ event, variables: { id: cookieId } });

	// 	// console.log({ req });

	// 	if (req.errors) {
	// 		for (const error of req.errors) {
	// 			console.log(error);
	// 		}
	// 		return resolve(event);
	// 	}

	// 	const user = req?.data?.getUser;

	// 	if (user) {
	// 		currentUser = {
	// 			isAuthenticated: true,
	// 			email: user.email,
	// 			id: user.id,
	// 			investingEntities: user.investingEntities
	// 		};
	// 		event.locals.user = currentUser;
	// 		setSession(event, { currentUser });
	// 		return resolve(event);
	// 	}
	// } catch (error) {
	// 	console.error(error);
	// 	return resolve(event);
	// }

	return resolve(event);
}
async function logger({ resolve, event }: { resolve: Function; event: any }) {
	const startTime = Date.now();
	const humanFormatDate = new Date(startTime).toLocaleString();
	const response = await resolve(event);
	console.log(
		`**** ${Date.now() - startTime}ms ${event.request.method} from ${event.url.host} to ${event.url.pathname} started at ${humanFormatDate}`
	);

	return response;
}

export const handle: Handle = sequence(logger, authorize);
