<script lang="ts">
	import { mainPanelWidth } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
</script>

<main
	class="mb-[7rem] grid h-[calc(100vh-80px)] gap-5 bg-off-white p-5 md:mb-0 md:ml-[10rem] md:{mainPanelWidth} md:grid-cols-4 dark:bg-black"
>
	<div class="grid h-full gap-4">
		<Card>
			<div class="grid h-fit justify-center gap-4 text-center">
				<span>Deals to Review</span>
				<span class="font-spartan text-8xl font-extrabold text-light-purple">15</span>
				<span></span>
			</div>
		</Card>
		<Card>
			<div class="h-2 text-center font-extrabold">Submit a new deal</div>
		</Card>
		<Card data={{ heading: 'Test Heading', body: 'Test Body' }} />
	</div>
</main>
