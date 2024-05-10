<script lang="ts">
	import Card from '../Card.svelte';

	import GridLayout from '../layouts/GridLayout.svelte';
	export let data;
</script>

<!-- <GridLayout columnSpacingClass="md:grid-cols-[40%_40%_20%] overflow-hidden"> -->
<div class="grid max-h-[calc(100vh-6rem)]">
	<Card heading="Pending Deal Review" className="overflow-scroll"></Card>
	<!-- </div>
	<div class="grid grid-rows-3 space-y-5">
		<Card heading="Review Criteria" />
		<Card heading="Missing Information" />
		<Card heading="Contacts" />
	</div>
	<div class="grid grid-rows-2 space-y-5">
		<Card heading="Notes" />
		<Card heading="Team Chat" />
	</div> -->
</div>
<!-- </GridLayout> -->
