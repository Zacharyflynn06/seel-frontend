<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import ManageDocumentCollectionForm from './ManageDocumentCollectionForm.svelte';
	import type { ActionData } from '../$types';
	import RectangleGroupIcon from '$lib/components/icons/RectangleGroupIcon.svelte';
	import { flexCenter } from '$lib/classes';
	import LineItem from '$lib/components/LineItem.svelte';
	export let data: PageData;
	export let form: ActionData;
	// your script goes here

	let loading = false;

	console.log({ data });
	$: company = data.company;
	$: investingEntityId = data.investingEntityId;
</script>

{#if company}
	<div class="space-y-5">
		<Card heading="{company?.attributes[0].stringValue}'s Document Collections">
			<div class="divide-y">
				{#each company.documentCollections as documentCollection}
					<div in:fly={{ y: 20 }} out:slide class="flex w-full py-5">
						<!-- this is the roundabout way we are getting the company name for now -->
						<a
							href="/dashboard/{investingEntityId}/{company.id}/{documentCollection.id}"
							class="flex w-full items-center justify-between"
						>
							<div class="flex items-center space-x-5 text-lg">
								<LineItem>
									{documentCollection.name}
								</LineItem>
							</div>
						</a>

						<ManageDocumentCollectionForm {documentCollection} />
					</div>
				{:else}
					<p>No document collections added yet, add one above!</p>
				{/each}
			</div>
		</Card>

		<Card heading="Add a new document collection to {company?.attributes[0].stringValue ?? ''}">
			<form
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						update();
						loading = false;
					};
				}}
				action="?/add_new_document_collection"
				method="POST"
				class="space-y-5"
			>
				<TextInput
					label="Document Collection Name"
					name="documentCollectionName"
					type="text"
					required
				></TextInput>
				<input type="hidden" name="investingEntityId" value={investingEntityId} />
				<input type="hidden" name="companyId" value={company.id} />
				<SmallButton type="submit" label="Add Document Collection" {loading}></SmallButton>
			</form>
		</Card>
	</div>
{/if}
