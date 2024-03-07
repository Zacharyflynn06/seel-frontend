<script>
	import { animatedTouchClasses } from '$lib/classes';

	import { themeStore } from '$lib/stores/themeStore';
	import MoonIcon from '../icons/MoonIcon.svelte';
	import SunIcon from '../icons/SunIcon.svelte';

	$: theme = $themeStore.theme;
</script>

<button
	on:click={() => {
		themeStore.toggle();
	}}
	class="text-pink {animatedTouchClasses} dark:hover:drop-shadow-pink"
>
	{#if theme === 'light'}
		<MoonIcon />
	{:else if theme === 'dark'}
		<SunIcon />
	{/if}
</button>
