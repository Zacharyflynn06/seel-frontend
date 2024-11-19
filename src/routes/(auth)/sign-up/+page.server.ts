import { confirmSignUp, signIn, signUp } from '@aws-amplify/auth';
import { fail } from '@sveltejs/kit';

export const actions = {
	signUp: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email-address')?.toString().toLowerCase();
		const password = data.get('password')?.toString();
		const confirmPassword = data.get('confirm-password')?.toString();

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { error: 'Invalid email or password' });
		}

		if (password !== confirmPassword) {
			return fail(400, { error: 'Passwords do not match please try again' });
		}
		try {
			await signUp({
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

		const code = data.get('code')?.toString();
		const email = data.get('email-address')?.toString();
		const password = data.get('password')?.toString();
		// console.log({ code, email });

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { error: 'Invalid email or password' });
		}

		if (typeof code !== 'string' || !code) {
			return fail(400, { error: 'Invalid code' });
		}

		try {
			const confirmation = await confirmSignUp({ username: email, confirmationCode: code });
			// const cognitoUser = await signIn({email, password});
			// const userId = cognitoUser.attributes.sub;
			// const userStore = new UpsertUserStore();

			// await userStore.mutate({ id: userId, email: email }, { event }).then((res) => {
			// 	console.log({ res });
			// });
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: (error as Error)?.message });
		}
	}
};
