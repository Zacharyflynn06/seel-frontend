<script lang="ts">
	import { page } from '$app/stores';
	import { AskCollectionStore } from '$houdini';
	import Card from '$lib/components/Card.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import Typewriter from 'svelte-typewriter';

	let loading = false;
	let userInput = '';
	let answer: string | undefined = '';
	async function handleSubmit(event: SubmitEvent) {
		console.log({ event });
		loading = true;
		if (!userInput) {
			loading = false;
			return;
		}

		try {
			let store = new AskCollectionStore();
			await store
				.fetch({ variables: { collectionName: $page.data.user.id, query: userInput } })
				.then((response) => {
					answer = response.data?.askCollection;
					loading = false;
				});
		} catch (error) {
			loading = false;
			console.log({ error });
		}
	}
	export let fileIsReady = false;
</script>

<!-- THIS IS A DEMO PAGE FOR NOW -->
<Card heading="Upload and Chat Demo">
	<FileInput bind:fileIsReady />
	{#if fileIsReady}
		<form
			on:submit|preventDefault={handleSubmit}
			class="flex h-full flex-col justify-center space-y-5 text-center"
		>
			<TextInput
				bind:value={userInput}
				bind:disabled={loading}
				placeholder="Ask your collection..."
				name="user_input"
			>
				<button
					type="submit"
					disabled={!userInput || loading}
					class=" {userInput && userInput.length > 4
						? 'text-purple dark:text-pink'
						: 'text-grey-08 dark:text-white/50'}"
				>
					{#if !loading}
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
		</form>
	{/if}
</Card>
