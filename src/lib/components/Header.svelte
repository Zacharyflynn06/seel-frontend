<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';

	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let isLoggedIn = false;

	onMount(() => {
		if ($page.data.user) {
			isLoggedIn = true;
		}
	});

	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<header
	class="bg-light-grey-08 fixed top-0 z-10 flex h-[80px] w-full justify-center shadow-08dp dark:bg-grey-08"
>
	<div
		class="relative flex h-full w-full max-w-[1200px] items-end justify-between p-5 xl:max-w-[1400px]"
	>
		<a href="/" class="font-spartan text-5xl font-bold leading-[.5] text-purple dark:text-pink"
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
				class="absolute right-0 top-[80px] z-20 flex flex-col items-end justify-end space-y-2 bg-white p-5 text-right text-xl shadow-08dp dark:bg-grey-08"
			>
				<DarkModeToggleButton on:toggle={() => (isMenuOpen = false)} />
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
<div class="mt-[80px] w-full bg-transparent"></div>
