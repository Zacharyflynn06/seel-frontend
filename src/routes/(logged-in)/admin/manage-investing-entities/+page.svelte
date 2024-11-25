<!-- <script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: users = data.users?.sort((a, b) => (a.email > b.email ? 1 : -1));
	$: entities = data.entities?.sort((a, b) => (a.name > b.name ? 1 : -1));
</script>

<div class="flex w-full flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
	<div class="flex w-full flex-col space-y-5 lg:w-1/3">
		<Card heading="Add New Investing Entity">
			<form class="space-y-5" use:enhance action="?/add_investing_entity" method="POST">
				<TextInput name="name" label="Name" />
				<TextInput name="address" label="Address" />

				<SelectInput name="entityType" label="Entity Type">
					{#each Object.entries(InvestingEntityType) as [k, v]}
						<option value={v}>{k}</option>
					{/each}
				</SelectInput>

				<SelectInput name="strategy" label="Strategy">
					{#each Object.entries(InvestingEntityStrategy) as [k, v]}
						<option value={v}>{k}</option>
					{/each}
				</SelectInput>

				<SmallButton type="submit">Submit</SmallButton>
			</form>
		</Card>

		<Card heading="Link Entity and User">
			<form class="space-y-5" use:enhance action="?/link_entity_and_user" method="POST">
				<TextInput name="entity_id" label="Entity ID" />
				<TextInput name="user_id" label="User ID" />
				<SmallButton type="submit">Submit</SmallButton>
			</form>
		</Card>
	</div>

	<Card heading="Investing Entities" className="w-full lg:w-1/3">
		<div>
			{#each entities as entity}
				{#if entity.name && entity.id}
					<dl class="divide-y divide-black">
						<div class="px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-0">
							<dt class=" font-bold leading-6">{entity.name}</dt>
							<dd class="mt-1 text-sm leading-6 text-grey-08 sm:col-span-2 sm:mt-0">
								ID: {entity.id}
							</dd>
							<ul class="list-disc">
								Users:
								{#each entity.users as entityUser}
									<li class="ml-5">{entityUser.email}</li>
								{/each}
							</ul>
						</div>
					</dl>
				{/if}
			{/each}
		</div>
	</Card>

	<Card heading="Users" className="w-full lg:w-1/3">
		{#each users as user}
			{#if user.email && user.id}
				<dl class="divide-y divide-light-grey-01">
					<div class="px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-0">
						<dt class="text-sm font-bold leading-6">{user.email}</dt>
						<dd class="mt-1 text-sm leading-6 text-grey-08 sm:col-span-2 sm:mt-0">
							{user.id}
						</dd>
					</div>
				</dl>
			{/if}
		{:else}
			...loading
		{/each}
	</Card>
</div> -->
