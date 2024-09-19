<script lang="ts">
	import { enhance } from '$app/forms';
	import { X } from 'lucide-svelte';
	import SmallButton from './buttons/SmallButton.svelte';
	import TextAreaInput from './formComponents/TextAreaInput.svelte';
	import ToggleInput from './formComponents/ToggleInput.svelte';
	import { slide } from 'svelte/transition';

	export let criteriaObject;
	export let index;
	// your script goes here
	let isOpen = false;

	let loading = false;

	$: console.log({ isOpen });
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
		};
	}}
	action="?/save_criteria"
	method="POST"
	class="grid w-full cursor-pointer grid-cols-5 items-center border-b border-light-grey-01 py-3 text-left"
>
	<div>{criteriaObject.field.name}</div>

	{#if isOpen}
		<ToggleInput name="required" />
		<ToggleInput name="enabled" />
	{:else}
		<div>{criteriaObject.required}</div>
		<div>{criteriaObject.enabled}</div>
	{/if}
	<div>{criteriaObject.rules}</div>
	<div>
		<button
			class="rounded-sm bg-pink px-3 py-1 text-off-white shadow-md"
			on:click|preventDefault={() => (isOpen = !isOpen)}>Edit</button
		>
	</div>

	{#if isOpen}
		<div transition:slide class="col-span-3 grid py-5">
			<div class="w-full items-center space-y-5">
				<TextAreaInput
					label="Describe your custom criteria for {criteriaObject.field.name}"
					name="description"
					required
				/>
				<div class="flex w-1/2 gap-5">
					<SmallButton label="Save" type="submit" />
					<button type="button" on:click|preventDefault={() => (isOpen = false)}>Cancel</button>
				</div>
			</div>
		</div>
		<div class="col-span-1 grid py-5"></div>
	{/if}
</form>
