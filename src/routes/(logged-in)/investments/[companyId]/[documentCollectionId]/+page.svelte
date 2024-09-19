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
	import { ChatEventStore, SendMessageToChatStore } from '$houdini';
	import LineItem from '$lib/components/LineItem.svelte';
	import Typewriter from 'svelte-typewriter';

	export let data: PageData;
	export let form: ActionData;
	// your script goes here

	let loading = false;
	let chatLoading = false;

	let documentMetadataId = '';
	let userInput = '';

	let chatId = '';
	let answer = '';

	// let subscription = new ChatEventStore();
	let messageStore = new SendMessageToChatStore();

	const handleSendMessage = async () => {
		const sendMessageRes = await messageStore.mutate({ id: chatId, message: userInput });
		const sendMessageBody = await sendMessageRes.data?.sendMessageToChat;
		userInput = '';

		console.log({ sendMessageBody });
		if (sendMessageBody) {
			answer = sendMessageBody;
		}
	};

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
</script>

{#if documentCollection}
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

		<Card heading="Chat with {documentCollection?.name}">
			{#if !chatId}
				<!-- content here -->
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
				<TextInput
					bind:value={userInput}
					placeholder="Ask me about the documents in this collection"
					name="user_input"
				>
					<button
						type="submit"
						on:click={handleSendMessage}
						class=" {userInput && userInput.length > 4
							? 'text-purple dark:text-pink'
							: 'text-grey-08 dark:text-white/50'}"
					>
						{#if !chatLoading}
							<ArrowIcon className="h-6 w-6 " />
						{:else}
							<Spinner className="h-6 w-6 " />
						{/if}
					</button>
				</TextInput>

				<div class="w-full text-left">
					{#if answer}
						<Typewriter>
							{answer}
						</Typewriter>
					{/if}
				</div>
			{/if}
		</Card>
	</div>
{/if}
