export const handle = async ({ request, resolve }) => {
	const user = request.locals.user;

	const context = {
		user,
		isLoggedIn: !!user
	};

	console.log('hooks.client.ts', context);
};
