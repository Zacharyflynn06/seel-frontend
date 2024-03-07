<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import GridLayout from '../layouts/GridLayout.svelte';
</script>

<GridLayout>
	<div class="grid gap-5 md:grid-rows-2">
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

		<Card heading="Documents" />
	</div>
	<div class="grid gap-5 md:grid-rows-3">
		<Card heading="Pipeline" />
		<Card heading="Quick Review" />
		<Card heading="Reporting" />
	</div>

	<div class="grid gap-5 md:grid-rows-2">
		<Card heading="Due Diligence" />
		<Card heading="How Can I Help?" />
	</div>
</GridLayout>
