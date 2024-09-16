import { writable } from 'svelte/store';
const store = () => {
	const { subscribe, set, update } = writable(null);
	return {
		subscribe,
		set,
		update
	};
};

export const selectedEntityStore = store();
