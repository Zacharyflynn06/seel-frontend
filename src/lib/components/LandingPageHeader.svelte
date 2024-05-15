<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';
	import SmallButton from './buttons/SmallButton.svelte';
	import Menu from './nav/Menu.svelte';

	let isMenuOpen = false;
</script>

<header class="fixed inset-0 h-16 w-full bg-off-white transition-all ease-linear dark:bg-off-black">
	<div class="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-5">
		<a href="/" class="font-spartan text-4xl font-bold text-purple dark:text-pink">seel</a>
		<div>
			<!-- intentionally empty -->
		</div>
		<div class="flex items-end space-x-5">
			<a href="/about">About</a>
			<DarkModeToggleButton />

			{#if $page.url.pathname === '/log-in'}
				<a href="/sign-up">
					<SmallButton label="Sign up" />
				</a>
			{:else}
				<!-- todo: check if user is logged in -->
				<a href="/log-in">
					<SmallButton label="Log in" />
				</a>
			{/if}
		</div>
	</div>
</header>

{#if isMenuOpen}
	<Menu></Menu>
{/if}
