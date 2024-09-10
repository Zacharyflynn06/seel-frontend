<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';
	import toast from 'svelte-french-toast';
	import ManageCompanyForm from './ManageCompanyForm.svelte';
	import { page } from '$app/stores';
	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';
	export let data: PageData;
	export let form: ActionData;

	let currentInvestingEntity = data.user.investingEntities[0];

	let loading = false;

	$: if (form?.success) {
		console.log('success', form);
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}

	$: user = data.user;

	function formatTitleFromPath(path: string) {
		return path
			.split('/')
			.map((p) => p.replace(/-/g, ' ').replace(/(^|\s)\S/g, (l) => l.toUpperCase()))
			.join(' ');
	}

	function handleChangeInvestingEntity(event) {
		currentInvestingEntity = data.user.investingEntities.filter(
			(entity) => entity.id === event.target.value
		);
	}
</script>

<div class="space-y-5">
	<!-- this is the header bar with the title and dropdown for the investing entity -->
	<div class="flex items-end justify-between">
		<h1>{formatTitleFromPath($page.url.pathname)}</h1>

		<div class="flex items-end space-x-5">
			<span class="inline-flex font-spartan uppercase tracking-widest">Investing Entity</span>
			{#if user && user.investingEntities}
				<SelectInput name="investingEntity" on:change={handleChangeInvestingEntity}>
					{#each user.investingEntities as entity}
						<option value={entity.id}>{entity.name}</option>
					{/each}
				</SelectInput>
			{/if}
		</div>
	</div>
	<Card heading="{currentInvestingEntity.name}'s Investments">
		{#if currentInvestingEntity}
			<div class="divide-y">
				{#each currentInvestingEntity.companies as company (company.id)}
					<div in:fly={{ y: 20 }} out:slide class="flex w-full py-5">
						{#each company.attributes as attribute}
							<a href="/investments/{company.id}" class="flex w-full items-center justify-between">
								<div class="flex w-full items-center justify-between space-x-5 text-lg">
									{attribute.stringValue}
								</div>
							</a>
							<ManageCompanyForm {company} />
						{/each}
					</div>
				{:else}
					<p>No ivestments yet, add one below!</p>
				{/each}
			</div>
		{/if}
	</Card>
	<Card heading="Add a new investment to {currentInvestingEntity?.name}" className="mb-5">
		<form
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					update();
					loading = false;
				};
			}}
			action="?/add_new_company"
			method="POST"
			class="space-y-5"
		>
			<TextInput label="Investment Name" name="company_name" type="text" required></TextInput>
			<input type="hidden" name="investingEntityId" value={currentInvestingEntity.id} />
			<SmallButton type="submit" label="Add Investment" {loading}></SmallButton>
		</form>
	</Card>
</div>
