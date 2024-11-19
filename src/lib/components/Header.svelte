<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';

	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { mainPanelWidth } from '$lib/classes';
	import toast from 'svelte-french-toast';

	let isMenuOpen = false;
	let isLoggedIn = $page.data.user ? true : false;

	onMount(() => {
		if ($page.data.user) {
			isLoggedIn = true;
		}
	});

	const closeMenu = () => {
		isMenuOpen = false;
	};

	$: url = $page.url;
</script>

<header
	class="fixed top-0 z-10 flex h-[60px] w-full justify-center bg-light-grey-08 shadow-08dp dark:bg-grey-08"
>
	<div class="relative flex h-full w-full items-center justify-between px-10">
		<a href="/" class="font-spartan text-5xl font-semibold leading-[.5] text-purple dark:text-pink"
			>seel</a
		>

		<!-- <DarkModeToggleButton on:toggle={() => (isMenuOpen = false)} /> -->
		<button
			class="relative flex font-spartan text-3xl leading-[.5]"
			on:click|preventDefault={() => (isMenuOpen = !isMenuOpen)}
		>
			Menu
		</button>

		{#if isMenuOpen}
			<!-- content here -->
			<nav
				transition:slide
				class="absolute right-0 top-[60px] z-20 flex flex-col space-y-2 bg-light-grey-08 p-5 text-lg shadow-08dp dark:bg-grey-08"
			>
				{#if isLoggedIn}
					<form action="/log-out" method="POST" use:enhance>
						<button on:click={closeMenu} type="submit">Sign Out</button>
					</form>
					<a on:click={closeMenu} href="/dashboard">Dashboard</a>
				{:else}
					{#if !url.pathname.includes('log-in')}
						<a on:click={closeMenu} href="/log-in">Log In</a>
					{/if}
					{#if !url.pathname.includes('sign-up')}
						<a on:click={closeMenu} href="/sign-up">Sign Up</a>
					{/if}
				{/if}
				{#if !url.pathname.includes('sign-up')}
					<a on:click={closeMenu} href="/">Home</a>
				{/if}
				{#if !url.pathname.includes('about')}
					<a on:click={closeMenu} href="/about">About</a>
				{/if}
				{#if !url.pathname.includes('privacy-policy')}
					<a on:click={closeMenu} href="/privacy-policy">Privacy</a>
				{/if}
				<div class="flex w-full">
					<DarkModeToggleButton on:toggle={() => (isMenuOpen = false)} />
				</div>
			</nav>
		{/if}
	</div>
</header>

<!-- this dummy div saves a bunch of headaches with padding -->
<div class="mt-[60px] w-full bg-transparent"></div>
