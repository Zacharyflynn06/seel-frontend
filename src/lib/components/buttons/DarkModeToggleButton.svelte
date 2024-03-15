<script type="ts">
	import { themeStore } from '$lib/stores/themeStore';
	import MoonIcon from '../icons/MoonIcon.svelte';
	import SunIcon from '../icons/SunIcon.svelte';

	$: theme = $themeStore.theme;
</script>

<button
	on:click={() => {
		themeStore.toggle();
	}}
	class="hover: text-pink hover:scale-105 hover:drop-shadow-lg active:scale-95"
>
	{#if theme === 'light'}
		<MoonIcon />
	{:else if theme === 'dark'}
		<SunIcon />
	{/if}
</button>
