import { getAllInvestingEntities, getInvestingEntity } from '$lib/services/investingEntity';
import type { Handle } from '@sveltejs/kit';

import { sequence } from '@sveltejs/kit/hooks';

async function authorize({ resolve, event }) {
	let currentUser;

	const jwt = event.cookies.get('session_id');

	if (!jwt) {
		console.log('no cookie');
		return resolve(event);
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
