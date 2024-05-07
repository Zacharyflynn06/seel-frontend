import { UpsertUserStore } from '$houdini';
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

			return { success: true, email: email, password: password };
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: error?.message });
		}
	},

	verifyEmail: async (event) => {
		const data = await event.request.formData();
		const code = data.get('code');
		const email = data.get('email-address');
		const password = data.get('password');
		console.log({ code, email });
		try {
			const confirmation = await Auth.confirmSignUp(email, code);
			const cognitoUser = await Auth.signIn(email, password);
			const userId = cognitoUser.attributes.sub;
			const userStore = new UpsertUserStore();

			await userStore.mutate({ id: userId, email: email }, { event }).then((res) => {
				console.log({ res });
			});
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: error?.message });
		}
	}
};
