<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { ActionData } from '../$types';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import { page } from '$app/stores';
	export let data: PageData;
	export let form: ActionData;
	// your script goes here

	let loading = false;
	let documentMetadataId = '';

	console.log({ data });
	$: userId = data.user.id;

	$: investingEntityId = data.investingEntityId;
	$: companyId = data.companyId;
	$: documentCollection = data.documentCollection;
</script>

{#if documentCollection}
	<Card heading="Add a new file to {documentCollection?.name}" className="mb-5">
		<FileInput
			{userId}
			{investingEntityId}
			{companyId}
			bind:upsertDocumentMetadataId={documentMetadataId}
		></FileInput>
		<!-- content here -->
		<form
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					update();
					loading = false;
				};
			}}
			action="?/add_new_document"
			method="POST"
			class="space-y-5"
		>
			<input type="hidden" name="documentMetadataId" value={documentCollection.id} />
			<input type="hidden" name="companyId" value={documentMetadataId} />
			<SmallButton
				type="submit"
				disabled={!documentMetadataId}
				label="Save Document to Collection"
				{loading}
			></SmallButton>
		</form>
	</Card>

	<Card heading="{documentCollection?.name}'s Document Collections">
		{#each documentCollection.documents as document}
			<div in:fly={{ y: 20 }} out:slide class="flex w-full space-y-5">
				<!-- this is the roundabout way we are getting the company name for now -->
				<a
					href="/dashboard/{investingEntityId}/{companyId}/{documentCollection.id}"
					class="flex w-full items-center justify-between"
				>
					<div class="flex text-lg">
						Document: {document.name}
					</div>
				</a>
			</div>
		{:else}
			<p>No documents added yet, add one above!</p>
		{/each}
	</Card>
{/if}
