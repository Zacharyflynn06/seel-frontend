<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';

	const sectionGridClasses = 'grid gap-5';
</script>

<div
	class="mb-[115px] grid h-[calc(100vh-5rem)] grid-cols-1 bg-off-white p-5 dark:bg-black md:mb-0 md:grid-cols-[25%_50%_25%]"
>
	<div class={sectionGridClasses + ' grid-rows-2  md:mr-5'}>
		<div class="grid space-y-5">
			<Card>
				<div class="grid justify-center space-y-4 text-center">
					<span class={cardHeadingClasses}>Deals to Review</span>
					<span class="font-spartan text-5xl font-extrabold text-light-purple">15</span>
					<input type="range" name="" id="" />
				</div>
			</Card>
			<Card>
				<div class="text-center text-sm">Submit a new deal</div>
			</Card>
		</div>

		<Card data={{ heading: 'Test Heading', body: 'Test Body' }} />
	</div>
	<div class={sectionGridClasses + ' grid-rows-3 md:mr-5'}>
		<Card data={{ heading: 'Pipeline', body: 'Test Body' }} />
		<Card data={{ heading: 'Quick Review', body: 'Test Body' }} />
		<Card data={{ heading: 'Reporting', body: 'Test Body' }} />
	</div>

	<div class={sectionGridClasses + ' grid-rows-2'}>
		<Card data={{ heading: 'Due Diligence', body: 'Test Body' }} />
		<Card data={{ heading: 'Quick Review', body: 'Test Body' }} />
	</div>
</div>
