import { setSession } from '$houdini';
import { fail, redirect } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	login: async ({ request, locals, cookies }) => {
		const data = await request.formData();

		const email = data.get('email-address');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}

		try {
			const user = await Auth.signIn(email, password);
			const session = await Auth.userSession(user);
			console.log('successfully logged in', { session });
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: 'Invalid email or password, please try again' });
		}

		redirect(300, '/submit-deals');
	}
};
