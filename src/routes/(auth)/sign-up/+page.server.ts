import { fail, redirect } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	signUp: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email-address');
		const password = data.get('password');
		const confirmPassword = data.get('confirm-password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { error: 'Invalid email or password' });
		}

		if (password !== confirmPassword) {
			return fail(400, { error: 'Passwords do not match please try again' });
		}
		try {
			await Auth.signUp({
				username: email,
				password: password
			});

			return { success: true, email: email };
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: error?.message });
		}
	},

	verifyEmail: async ({ request }) => {
		const data = await request.formData();
		const code = data.get('code');
		const email = data.get('email-address');
		console.log({ code, email });
		try {
			await Auth.confirmSignUp(email, code);
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: error?.message });
		}

		redirect(300, '/log-in');
	}
};
