<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ user } = data);
</script>

<div class="flex w-full flex-col items-center justify-center space-y-5">
	{#if user.investingEntities.length}
		<!-- content here -->
		{#each user.investingEntities as entity}
			<Card heading="Your Funds">
				{#each Object.entries(entity) as [k, v]}
					<p>{k}: {v}</p>
				{/each}
			</Card>
		{/each}
	{:else}
		<Card heading="Your Funds">Reach out to our admin team to get started</Card>
	{/if}

	<Card heading="Submit-Deals">
		<FileInput />
	</Card>
</div>
