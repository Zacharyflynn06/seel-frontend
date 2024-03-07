<script lang="ts">
	import Card from '../Card.svelte';

	// your script goes here

	import GridLayout from '../layouts/GridLayout.svelte';
</script>

<GridLayout columnSpacingClass="md:grid-cols-[40%_40%_20%]">
	<div class="grid">
		<Card heading="Pending Deal Review" />
	</div>
	<div class="grid grid-rows-3 space-y-5">
		<Card heading="Review Criteria" />
		<Card heading="Missing Information" />
		<Card heading="Contacts" />
	</div>
	<div class="grid grid-rows-2 space-y-5">
		<Card heading="Notes" />
		<Card heading="Team Chat" />
	</div>
</GridLayout>
