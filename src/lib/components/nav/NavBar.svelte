<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type { NavigationItem } from '$lib/types/nav';
	import CheckIcon from '../icons/CheckIcon.svelte';
	import RectangleGroupIcon from '../icons/RectangleGroupIcon.svelte';
	import RocketIcon from '../icons/RocketIcon.svelte';

	const navLinks: NavigationItem[] = [
		// {
		// 	name: 'Dashboard',
		// 	href: '/dashboard',
		// 	icon: RectangleGroupIcon
		// },

		{
			name: 'Add Company',
			href: '/add-company',
			icon: RectangleGroupIcon
		},
		{
			name: 'Review Deals',
			href: '/review-deals',
			icon: RocketIcon
		},
		{
			name: 'Submit Deals',
			href: '/submit-deals',
			icon: CheckIcon
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
	class="fixed left-0 top-[80px] z-10 h-[100px] w-full bg-gradient-to-b from-pink to-purple md:h-full md:w-[10rem]"
>
	<!-- logo and slogan -->
	<!-- <div class="mx-auto hidden flex-col space-y-2.5 text-center md:flex md:h-auto md:w-24">
		<div class="grid justify-center">
			<SeelIcon className="h-[10rem] w-[10rem] text-off-white dark:text-grey-01 " />
		</div>
		<div class="tracking-none line-clamp-1 text-[10px] uppercase drop-shadow-2xl">
			seel the deal
		</div>
	</div> -->

	<!-- navlinks -->
	<div class="flex w-full justify-evenly p-5 text-purple md:flex-col md:space-y-5 md:pt-10">
		{#each navLinks as navObj}
			<NavItem {navObj}></NavItem>
		{/each}
	</div>
</nav>
