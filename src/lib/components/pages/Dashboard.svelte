<script lang="ts">
	import { animatedTouchClasses, selectBoxClasses } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
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
		<Card heading="Pipeline">
			<ul
				class="flex w-full divide-x divide-black/50 rounded-full border border-black/50 font-bold dark:divide-white/50 dark:border-white/50"
			>
				{#each pipelineNavItems as navItem, i}
					<li
						class="{selectedNavItem === navItem ? 'bg-pink text-white  ' : ''} 
						{i === 0 ? 'rounded-l-full' : ''} {i === pipelineNavItems.length - 1 ? 'rounded-r-full' : ''} 
							flex w-1/6 items-center justify-center py-1"
					>
						<button
							on:click={() => {
								selectedNavItem = navItem;
							}}
							class="{animatedTouchClasses} text-[10px]"
						>
							{navItem}
						</button>
					</li>
				{/each}
			</ul>
		</Card>
		<Card heading="Quick Review" />
		<Card heading="Reporting" />
	</div>

	<div class="grid gap-5 md:grid-rows-2">
		<Card heading="Due Diligence" />
		<Card heading="How Can I Help?" />
	</div>
</GridLayout>
