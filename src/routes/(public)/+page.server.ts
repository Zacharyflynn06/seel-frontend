import type { PageServerLoad } from './$houdini';

export const load: PageServerLoad = async (event) => {
	console.log(event.locals);
	return {
		user: event.locals.user
	};
};
