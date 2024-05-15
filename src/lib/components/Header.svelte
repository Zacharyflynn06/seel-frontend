<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';

	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let isLoggedIn = false;
	$: console.log({ $page });

	onMount(() => {
		if ($page.data.user) {
			isLoggedIn = true;
		}
	});

	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<header class="fixed top-0 z-10 flex h-[80px] w-full justify-center bg-white dark:bg-grey-08">
	<div class="relative flex h-full w-full max-w-[1200px] items-end justify-between p-5">
		<a href="/" class="font-spartan text-5xl font-bold text-purple dark:text-pink">seel</a>

		<button
			class="relative font-spartan text-2xl"
			on:click|preventDefault={() => (isMenuOpen = !isMenuOpen)}
		>
			Menu
		</button>
		{#if isMenuOpen}
			<!-- content here -->
			<nav
				transition:slide
				class="absolute right-0 top-[80px] z-20 flex flex-col bg-white p-5 text-right text-xl shadow-08dp dark:bg-grey-08"
			>
				<div class="justify-end">
					<DarkModeToggleButton on:toggle={() => (isMenuOpen = false)} />
				</div>
				<a on:click={closeMenu} href="/">Home</a>
				<a on:click={closeMenu} href="/about">About</a>

				{#if isLoggedIn}
					<form action="/log-out" method="POST" use:enhance>
						<button on:click={closeMenu} type="submit">Sign Out</button>
					</form>
				{:else}
					<a on:click={closeMenu} href="/log-in">Log In</a>
					<a on:click={closeMenu} href="/sign-up">Sign Up</a>
				{/if}
			</nav>
		{/if}
	</div>
</header>

<!-- this dummy div saves a bunch of headaches with padding -->
<div class="absolute inset-0 flex h-[80px] w-full bg-transparent"></div>
