<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type { NavigationItem } from '$lib/types/nav';
	import {
		LayoutDashboard,
		FolderUp,
		FolderSearch,
		Workflow,
		LockKeyhole,
		Files
	} from 'lucide-svelte';

	const navLinks: NavigationItem[] = [
		{
			name: 'Dashboard',
			href: '/dashboard',
			icon: LayoutDashboard
		},

		{
			name: 'Submit Deals',
			href: '/submit-deals',
			icon: FolderUp
		},
		{
			name: 'Review Deals',
			href: '/review-deals',
			icon: FolderSearch
		},
		// {
		// 	name: 'Pipeline',
		// 	href: '/pipeline',
		// 	icon: Workflow
		// },

		// {
		// 	name: 'Documents',
		// 	href: '/documents',
		// 	icon: Files
		// },
		{
			name: 'Admin console',
			href: '/admin',
			icon: LockKeyhole
		}
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
