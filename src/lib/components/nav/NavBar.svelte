<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type { NavigationItem } from '$lib/types/nav';
	import CheckIcon from '../icons/CheckIcon.svelte';
	import RectangleGroupIcon from '../icons/RectangleGroupIcon.svelte';
	import RocketIcon from '../icons/RocketIcon.svelte';

	const navLinks: NavigationItem[] = [
		{
			name: 'Dashboard',
			href: '/dashboard',
			icon: CheckIcon
		},

		// {
		// 	name: 'submit Deals',
		// 	href: '/submit-deals',
		// 	icon: RocketIcon
		// },

		{
			name: 'Admin console',
			href: '/admin',
			icon: RocketIcon
		}
		// {
		// 	name: 'Pipeline',
		// 	href: '/pipeline',
		// 	icon: InboxStackIcon
		// },
		// {
		// 	name: 'documents',
		// 	href: '/documents',
		// 	icon: FolderIcon
		// }
	];
</script>

<nav
	class=" fixed bottom-0 left-0 z-10 h-[100px] w-full border-r border-purple bg-gradient-to-t from-pink to-purple md:top-[60px] md:h-full md:w-[10rem]"
>
	<div class="flex w-full justify-evenly p-5 md:flex-col md:space-y-5 md:pt-10">
		{#each navLinks as navObj}
			<NavItem {navObj}></NavItem>
		{/each}
	</div>
</nav>
