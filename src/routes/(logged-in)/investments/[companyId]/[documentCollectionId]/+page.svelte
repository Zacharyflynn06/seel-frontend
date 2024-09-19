<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { ActionData } from '../$types';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import toast from 'svelte-french-toast';
	import LineItem from '$lib/components/LineItem.svelte';
	import Typewriter from 'svelte-typewriter';

	export let data: PageData;
	export let form: ActionData;
	// your script goes here

	let loading = false;
	let chatLoading = false;
	let isSendMessageLoading = false;

	let documentMetadataId = '';
	let userInput = '';

	let chatId = '';
	let answer = [];

	let conversation = [
		{
			question: 'What is this?',
			answer: 'Hi, I am Seel. How can I help you today?'
		},

		{
			question: 'What do you do?',
			answer: 'I help companies with due diligence and other tasks related to M&A.'
		},
		{
			question: 'How do you do it?',
			answer:
				'I use AI and machine learning to help with tasks such as document analysis, data extraction, and data cleaning.'
		},
		{
			question: 'How does it work?',
			answer:
				'I use natural language processing to understand the text in documents and I can also extract data from tables and charts.'
		}
	];

	$: userId = data.user.id;
	$: investingEntityId = data.investingEntity.id;
	$: companyId = data.companyId;
	$: documentCollection = data.documentCollection;

	$: if (form?.error) {
		toast.error('Something went wrong', { position: 'bottom-center' });
	}

	$: if (form?.chatId) {
		chatId = form.chatId;
		console.log({ chatId });
	}

	$: if (form?.answer) {
		const lastEntry = conversation[conversation.length - 1];
		lastEntry.answer = form.answer;
		conversation = [...conversation];
		userInput = '';
		isSendMessageLoading = false;
	}
</script>

{#if documentCollection}
	<div class="flex space-x-5">
		<div class="space-y-5">
			<Card heading="Add a new file to {documentCollection?.name}" className="mb-5">
				<FileInput
					{userId}
					{investingEntityId}
					{companyId}
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

			<Card heading="{documentCollection?.name}'s Documents">
				<div class="space-y-5">
					{#each documentCollection.documents as document}
						<!-- this is the roundabout way we are getting the company name for now -->
						<div in:fly={{ y: 20 }} out:slide class="flex w-full divide-y">
							<a
								href="/dashboard/{investingEntityId}/{companyId}/{documentCollection.id}"
								class="flex w-full items-center justify-between"
							>
								<LineItem>
									Document: {document.name}
								</LineItem>
							</a>
						</div>
					{:else}
						<p>No documents added yet, add one above!</p>
					{/each}
				</div>
			</Card>
		</div>
		{#if documentCollection.documents.length > 0}
			<Card heading="Chat with the document collection" className="space-y-5">
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
						<input type="hidden" name="companyId" value={companyId} />
						<input type="hidden" name="userId" value={userId} />
						<input type="hidden" name="investingEntityId" value={investingEntityId} />
						<SmallButton type="submit" label="Start Chat" loading={chatLoading}></SmallButton>
					</form>
				{:else}
					{#if conversation}
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
							};
						}}
						action="?/send_message"
						method="POST"
					>
						<input type="hidden" name="chatId" value={chatId} />
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
