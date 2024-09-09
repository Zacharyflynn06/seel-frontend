import { redirect } from '$houdini';
import type { LayoutServerLoad } from '../$houdini';

export const load: LayoutServerLoad = async ({ locals }) => {
	console.log('layout-server', { locals });
	if (locals.user) {
		return {
			user: locals.user
		};
	} else {
		redirect(302, '/log-in');
	}
};
