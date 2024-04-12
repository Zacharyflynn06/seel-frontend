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
	class="m-auto rounded-full text-pink"
>
	{#if theme === 'light'}
		<MoonIcon />
	{:else if theme === 'dark'}
		<SunIcon />
	{/if}
</button>
