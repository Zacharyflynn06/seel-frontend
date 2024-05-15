<script lang="ts">
	import SeelIcon from './icons/SeelIcon.svelte';

	export let label = '';
</script>

<div class="sm:gradient-animation grid h-screen w-full items-center pt-[80px]">
	<div
		class="m-auto h-full w-full bg-off-white p-10 shadow-08dp dark:bg-off-black md:h-fit md:max-w-[400px] md:rounded-2xl"
	>
		<div class="flex w-full items-center justify-center">
			<SeelIcon className="h-[10rem] w-[10rem] text-purple dark:text-off-white" />
		</div>

		<h1>{label}</h1>

		<slot />
	</div>
</div>
