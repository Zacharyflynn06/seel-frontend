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

<Card heading="Add Company">
	<form use:enhance action="?/add_company" method="POST" class="space-y-5">
		<TextInput name="company_name" label="Company Name" />

		<NumberInput label="Burn Rate" name="burn_rate" />

		<TextInput name="competitors" label="Competitors" />

		<TextInput name="differentiation_from_competitors" label="Differentiation from competitors" />

		<TextInput name="funding_round" label="Funding round" />

		<TextInput name="location" label="Location" />

		<TextInput name="next_steps" label="Next Steps" />

		<TextInput name="university" label="University" />

		<CheckboxInput name="first_time_founder" label="First time founder?" />

		<CheckboxInput name="full_time" label="Full time?" />

		<CheckboxInput name="is_saas" label="Is saas?" />

		<CheckboxInput name="is_us_based" label="Is US based?" />

		<CheckboxInput name="women_founded_or_owned" label="Women founded or founded" />

		<label for="category" class="block {inputLabelClasses}">
			Category
			<select class={selectBoxClasses} name="category">
				{#each [1, 2, 3, 4] as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</label>

		<div class="flex w-full justify-end">
			<SmallButton type="submit" label="Submit" />
		</div>
	</form>
</Card>

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
