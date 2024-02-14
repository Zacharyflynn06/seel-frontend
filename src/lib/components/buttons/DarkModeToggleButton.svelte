<script>
	import { animatedTouchClasses } from '$lib/classes';

	import { themeStore } from '$lib/stores/themeStore';
	import MoonIcon from '../icons/MoonIcon.svelte';
	import SunIcon from '../icons/SunIcon.svelte';
</script>

<button
	on:click={() => {
		themeStore.toggle();
	}}
	class="text-pink {animatedTouchClasses} dark:hover:drop-shadow-pink"
>
	{#if $themeStore.theme === 'light'}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</button>
