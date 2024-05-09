import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: () => {
		console.log('hello');
	}
};
