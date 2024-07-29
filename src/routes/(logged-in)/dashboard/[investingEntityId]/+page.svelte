<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: ({ investingEntity } = data);

	$: console.log('companies', investingEntity.companies);
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
</script>

<Card heading="{investingEntity?.name}'s Companies">
	{#if investingEntity}
		{#each investingEntity.companies as company}
			<div class="mb-5">
				{#each company.attributes as attribute}
					<div>Company: {attribute.value.stringValue}</div>

					<!-- <TextInput
						label={capitalizeFirstLetter(attribute.field.name)}
						name={attribute.field.name}
						type="text"
						placeholder={attribute.field.description}
						value={attribute.value.stringValue}
					></TextInput> -->
				{/each}
			</div>
		{/each}
		<h2>Add New Company</h2>
		<form use:enhance action="?/add_new_company" method="POST" class="space-y-5">
			<TextInput label="Company Name" name="company_name" type="text"></TextInput>
			<input type="hidden" name="investingEntityId" value={investingEntity.id} />
			<SmallButton type="submit">Submit</SmallButton>
		</form>
	{/if}
</Card>
