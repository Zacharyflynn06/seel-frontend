<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { fly, slide } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';
	import toast from 'svelte-french-toast';
	import ManageCompanyForm from './ManageCompanyForm.svelte';
	import LineItem from '$lib/components/LineItem.svelte';
	import { currentInvestingEntityStore } from '$lib/stores/currentInvestingEntityStore';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;

	$: if (form?.success) {
		console.log('success', form);
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}

	$: console.log({ $currentInvestingEntityStore });
</script>

<div class="space-y-5">
	{#if $currentInvestingEntityStore}
		{@const investingEntity = $currentInvestingEntityStore}
		<Card heading="{investingEntity.name}'s Investments">
			<div class="divide-y"></div>
		</Card>
	{/if}
	<!-- <Card heading="Add a new investment to {investingEntity?.name}" className="mb-5">
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
	</Card> -->
</div>
