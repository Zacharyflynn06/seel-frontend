<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';
	import { animatedTouchClasses, mainPanelWidth } from '$lib/classes';
	import Menu from './nav/Menu.svelte';
	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

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

	export let isFullWidth = false;

	$: console.log({ $page });
</script>

<header
	class="{isFullWidth
		? 'w-full '
		: mainPanelWidth} fixed top-0 z-10 flex h-[80px] w-full justify-center bg-white dark:bg-grey-08"
>
	<div class="relative flex h-full w-full max-w-[1200px] items-center justify-between px-5">
		<a href="/" class="font-spartan text-5xl font-bold text-purple dark:text-pink">seel</a>

		<div class="relative flex flex-shrink-0 items-center space-x-2">
			<button
				class="font-spartan text-2xl leading-none"
				on:click|preventDefault={() => (isMenuOpen = !isMenuOpen)}
			>
				Menu
			</button>
		</div>
		{#if isMenuOpen}
			<!-- content here -->
			<nav
				transition:slide
				class="absolute right-0 top-[80px] z-20 bg-white p-5 text-right text-xl shadow-08dp dark:bg-grey-08"
			>
				<ul class="space-y-2.5">
					<li class="">
						<DarkModeToggleButton on:toggle={() => (isMenuOpen = false)} />
					</li>
					<li class="">
						<a href="/">Home</a>
					</li>
					<li class="">
						<a href="/about">About</a>
					</li>
					<!-- <li class=''>Settings</li> -->
					<li class="">
						<!-- if logged in already -->
						<form action="/log-out" method="POST" use:enhance>
							<button type="submit">Sign Out</button>
						</form>

						<!-- if not logged in -->
					</li>
					<!-- else -->
					<li>
						<a href="/log-in">Log In</a>
					</li>

					<li>
						<a href="/sign-up">Sign Up</a>
					</li>
				</ul>
			</nav>
		{/if}
	</div>
</header>

<!-- {#if isMenuOpen}
	<Menu on:toggle={() => (isMenuOpen = false)}></Menu>
{/if} -->
