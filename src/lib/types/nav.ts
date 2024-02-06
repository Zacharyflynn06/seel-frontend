import type { ComponentType, SvelteComponent } from 'svelte';

export type NavigationItem = {
	name: string;
	href: string;
	icon?: ComponentType<SvelteComponent>;
};
