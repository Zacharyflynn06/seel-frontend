<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import LineItem from '$lib/components/LineItem.svelte';
	import ManageDocumentCollectionForm from '$lib/components/formComponents/ManageDocumentCollectionForm.svelte';
	import toast from 'svelte-french-toast';
	export let data: PageData;
	export let form: ActionData;

	let loading = false;

	$: if (form?.success) {
		console.log('success', form);
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}

	console.log({ data });
	$: company = data.company;
	$: investingEntity = data.investingEntity;
</script>

{#if company}
	<div class="space-y-5">
		<Card heading="{company?.attributes[0].stringValue}'s Details">
			<div class="divide-y">TODO: add company details and attributes.</div>
		</Card>
		<Card
			heading="{company?.attributes[0].stringValue}'s Document Collections"
			className="space-y-5"
		>
			{#each company.documentCollections as documentCollection}
				<div in:fly={{ y: 20 }} out:slide class="flex w-full py-5">
					<a
						href="/investments/{company.id}/{documentCollection.id}"
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
				<p>No document collections added yet, add one below!</p>
			{/each}

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
				<input type="hidden" name="investingEntityId" value={investingEntity.id} />
				<input type="hidden" name="companyId" value={company.id} />
				<SmallButton type="submit" label="Add Document Collection" {loading}></SmallButton>
			</form>
		</Card>
	</div>
{/if}
