import { fetchUserAttributes } from '@aws-amplify/auth';
import type { Handle } from '@sveltejs/kit';

import { sequence } from '@sveltejs/kit/hooks';

async function authorize({ resolve, event }: { resolve: Function; event: any }) {
	console.log('authorize');

	const jwt = event.cookies.get('session_id');

	if (!jwt) {
		console.log('no cookie');
		return resolve(event);
	}

	const userAttributes = await fetchUserAttributes();

	// console.log({ userAttributes });

	event.locals.user = {
		isAuthenticated: true,
		email: userAttributes.email,
		id: userAttributes.sub
	};

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
