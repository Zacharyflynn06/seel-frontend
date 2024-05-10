import { error, fail, redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Auth } from 'aws-amplify';
import { GetUserStore, setSession } from '$houdini';

async function authorize({ resolve, event }) {
	let currentUser;

	const cookieId = event.cookies.get('session_id');

	if (!cookieId) {
		// todo
	}

	const userStore = await new GetUserStore();

	userStore.fetch({ event, variables: { id: cookieId } }).then((res) => {
		currentUser = res.data?.getUser;
		if (currentUser) {
			event.locals.user = {
				isAuthenticated: true,
				email: currentUser.email,
				id: currentUser.id
			};
			console.log('locals are set');
			setSession(event, { currentUser });
		} else {
			// if (!unProtectedRoutes.includes(event.url.pathname)) {
			throw redirect(303, '/');
			// }
		}
	});

	// console.log({ event, sessionId });
	// setSession(event, { currentUser });
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
