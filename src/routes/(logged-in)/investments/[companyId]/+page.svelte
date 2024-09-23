<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import LineItem from '$lib/components/LineItem.svelte';
	import toast from 'svelte-french-toast';
	import DoughnutChart from '$lib/components/DoughnutChart.svelte';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;
	let chatLoading = false;
	let isSendMessageLoading = false;

	let documentMetadataId = '';
	let userInput = '';

	let chatId = '';
	let answer = [];

	let conversation = [];

	$: if (form?.error) {
		toast.error('Something went wrong', { position: 'top-center' });
	}

	$: if (form?.chatId && !chatId) {
		chatId = form.chatId;
		console.log({ chatId });
	}

	$: if (form?.answer) {
		console.log({ answer: form.answer });
		const lastEntry = conversation[conversation.length - 1];
		lastEntry.answer = form.answer;
		conversation = [...conversation];
		userInput = '';
		isSendMessageLoading = false;
		form.answer = '';
	}

	$: company = data.company;
	$: investingEntity = data.investingEntity;
	$: validateCompany = data.validateCompany;
	$: userId = data.user.id;

	$: investingEntityId = data.investingEntity.id;
	$: documentCollection = company.documentCollections[0];
	$: percentage = validateCompany.filter((c) => c.status).length / validateCompany.length;
</script>

{#if company}
	<h1 class="mb-5 text-3xl md:text-5xl">{company?.attributes[0].stringValue}</h1>

	<div class="flex flex-col space-y-5 md:flex-row md:space-x-5">
		<div class="w-full space-y-5 md:w-1/2">
			<Card heading="Criteria Match - {percentage * 100}%">
				<div class=" flex w-full justify-center">
					<DoughnutChart {percentage} />
				</div>
			</Card>

			<Card heading="Review Criteria" className="space-y-5 h-fit">
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

		{#if documentCollection}
			<div class="space-y-5 md:w-1/2">
				<Card heading="Add a new file" className="mb-5">
					<FileInput
						{userId}
						{investingEntityId}
						companyId={company.id}
						bind:upsertDocumentMetadataId={documentMetadataId}
					></FileInput>
					<form
						use:enhance={() => {
							loading = true;
							return async ({ update }) => {
								update();
								loading = false;
							};
						}}
						action="?/save_document_to_collection"
						method="POST"
						class="space-y-5"
					>
						<input type="hidden" name="documentCollectionId" value={documentCollection.id} />
						<input type="hidden" name="documentMetadataId" value={documentMetadataId} />
						<SmallButton
							type="submit"
							disabled={!documentMetadataId}
							label="Save Document to Collection"
							{loading}
						></SmallButton>
					</form>
				</Card>

				<Card heading="{company?.attributes[0].stringValue}'s Documents">
					<div class="space-y-5">
						{#each documentCollection.documents as document}
							<!-- this is the roundabout way we are getting the company name for now -->
							<div in:fly={{ y: 20 }} out:slide class="flex w-full divide-y">
								<a
									href="/dashboard/{investingEntity.id}/{company.id}/{documentCollection.id}"
									class="flex w-full items-center justify-between"
								>
									<LineItem>
										{document.name}
									</LineItem>
								</a>
							</div>
						{:else}
							<p>No documents added yet, add one above!</p>
						{/each}
					</div>
				</Card>

				{#if documentCollection.documents.length > 0}
					<Card heading="Chat with the documents" className="space-y-5">
						{#if !chatId}
							<form
								use:enhance={() => {
									chatLoading = true;
									return async ({ update }) => {
										update();
										chatLoading = false;
									};
								}}
								action="?/start_chat"
								method="POST"
							>
								<input type="hidden" name="documentCollectionId" value={documentCollection.id} />
								<input type="hidden" name="companyId" value={company.id} />
								<input type="hidden" name="userId" value={userId} />
								<input type="hidden" name="investingEntityId" value={investingEntityId} />
								<SmallButton type="submit" label="Start Chat" loading={chatLoading}></SmallButton>
							</form>
						{:else}
							{#if conversation.length > 0}
								<div class="mt-5 w-full space-y-5 rounded-md bg-white p-5 shadow-md">
									{#each conversation as message}
										{#if message.question}
											<div transition:slide class="flex w-full justify-end">
												<p class="w-fit rounded-lg bg-pink px-3 py-1.5 text-right text-white">
													{message.question}
												</p>
											</div>
										{/if}
										{#if message.answer}
											<div transition:slide class="flex w-full justify-start">
												<p class="w-fit rounded-lg bg-purple px-3 py-1.5 text-left text-white">
													{message.answer}
												</p>
											</div>
										{/if}
									{/each}
								</div>
							{/if}
							<form
								use:enhance={() => {
									isSendMessageLoading = true;
									conversation = [...conversation, { question: userInput, answer: '' }];
									return async ({ update }) => {
										update();
										isSendMessageLoading = false;
									};
								}}
								action="?/send_message"
								method="POST"
							>
								<input type="hidden" name="chat_id" value={chatId} />
								<TextInput
									bind:value={userInput}
									placeholder="Ask me about the documents in this collection"
									name="user_input"
								>
									<button
										type="submit"
										disabled={!userInput || isSendMessageLoading}
										class=" {userInput && userInput.length > 4 ? 'text-pink' : 'text-purple'}"
									>
										{#if !isSendMessageLoading}
											<ArrowIcon className="h-6 w-6 " />
										{:else}
											<Spinner className="h-6 w-6 " />
										{/if}
									</button>
								</TextInput>
							</form>
						{/if}
					</Card>
				{/if}
			</div>
		{/if}
	</div>
{/if}
