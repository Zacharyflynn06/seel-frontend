import type { PageServerLoad } from './$houdini';

export const load: PageServerLoad = async ({ locals }) => {
	console.log({ locals });
	return {
		user: locals.user
	};
};
