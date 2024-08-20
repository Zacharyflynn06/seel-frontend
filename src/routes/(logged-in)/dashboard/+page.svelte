<script lang="ts">
	import { flexCenter } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import RectangleGroupIcon from '$lib/components/icons/RectangleGroupIcon.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ user } = data);
</script>

<div class="flex w-full flex-col items-center justify-center space-y-5">
	{#if user?.investingEntities?.length}
		<Card heading="Your Funds">
			<div class="space-y-5">
				{#each user.investingEntities as entity}
					<a href="/dashboard/{entity.id}" class="flex items-center space-x-2">
						<div class="h-10 w-10 rounded-full bg-pink {flexCenter}"><RectangleGroupIcon /></div>
						<div class="block">{entity.name}</div>
					</a>
				{/each}
			</div>
		</Card>
	{:else}
		<Card heading="Your Funds">Reach out to our admin team to get started</Card>
	{/if}
</div>
