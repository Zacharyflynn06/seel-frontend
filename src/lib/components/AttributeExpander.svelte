<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from './buttons/SmallButton.svelte';
	import TextAreaInput from './formComponents/TextAreaInput.svelte';
	import ToggleInput from './formComponents/ToggleInput.svelte';
	import { slide } from 'svelte/transition';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore';
	export let criteriaObject;
	export let index;
	// your script goes here
	let isOpen = false;

	let loading = false;

	console.log(criteriaObject.rules);
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
			isOpen = false;
		};
	}}
	action="?/save_criteria"
	method="POST"
	class="w-full cursor-pointer grid-cols-6 items-center border-b border-light-grey-01 py-3 text-left md:grid"
>
	<input type="hidden" name="investing_entity_id" value={$selectedEntityStore} />
	<input type="hidden" name="field_id" value={criteriaObject.field.id} />
	<div class="font-bold">{criteriaObject.field.name}</div>

	{#if isOpen}
		<div class="flex space-x-2">
			<ToggleInput name="required" bind:value={criteriaObject.required} />
			<div>Required</div>
		</div>

		<ToggleInput name="enabled" bind:value={criteriaObject.enabled} />
	{:else}
		<div class="flex space-x-2">
			<div class="md:hidden">Required:</div>
			<div>{criteriaObject.required}</div>
		</div>
		<div class="flex space-x-2">
			<div class="md:hidden">Enabled:</div>
			<div>{criteriaObject.enabled}</div>
		</div>
	{/if}
	<div class="flex space-x-2">
		<div class="md:hidden">Rules:</div>
		<div>{!!criteriaObject.rules}</div>
	</div>
	<div class="flex space-x-2">
		<div class="md:hidden">Field Type:</div>
		<div>{criteriaObject.field.fieldType.name}</div>
	</div>

	<div>
		<button
			class="rounded-sm bg-pink px-3 py-1 text-off-white shadow-md"
			on:click|preventDefault={() => (isOpen = !isOpen)}>{isOpen ? 'Close' : 'Edit'}</button
		>
	</div>

	{#if isOpen}
		<div in:slide class="col-span-3 grid py-5">
			<div class="w-full items-center space-y-5">
				<TextAreaInput
					label="Describe your custom criteria for {criteriaObject.field.name}"
					name="user_criteria_input"
				/>
				<div class="flex w-1/2 gap-5">
					<SmallButton label="Save" type="submit" {loading} />
					<button type="button" on:click|preventDefault={() => (isOpen = false)}>Cancel</button>
				</div>
			</div>
		</div>
		<div class="col-span-1 grid py-5"></div>
	{/if}
</form>
