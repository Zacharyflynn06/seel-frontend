<script lang="ts">
	import { enhance } from '$app/forms';
	import { inputLabelClasses, selectBoxClasses } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import CheckboxInput from '$lib/components/formComponents/CheckboxInput.svelte';
	import NumberInput from '$lib/components/formComponents/NumberInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
	$: if (form?.success) {
		console.log(form);
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

<!-- input UpsertCompanyInput {
    any_additional_founders: String
    burn_rate: Int
    category: String
    client_id: String!
    company_name: String
    competitors: String
    differentiation_from_competitors: String
    first_time_founder: Boolean
    full_time: Boolean
    funding_round: String
    id: String
    is_saas: Boolean
    is_us_based: Boolean
    location: String
    next_steps: String
    university: String
    women_founded_or_owned: Boolean
  } -->
