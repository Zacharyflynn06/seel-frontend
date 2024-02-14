import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = {
	theme: 'light' | 'dark' | 'system';
};

const initialState: Theme = {
	theme: browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
};
const createThemeStore = () => {
	const { subscribe, set, update } = writable(initialState);

	return {
		subscribe,
		update,
		set,

		toggle: () =>
			update((state) => {
				if (state.theme === 'light') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
				state.theme = state.theme === 'light' ? 'dark' : 'light';

				return state;
			})
	};
};

export const themeStore = createThemeStore();
