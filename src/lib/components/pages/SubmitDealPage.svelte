<script lang="ts">
	// your script goes here

	import Card from '../Card.svelte';
	import GridLayout from '../layouts/GridLayout.svelte';
</script>

<GridLayout columnSpacingClass="md:grid-cols-[40%_40%_20%] ">
	<div class="grid">
		<Card heading="Upload Documents" />
	</div>
	<div class="grid">
		<Card heading="Results" />
	</div>
	<!-- <div class="grid space-y-5 md:grid-rows-3">
		<div class="grid"><Card heading="Criteria Match" /></div>
		<div class="grid"><Card heading="Missing Information" /></div>
		<div class="grid"><Card heading="Existing Matches" /></div>
	</div> -->
</GridLayout>
