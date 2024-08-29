<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';

	import Card from '$lib/components/Card.svelte';
	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';
	import TextAreaInput from '$lib/components/formComponents/TextAreaInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import toast from 'svelte-french-toast';
	import type { PageData } from '../$types';
	import type { ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let isAddFieldFormLoading = false;

	$: fields = data.fields;

	$: console.log({ fields });
	$: if (form?.success) {
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}
</script>

<div class="flex w-full space-x-5">
	<Card heading="Add a new Field">
		<form
			use:enhance={() => {
				isAddFieldFormLoading = true;
				return async ({ update }) => {
					update();
					isAddFieldFormLoading = false;
				};
			}}
			action="?/add_field"
			method="POST"
			class="space-y-5"
		>
			<TextInput label="Field Name" name="name" type="text" required></TextInput>
			<TextAreaInput label="Field Description" name="description" required></TextAreaInput>

			<SelectInput name="fieldTypeId" label="Field Type">
				<option value="89235b15-2e64-4b0c-8ae6-52a00ab758de">String</option>
				<option value="1adf9bfa-1b78-483e-abd2-221f2abc19bb">Percentage</option>
				<option value="534f7a16-0294-4684-994a-9e8668062638">Currency</option>
				<option value="2a7c7c6d-8b9b-4bce-a6ce-f14732b62c65">Number</option>
			</SelectInput>

			<SmallButton type="submit" label="Add Field" loading={isAddFieldFormLoading}></SmallButton>
		</form>
	</Card>

	<Card heading="Manage Fields">
		{#each fields as field}
			<div class="mb-5">
				<h3 class="text-lg font-bold">{field.name}</h3>
				<p class="text-sm">{field.description}</p>
			</div>
		{/each}
	</Card>
</div>
