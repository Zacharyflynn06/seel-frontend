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
	import DoughnutChart from '$lib/components/DoughnutChart.svelte';
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

	$: console.log({ data });
	$: company = data.company;
	$: investingEntity = data.investingEntity;
	$: validateCompany = data.validateCompany;

	$: percentage = validateCompany.filter((c) => c.status).length / validateCompany.length;
</script>

{#if company}
	<h1 class="text-5xl">{company?.attributes[0].stringValue}</h1>

	<div class="flex space-x-5">
		<div class="w-1/2 space-y-5">
			<Card heading="Criteria Match - {percentage * 100}%">
				<div class=" flex w-full justify-center">
					<DoughnutChart {percentage} />
				</div>
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

		<Card heading="Review Criteria" className="space-y-5 h-full">
			<table class="w-full">
				<thead>
					<tr>
						<th>Criteria</th>
						<th>Met</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each validateCompany as criteria}
						<tr>
							<td>{criteria.field.name}</td>
							<td>
								{#if criteria.status}
									<span class="text-green">True</span>
								{:else}
									<span class="text-red">False</span>
								{/if}
							</td>
						</tr>
						<hr />
					{/each}
				</tbody>
			</table>
		</Card>
	</div>
{/if}
