<script lang="ts">
	import { flexCenter, selectBoxClasses } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import CheckboxInput from '$lib/components/formComponents/CheckboxInput.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
</script>

<div class="{flexCenter} h-full">
	<Card className="w-[50%] space-y-5">
		<form action="">
			<TextInput label="Burn Rate" name="burn_rate" type="number" />

			<label for="category" class="block">
				Category
				<select class={selectBoxClasses} name="category">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
			</label>

			<TextInput name="company_name" label="Company Name" />

			<TextInput name="competitors" label="Competitors" />

			<TextInput
				name="differentiation_from_competitors "
				label="Differentiation from competitors"
			/>

			<CheckboxInput name="first_time_founder" label="First time founder" />

			<CheckboxInput name="full_time" label="Full time" />

			<TextInput name="funding_round" label="Funding round" />

			<TextInput name="location" label="Location" />

			<CheckboxInput name="is_saas" label="Is saas" />

			<CheckboxInput name="is_us_based" label="Is US based" />

			<TextInput name="next_steps" label="Next Steps" />

			<TextInput name="university" label="University" />

			<CheckboxInput name="women_founded_or_owned" label="Women founded or founded" />
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
