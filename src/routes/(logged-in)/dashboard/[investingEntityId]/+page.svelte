<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { ActionData, PageData } from '../$types';
	import toast from 'svelte-french-toast';
	import ManageCompanyForm from './ManageCompanyForm.svelte';
	import LineItem from '$lib/components/LineItem.svelte';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;

	$: investingEntity = data.investingEntity;

	$: if (form?.success) {
		console.log('success', form);
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}
</script>

<div class="space-y-5">
	<Card heading="{investingEntity?.name}'s Investments">
		{#if investingEntity}
			<div class="divide-y">
				{#each investingEntity.companies as company (company.id)}
					<div in:fly={{ y: 20 }} out:slide class="flex w-full py-5">
						<!-- this is the roundabout way we are getting the company name for now -->
						{#each company.attributes as attribute}
							<a
								href="/dashboard/{investingEntity.id}/{company.id}"
								class="flex w-full items-center justify-between"
							>
								<div class="flex items-center space-x-5 text-lg">
									<LineItem>
										{attribute.value.stringValue}
									</LineItem>
								</div>
							</a>
						{/each}

						<ManageCompanyForm {company} />
					</div>
				{:else}
					<p>No companies yet, add one above!</p>
				{/each}
			</div>
		{/if}
	</Card>
	<Card heading="Add a new investment to {investingEntity?.name}" className="mb-5">
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
			<input type="hidden" name="investingEntityId" value={investingEntity.id} />
			<SmallButton type="submit" label="Add Investment" {loading}></SmallButton>
		</form>
	</Card>
</div>
