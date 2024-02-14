<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type { NavigationItem } from '$lib/types/nav';
	import CheckIcon from '../icons/CheckIcon.svelte';
	import RectangleGroupIcon from '../icons/RectangleGroupIcon.svelte';
	import RocketIcon from '../icons/RocketIcon.svelte';

	const navLinks: NavigationItem[] = [
		{
			name: 'Dashboard',
			href: '/',
			icon: RectangleGroupIcon
		},
		{
			name: 'Review Deal',
			href: '/review-deal',
			icon: RocketIcon
		},
		{
			name: 'Submit Deal',
			href: '/submit-deal',
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
	class="fixed bottom-0 z-10 h-[7rem] w-full bg-gradient-to-b from-pink to-purple shadow-24dp md:inset-0 md:h-screen md:w-[10rem]"
>
	<!-- logo and slogan -->
	<div class="mx-auto hidden flex-col space-y-2.5 pt-5 text-center md:flex md:h-auto md:w-32">
		<div>
			<img src="/images/SeelLogo.png" alt="" class="drop-shadow-2xl" />
			<div
				class="font-spartan text-7xl font-extrabold text-white drop-shadow-2xl dark:text-off-black"
			>
				seel
			</div>
		</div>
		<div class="text-[10px] uppercase tracking-[.3rem] text-white drop-shadow-2xl dark:text-black">
			seel the deal
		</div>
	</div>

	<!-- navlinks -->
	<div class="flex w-full justify-evenly p-5 text-purple md:flex-col md:space-y-5 md:pt-10">
		{#each navLinks as navObj}
			<NavItem {navObj}></NavItem>
		{/each}
	</div>
</nav>
