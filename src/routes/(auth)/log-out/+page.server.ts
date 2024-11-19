import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createEmptyUserObject } from '$lib/services/user';
import { signOut } from 'aws-amplify/auth';

export const load: PageServerLoad = async () => {
	// we only use this endpoint for the api
	// and don't need to see the page
	throw redirect(302, '/');
};

export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		try {
			await signOut();
			cookies.set('session_id', '', {
				path: '/',
				expires: new Date(0)
			});
			locals.user = await createEmptyUserObject();
		} catch (error) {
			return { error: (error as Error).message };
		}
	}
};
