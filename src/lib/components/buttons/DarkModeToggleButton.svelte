<script type="ts">
	import { themeStore } from '$lib/stores/themeStore';
	import { createEventDispatcher } from 'svelte';
	import MoonIcon from '../icons/MoonIcon.svelte';
	import SunIcon from '../icons/SunIcon.svelte';

	export let sizeClasses = 'w-6 h-6';

	const dispatch = createEventDispatcher();
</script>

<button
	on:click={() => {
		themeStore.toggle();
		dispatch('toggle');
	}}
	class="m-auto flex items-center rounded-full"
>
	{#if $themeStore.theme === 'light'}
		<MoonIcon className={sizeClasses + ' text-purple'} />
	{:else}
		<SunIcon className={sizeClasses + ' text-pink'} />
	{/if}
</button>
