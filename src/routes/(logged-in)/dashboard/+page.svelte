<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { AskCollectionStore } from '$houdini';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ user } = data);
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
</script>

<div>
	<Card heading="Add Company">
		<form use:enhance action="?/add_company" method="POST" class="space-y-5">
			<TextInput name="company_name" label="Company Name" />
			<SmallButton type="submit">Submit</SmallButton>
		</form>
	</Card>
</div>

<div class="flex w-full flex-col items-center justify-center space-y-5">
	{#each user.investingEntities as entity}
		<Card heading="Your Funds">
			{#each Object.entries(entity) as [k, v]}
				<p>{k}: {v}</p>
			{/each}
		</Card>
	{/each}

	<Card heading="Submit-Deals">
		<FileInput />
	</Card>
</div>
