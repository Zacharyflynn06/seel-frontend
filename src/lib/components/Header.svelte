<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';
	import SmallButton from './buttons/SmallButton.svelte';
	import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';
	import { mainPanelWidth } from '$lib/classes';
	import CogIcon from './icons/CogIcon.svelte';

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
</script>

<header
	class="{mainPanelWidth} fixed top-0 z-10 flex w-full items-center justify-between bg-white p-5 dark:bg-grey-08 md:left-[10rem]"
>
	<div class="flex w-full items-center justify-between">
		<h1 class="flex-shrink-0 items-end text-3xl font-extrabold capitalize leading-none">
			{title}
		</h1>
		<div class="flex w-full justify-between space-x-5">
			<div class="flex md:space-x-5">
				<!-- <div class="grid items-center xl:flex xl:space-x-2.5 xl:space-y-0">
					<span
						class="hidden text-xs uppercase tracking-[.3rem] text-black/50 dark:text-white/50 xl:block"
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
					<span
						class="hidden text-xs uppercase tracking-[.3rem] text-black/50 dark:text-white/50 xl:block"
						>vehicles</span
					>
					<select name="" id="" class={selectBoxClasses}>
						<option value="">platy partners fund</option>
					</select>
				</div> -->
			</div>

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
	<nav transition:slide class="absolute right-0 top-[72px] z-20 bg-grey-08 p-5">
		<ul>
			<li>Home</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				Settings <div class="text-pink"><CogIcon /></div>
			</li>
			<li>
				<form transition:fade action="/log-out" method="POST" use:enhance>
					<SmallButton type="submit" label="Sign Out" />
				</form>
			</li>
		</ul>
	</nav>
{/if}
