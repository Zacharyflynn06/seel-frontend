<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';
	import { mainPanelWidth } from '$lib/classes';
	import Menu from './nav/Menu.svelte';

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

	let isMenuOpen = false;

	$: console.log({ $page });
</script>

<header
	class="{mainPanelWidth} fixed top-0 z-10 flex h-[80px] w-full items-center justify-between bg-white p-5 dark:bg-grey-08 md:left-[10rem]"
>
	<div class="flex w-full items-center justify-between">
		<h1 class="flex-shrink-0 items-end font-extrabold capitalize leading-none">
			{title}
		</h1>
		<div class="flex w-full justify-between space-x-5">
			<div class="flex md:space-x-5"></div>

			<div class="flex w-fit flex-shrink-0 items-center space-x-2 md:mr-2.5">
				<DarkModeToggleButton />

				<button on:click|preventDefault={() => (isMenuOpen = !isMenuOpen)} class="underline">
					<div class="font-sans">Menu</div>
				</button>
			</div>
		</div>
	</div>
</header>

{#if isMenuOpen}
	<Menu></Menu>
{/if}
