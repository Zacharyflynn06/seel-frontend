import { writable } from 'svelte/store';
const createCurrentInvestingEntityStore = () => {
	const { subscribe, set, update } = writable(null);
	return {
		subscribe,
		set,
		update
	};
};

export const currentInvestingEntityStore = createCurrentInvestingEntityStore();
