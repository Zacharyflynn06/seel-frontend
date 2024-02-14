<script lang="ts">
	import { page } from '$app/stores';
	import CogIcon from './icons/CogIcon.svelte';
	import BellIcon from './icons/BellIcon.svelte';
	import { mainPanelWidth } from '$lib/classes';

	let title: string;

	function extractTitleFromPathname() {
		return $page.url.pathname
			.split('/')
			.map((part) => part.replace('-', ' '))
			.join(' ');
	}

	$: if ($page.url.pathname !== '/') {
		title = extractTitleFromPathname();
	} else {
		title = 'Dashboard';
	}
</script>

<header
	class="fixed top-0 z-10 flex h-20 md:left-[10rem] {mainPanelWidth} items-end justify-between bg-off-white p-5 dark:bg-black"
>
	<h1 class="text-4xl font-extrabold capitalize">
		{title}
	</h1>

	<div class="hidden space-x-5 md:flex">
		<div class="md:space-x-2.5">
			<span class="text-sm uppercase tracking-[.3rem] text-black/50 dark:text-white/50"
				>organization</span
			>
			<select name="" id="" class="capitalize">
				<option value="">platy partners</option>
			</select>
		</div>

		<div class="md:space-x-2.5">
			<span class="text-sm uppercase tracking-[.3rem] text-black/50 dark:text-white/50"
				>vehicles</span
			>
			<select name="" id="" class="capitalize">
				<option value="">platy partners fund</option>
			</select>
		</div>
	</div>

	<div class="flex items-center space-x-2 md:mr-2.5">
		<div class="text-pink"><CogIcon /></div>
		<div class="text-pink"><BellIcon /></div>
		<div class="font-bold">Username</div>
		<div class="h-10 w-10 rounded-full bg-white dark:bg-off-black" />
	</div>
</header>
