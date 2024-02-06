<script lang="ts">
	import NavItem from './NavItem.svelte';
	import FolderIcon from '../icons/FolderIcon.svelte';
	import type { NavigationItem } from '$lib/types/nav';
	import HomeIcon from '../icons/HomeIcon.svelte';
	import CheckIcon from '../icons/CheckIcon.svelte';
	import InboxStackIcon from '../icons/InboxStackIcon.svelte';
	import DocumentMagnifyingGlassIcon from '../icons/DocumentMagnifyingGlassIcon.svelte';

	const navLinks: NavigationItem[] = [
		{
			name: 'Dashboard',
			href: '/',
			icon: HomeIcon
		},
		{
			name: 'Review Deal',
			href: '/review',
			icon: DocumentMagnifyingGlassIcon
		},
		{
			name: 'Submit Deal',
			href: '/submit',
			icon: CheckIcon
		},
		{
			name: 'Pipeline',
			href: '/pipeline',
			icon: InboxStackIcon
		},
		{
			name: 'documents',
			href: '/documents',
			icon: FolderIcon
		}
	];
</script>

<div
	class="from-pink to-purple shadow-24dp fixed bottom-0 z-10 h-[5rem] w-full bg-gradient-to-b md:inset-0 md:h-screen md:w-[10rem]"
>
	<!-- logo and slogan -->
	<div class="mx-auto hidden flex-col space-y-2.5 pt-5 text-center md:flex md:h-auto md:w-32">
		<img src="/images/SeelLogoWhiteLetters.png" alt="" />
		<div class="text-[10px] uppercase tracking-[.3rem] text-white">seel the deal</div>
	</div>

	<!-- navlinks -->
	<div class="flex w-full justify-evenly pt-2.5 md:flex-col md:space-y-5 md:pt-10">
		{#each navLinks as navObj}
			<NavItem {navObj}></NavItem>
		{/each}
	</div>
</div>
