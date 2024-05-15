<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';
	import DarkModeToggleButton from '../buttons/DarkModeToggleButton.svelte';
	import { animatedTouchClasses } from '$lib/classes';

	export let isMenuOpen = false;
</script>

<nav
	transition:slide
	class="absolute right-0 top-[80px] z-20 bg-white p-5 dark:bg-grey-08 sm:top-[80px]"
>
	<ul class="space-y-2.5">
		<li class={animatedTouchClasses}>
			<DarkModeToggleButton on:toggle={() => (isMenuOpen = false)} />
		</li>
		<li class={animatedTouchClasses}>
			<a href="/">Home</a>
		</li>
		<li class={animatedTouchClasses}>
			<a href="/about">About</a>
		</li>
		<!-- <li class={animatedTouchClasses}>Settings</li> -->
		<li class={animatedTouchClasses}>
			<form action="/log-out" method="POST" use:enhance>
				<button type="submit">Sign Out</button>
			</form>
		</li>
	</ul>
</nav>
