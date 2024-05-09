import { fail, redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Auth } from 'aws-amplify';

async function authorize({ event, resolve }) {
	try {
		const user = await Auth.currentAuthenticatedUser();
	} catch (error) {
		console.log(error);
	}
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
