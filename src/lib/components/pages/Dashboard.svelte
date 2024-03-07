<script lang="ts">
	import { animatedTouchClasses, selectBoxClasses, smallButtonClasses, zeroDp } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import { fade } from 'svelte/transition';
	import UploadIcon from '../icons/UploadIcon.svelte';
	import GridLayout from '../layouts/GridLayout.svelte';

	let pipelineNavItems = [
		'In Review',
		'Accepted',
		'Negotiations',
		'Due Diligence',
		'Documents',
		'Execution'
	];
	let selectedNavItem = pipelineNavItems[0];

	let pipelineOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let selectedPipelineRow = 0;
</script>

<GridLayout>
	<div class="grid gap-5 md:grid-rows-2">
		<div class="grid space-y-5">
			<Card headingIsCentered heading="Deals to Review">
				<div class="flex flex-col items-center justify-between space-y-4 text-center">
					<span class="font-spartan text-7xl font-bold text-light-purple">15</span>
					<input type="range" name="" id="" />
				</div>
			</Card>
			<Card headingIsCentered heading="Submit a new deal">
				<button class="flex h-fit w-full items-center justify-center text-red-500">
					<UploadIcon className="h-8 w-8" />
				</button>
			</Card>
		</div>

		<Card headingIsCentered heading="Documents">
			<div class="flex w-full items-center justify-center">
				<select class={selectBoxClasses} name="" id="">
					<option value="">In Review</option>
				</select>
			</div>
		</Card>
	</div>

	<div class="grid gap-5 md:grid-rows-3">
		<Card heading="Pipeline" className="">
			<ul
				class="flex h-fit w-full divide-x divide-black/50 rounded-full border border-black/50 font-bold dark:divide-white/50 dark:border-white/50"
			>
				{#each pipelineNavItems as navItem, i}
					<li
						class="{selectedNavItem === navItem ? 'bg-pink text-white  ' : 'hover:bg-off-white'} 
						{i === 0 ? 'rounded-l-full' : ''} {i === pipelineNavItems.length - 1 ? 'rounded-r-full' : ''} 
							flex w-1/6 items-center justify-center py-1"
					>
						<button
							on:click={() => {
								selectedNavItem = navItem;
							}}
							class="h-full w-full text-[10px]"
						>
							{navItem}
						</button>
					</li>
				{/each}
			</ul>

			<div class="flex h-full max-h-[90px] w-full space-x-2.5">
				<div class=" w-full overflow-scroll rounded-sm">
					<table class="w-full table-auto rounded-md border text-xs shadow-04dp">
						<!-- <thead> -->
						<tr class="h-5 divide-x border bg-purple text-xs font-bold text-white">
							<td>Company </td>
							<td>Series</td>
							<td>Shares</td>
							<td>Price</td>
						</tr>
						<!-- </thead> -->
						<tbody class="divide-y">
							{#each pipelineOptions as item}
								<tr
									on:click={() => (selectedPipelineRow = item)}
									class="{selectedPipelineRow === item
										? 'bg-light-purple text-off-white  '
										: 'hover:bg-off-white '} w-full cursor-pointer divide-x"
								>
									<td class="py-1">{item}</td>
									<td>{item}</td>
									<td>{item}</td>
									<td>{item}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<div class="flex flex-col items-center justify-between">
					<button class={smallButtonClasses}>Update Stage</button>
					<button class={smallButtonClasses}>Send Message</button>
					<button class={smallButtonClasses}>Request Documents</button>
				</div>
			</div>
		</Card>
		<Card heading="Quick Review" />
		<Card heading="Reporting" />
	</div>

	<div class="grid gap-5 md:grid-rows-2">
		<Card heading="Due Diligence" />
		<Card heading="How Can I Help?" />
	</div>
</GridLayout>
