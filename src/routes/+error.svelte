<script lang="ts">
	import { page } from '$app/stores';
	import SeelIcon from '$lib/components/icons/SeelIcon.svelte';
</script>

<div class="gradient-animation grid h-screen w-full items-center justify-center">
	<div class="flex flex-col items-center justify-center space-y-5">
		<SeelIcon className="h-[15rem] w-[15rem] text-off-white" />
		<div class="font text-center font-spartan text-2xl text-white">
			<h1 class="text-5xl">We're Sorry!</h1>
			<h1>Something Went Wrong</h1>

			<p>{$page.status ? $page.status : ''} - {$page.error?.message}</p>
		</div>
	</div>
</div>
