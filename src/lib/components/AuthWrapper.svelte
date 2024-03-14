<script lang="ts">
	import { fade } from 'svelte/transition';
	import SeelIcon from './icons/SeelIcon.svelte';

	export let label = '';
</script>

<div class="gradient-animation fixed inset-0 grid">
	<div
		transition:fade
		on:close
		class="m-auto h-full w-full bg-off-white p-10 shadow-08dp md:h-fit md:max-w-[400px] md:rounded-2xl"
	>
		<div class="flex w-full items-center justify-center">
			<SeelIcon className="h-[10rem] w-[10rem] text-purple" />
		</div>

		<h1 class="text-2xl font-bold">{label}</h1>

		<slot />
	</div>
</div>
