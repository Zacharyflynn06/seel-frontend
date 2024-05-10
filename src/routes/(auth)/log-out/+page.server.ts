import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { Auth } from 'aws-amplify';

export const load: PageServerLoad = async () => {
	// we only use this endpoint for the api
	// and don't need to see the page
	throw redirect(302, '/');
};

export const actions: Actions = {
	default({ cookies, locals }) {
		Auth.signOut();
		cookies.delete('session_id', { path: '/' });
		locals.user = undefined;
		console.log('signed out');
		throw redirect(302, '/');
	}
};
