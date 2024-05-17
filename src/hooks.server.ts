import { redirect, type Handle } from '@sveltejs/kit';

import { sequence } from '@sveltejs/kit/hooks';
import { GetUserStore, setSession } from '$houdini';

async function authorize({ resolve, event }) {
	let currentUser;

	const cookieId = event.cookies.get('session_id');

	if (!cookieId) {
		// console.log('no cookie');
		return resolve(event);
	}
	// console.log({ cookieId });
	const userStore = new GetUserStore();

	await userStore.fetch({ event, variables: { id: cookieId } }).then((res) => {
		// console.log({ res });
		const userResponse = res.data?.getUser;
		currentUser = {
			isAuthenticated: true,
			email: userResponse?.email,
			id: userResponse?.id
		};
		event.locals.user = currentUser;
		setSession(event, { currentUser });
	});

	return resolve(event);
}
async function logger({ event, resolve }) {
	const startTime = Date.now();
	const humanFormatDate = new Date(startTime).toLocaleString();
	const response = await resolve(event);
	console.log(
		`**** ${Date.now() - startTime}ms ${event.request.method} from ${event.url.host} to ${event.url.pathname} started at ${humanFormatDate}`
	);

	return response;
}

export const handle: Handle = sequence(logger, authorize);
