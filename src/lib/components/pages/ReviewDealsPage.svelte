<script lang="ts">
	import { type EmailsQuery } from '$houdini';
	import Card from '../Card.svelte';

	import GridLayout from '../layouts/GridLayout.svelte';
	export let emails: EmailsQuery;
</script>

<GridLayout columnSpacingClass="md:grid-cols-[40%_40%_20%] overflow-hidden">
	<div class="grid max-h-[calc(100vh-6rem)]">
		<Card heading="Pending Deal Review" className="overflow-scroll">
			<table class="w-full table-auto rounded-md border text-xs shadow-04dp">
				<thead>
					<tr class="h-5 divide-x border bg-purple py-1 text-xs font-bold text-white">
						<th>Company</th>
						<th>ID</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each emails as email}
						<tr class="cursor-pointer text-off-black hover:bg-light-purple hover:text-off-white">
							<td class="py-1 font-bold">{email.company_name}</td>
							<td>{email.id}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</Card>
	</div>
	<div class="grid grid-rows-3 space-y-5">
		<Card heading="Review Criteria" />
		<Card heading="Missing Information" />
		<Card heading="Contacts" />
	</div>
	<div class="grid grid-rows-2 space-y-5">
		<Card heading="Notes" />
		<Card heading="Team Chat" />
	</div>
</GridLayout>
