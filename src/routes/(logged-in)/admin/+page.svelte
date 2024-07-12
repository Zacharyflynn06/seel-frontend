<script lang="ts">
	import { enhance } from '$app/forms';

	// your script goes here

	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	// upsertInvestingEntity(input: {address: "", entityType: FUND, id: "", strategy: VENTURE_CAPITAL, name: ""})
</script>

<Card heading="Add Investing Entity" className="w-full h-full">
	<form use:enhance action="?/add_investing_entity" method="POST">
		<TextInput name="name" label="name" />
		<TextInput name="address" label="Address" />
	</form>
</Card>
