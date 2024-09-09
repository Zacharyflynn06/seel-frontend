<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import LineItem from '$lib/components/LineItem.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ user } = data);
</script>

<div class="flex w-full flex-col items-center justify-center space-y-5">
	{#if user?.investingEntities?.length}
		<Card heading="Your Funds">
			<div class="divide-y">
				{#each user.investingEntities as entity}
					<div>
						<a href="/dashboard/{entity.id}" class="flex items-center space-x-2 py-5">
							<LineItem>{entity.name}</LineItem>
						</a>
					</div>
				{/each}
			</div>
		</Card>
	{:else}
		<Card heading="Your Funds">Reach out to our admin team to get started</Card>
	{/if}
</div>
