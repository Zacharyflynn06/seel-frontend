<script type="ts">
	import { themeStore } from '$lib/stores/themeStore';
	import MoonIcon from '../icons/MoonIcon.svelte';
	import SunIcon from '../icons/SunIcon.svelte';
</script>

<button
	on:click={() => {
		themeStore.toggle();
	}}
	class="m-auto rounded-full text-pink"
>
	{#if $themeStore.theme === 'light'}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</button>
