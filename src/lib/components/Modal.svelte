<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		if (browser) {
			document.body.style.overflow = 'hidden';
		}
	});
	onDestroy(() => {
		if (browser) {
			document.body.style.overflow = '';
		}
	});
</script>

<div
	transition:fade
	on:close
	class="h-full w-full bg-off-white p-6 shadow-08dp md:h-fit md:max-w-[400px] md:rounded-lg"
>
	<slot />
</div>
