<script lang="ts">
	import { page } from '$app/stores';
	import CogIcon from './icons/CogIcon.svelte';
	import BellIcon from './icons/BellIcon.svelte';
	import { mainPanelWidth, selectBoxClasses } from '$lib/classes';
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
	class="fixed top-0 z-10 flex md:left-[10rem] {mainPanelWidth} items-center justify-between border-b border-black/50 bg-off-white p-5 dark:border-white/50 dark:bg-black"
>
	<div class="flex w-full flex-col-reverse justify-between md:flex-row md:items-center">
		<h1 class="w-fit flex-grow pt-5 text-4xl font-extrabold capitalize md:mr-5 md:w-[25%] md:pt-0">
			{title}
		</h1>
		<div class="w-full space-x-5 text-[1rem] md:flex md:w-full md:justify-between">
			<div class="hidden md:flex md:space-x-5">
				<div class="grid items-center space-y-1 xl:flex xl:space-x-2.5 xl:space-y-0">
					<span class="text-xs uppercase tracking-[.3rem] text-black/50 dark:text-white/50"
						>organization</span
					>
					<select name="" id="" class={selectBoxClasses}>
						<option value="">platy partners</option>
						<option value="">option 1</option>
						<option value="">option 2</option>
						<option value="">option 3</option>
						<option value="">option 4</option>
						<option value="">option 5</option>
					</select>
				</div>

				<div class="grid items-center xl:flex xl:space-x-2.5">
					<span class="text-xs uppercase tracking-[.3rem] text-black/50 dark:text-white/50"
						>vehicles</span
					>
					<select name="" id="" class={selectBoxClasses}>
						<option value="">platy partners fund</option>
					</select>
				</div>
			</div>

			<div
				class="flex items-center justify-end space-x-2 md:mr-2.5 md:flex md:flex-shrink-0 md:justify-start"
			>
				<DarkModeToggleButton />
				<div class="text-pink"><CogIcon /></div>
				<div class="text-pink"><BellIcon /></div>
				<div class="font-bold">Username</div>
				<div class="h-10 w-10 rounded-full bg-white dark:bg-off-black" />
			</div>
		</div>
	</div>
</header>
