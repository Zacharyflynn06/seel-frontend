<script lang="ts">
	import { enhance } from '$app/forms';
	import { X } from 'lucide-svelte';
	import SmallButton from './buttons/SmallButton.svelte';
	import TextAreaInput from './formComponents/TextAreaInput.svelte';

	export let criteriaObject;
	export let index;
	// your script goes here
	let isOpen = false;

	let loading = false;

	$: console.log({ isOpen });
</script>

<div
	class="grid w-full cursor-pointer grid-cols-5 items-center border-b border-light-grey-01 text-left"
>
	<div class="py-2">{criteriaObject.field.name}</div>
	<div class="py-2">{criteriaObject.required}</div>
	<div class="py-2">{criteriaObject.enabled}</div>
	<div class="py-2">{criteriaObject.rules}</div>
	<div>
		<button class="rounded-sm bg-pink px-3 py-1 text-off-white" on:click={() => (isOpen = !isOpen)}
			>Edit</button
		>
	</div>

	{#if isOpen}
		<div class="col-span-3 grid py-5">
			<form
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						update();
						loading = false;
					};
				}}
				action="?/get_investment_rulset"
				method="POST"
				class="w-full items-center space-y-5"
			>
				<TextAreaInput
					label="Describe your custom criteria for {criteriaObject.field.name}"
					name="description"
					required
				/>
				<div class="flex w-1/2 gap-5">
					<SmallButton label="Save" type="submit" />
					<button type="button" on:click|preventDefault={() => (isOpen = false)}>Cancel</button>
				</div>
			</form>
		</div>
		<div class="col-span-1 grid py-5"></div>
	{/if}
</div>
