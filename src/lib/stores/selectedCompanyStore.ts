import { writable, get } from 'svelte/store';
const store = () => {
	const { subscribe, set, update } = writable(null);
	return {
		subscribe,
		set,
		update,
		get
	};
};

export const selectedCompanyStore = store();
