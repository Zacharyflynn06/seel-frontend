<script lang="ts">
	import { page } from '$app/stores';
	import CogIcon from './icons/CogIcon.svelte';
	import BellIcon from './icons/BellIcon.svelte';
	import { animatedTouchClasses, mainPanelWidth, selectBoxClasses } from '$lib/classes';
	import { themeStore } from '$lib/stores/themeStore';
	import SunIcon from './icons/SunIcon.svelte';
	import MoonIcon from './icons/MoonIcon.svelte';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';

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
	class="fixed top-0 z-10 flex h-20 md:left-[10rem] {mainPanelWidth} items-center justify-between bg-off-white p-5 dark:bg-black"
>
	<h1 class="text-4xl font-extrabold capitalize">
		{title}
	</h1>

	<div class="hidden md:grid md:gap-2 xl:flex xl:space-x-5">
		<div class="xl:space-x-2.5">
			<span class="text-sm uppercase tracking-[.3rem] text-black/50 dark:text-white/50"
				>organization</span
			>
			<select name="" id="" class={selectBoxClasses}>
				<option value="">platy partners</option>
			</select>
		</div>

		<div class="xl:space-x-2.5">
			<span class="text-sm uppercase tracking-[.3rem] text-black/50 dark:text-white/50"
				>vehicles</span
			>
			<select name="" id="" class={selectBoxClasses}>
				<option value="">platy partners fund</option>
			</select>
		</div>
	</div>

	<div class="flex items-center space-x-2 md:mr-2.5">
		<DarkModeToggleButton />
		<div class="text-pink"><CogIcon /></div>
		<div class="text-pink"><BellIcon /></div>
		<div class="font-bold">Username</div>
		<div class="h-10 w-10 rounded-full bg-white dark:bg-off-black" />
	</div>
</header>
