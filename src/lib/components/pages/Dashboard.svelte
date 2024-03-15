<script lang="ts">
	import {
		animatedTouchClasses,
		selectBoxClasses,
		smallButtonClasses,
		standardHoverClasses
	} from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';
	import GridLayout from '../layouts/GridLayout.svelte';
	import BarChart from '../chartJS/BarChart.svelte';
	import DoughnutChart from '../chartJS/DoughnutChart.svelte';
	import PieChart from '../chartJS/PieChart.svelte';

	let pipelineNavItems = [
		'In Review',
		'Accepted',
		'Negotiations',
		'Due Diligence',
		'Documents',
		'Execution'
	];
	let selectedNavItem = pipelineNavItems[0];

	let reportingItems = [
		'Bar Chart',
		'Doughnut Chart',
		'Pie Chart'
	];
	let selectedReportItem = reportingItems[0];

	let pipelineOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let selectedPipelineRow = 0;

	let dueDiligenceOptions = [
		'Business Model',
		'Management Team Backgrounds',
		'Competitive Landscape',
		'Financial Performance',
		'Revenue Diversification'
	];
</script>

<GridLayout>
	<div class="grid space-y-5 md:grid-rows-2">
		<div class="grid space-y-5">
			<Card headingIsCentered heading="Deals to Review">
				<div class="flex flex-col items-center justify-between space-y-4 text-center">
					<span class="font-spartan text-7xl font-bold text-light-purple">15</span>
					<input type="range" name="" id="" />
				</div>
			</Card>
			<Card headingIsCentered heading="Submit a new deal">
				<button class="flex h-full w-full items-center justify-center text-red-500">
					<UploadIcon className="h-8 w-8 {animatedTouchClasses}" />
				</button>
			</Card>
		</div>

		<Card headingIsCentered heading="Documents">
			<div class="flex w-full flex-col items-center justify-center space-y-2.5">
				<select class={selectBoxClasses} name="" id="">
					<option value="">In Review</option>
				</select>
				{#each [1, 2, 3, 4] as item}
					<div class="flex w-full items-center justify-between">
						<div class="w-full rounded-sm border px-2.5 py-1">{item}</div>
					</div>
				{/each}
			</div>
		</Card>
	</div>

	<div class="grid gap-5 md:grid-rows-3">
		<Card heading="Pipeline">
			<div class="h-full w-full space-y-2.5">
				<!-- Mobile Nav -->
				<select name="" id="" class="{selectBoxClasses} md:hidden">
					{#each pipelineNavItems as navItem}
						<option value={navItem}>{navItem}</option>
					{/each}
				</select>
				<!-- Desktop Nav -->
				<ul
					class="hidden w-full divide-x divide-black/50 rounded-full border border-black/50 font-bold dark:divide-white/50 dark:border-white/50 md:flex"
				>
					{#each pipelineNavItems as navItem, i}
						<li
							class="{selectedNavItem === navItem ? 'bg-pink text-white  ' : standardHoverClasses} 
						{i === 0 ? 'rounded-l-full' : ''} {i === pipelineNavItems.length - 1 ? 'rounded-r-full' : ''} 
							flex w-1/6 items-center justify-center py-0.5"
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

				<div
					class="flex w-full flex-col space-y-2.5 pb-5 md:max-h-[120px] md:flex-row md:space-x-2.5 md:pb-0 2xl:max-h-[180px]"
				>
					<div class="w-full overflow-scroll rounded-sm">
						<table class="w-full table-auto rounded-md border text-xs shadow-04dp">
							<thead>
								<tr class="h-5 divide-x border bg-purple py-1 text-xs font-bold text-white">
									<td>Company </td>
									<td>Series</td>
									<td>Shares</td>
									<td>Price</td>
								</tr>
							</thead>
							<tbody class="divide-y">
								{#each pipelineOptions as item}
									<tr
										on:click={() => (selectedPipelineRow = item)}
										class="{selectedPipelineRow === item
											? 'bg-light-purple text-off-white  '
											: standardHoverClasses} w-full cursor-pointer divide-x"
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

					<div class="flex flex-col items-center justify-between space-y-2.5 md:space-y-0">
						<button class={smallButtonClasses}>Update Stage</button>
						<button class={smallButtonClasses}>Send Message</button>
						<button class={smallButtonClasses}>Request Documents</button>
					</div>
				</div>
			</div>
		</Card>
		<Card heading="Quick Review">
			<div
				class="flex h-full w-full flex-col justify-between space-y-2.5 pb-5 md:flex-row md:space-x-2.5 md:space-y-0 md:pb-0"
			>
				<div class="flex h-full w-full flex-col justify-between md:w-1/3">
					<div class="flex justify-between font-spartan text-xs uppercase">
						<span class="tracking-widest text-black/50 dark:text-white/50">Criteria Match</span>
						<span class="text-light-purple">77%</span>
					</div>
					<input type="range" name="" id="" value="77"/>
					<table class=" table-auto rounded-md border text-xs shadow-04dp">
						<tbody class="w-full divide-y text-xs">
							<tr class="divide-x">
								<td class="pl-2 font-bold">Round</td>
								<td>Series A</td>
							</tr>
							<tr class="divide-x">
								<td class="pl-2 font-bold">Industry</td>
								<td>Technology</td>
							</tr>
							<tr class="divide-x">
								<td class="pl-2 font-bold">Funding Amount</td>
								<td>$5M</td>
							</tr>
							<tr class="divide-x">
								<td class="pl-2 font-bold">Competitors</td>
								<td>2</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div
					class="grid h-full w-full items-center justify-between rounded-md border p-2.5 text-sm shadow-04dp md:w-1/3"
				>
					<div class="font-bold">Potential Competitors</div>
					<div>Doordash</div>
					<div>Uber EAts</div>
					<div>Grubhub</div>
				</div>

				<div
					class="grid h-full w-full items-center justify-between rounded-md border p-2.5 text-sm shadow-04dp md:w-1/3"
				>
					<div class="font-bold">Contacts</div>
					<div class="flex items-center space-x-2.5">
						<div class="h-6 w-6 rounded-full bg-purple"></div>
						<div>
							<div class="font-bold">Name</div>
							<div>Role</div>
						</div>
					</div>
					<div class="flex items-center space-x-2.5">
						<div class="h-6 w-6 rounded-full bg-purple"></div>
						<div>
							<div class="font-bold">Name</div>
							<div>Role</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
		<Card heading="Reporting">
			<div class="h-full w-full space-y-2.5">
				<!-- Mobile Nav -->
				<select name="" id="" class="{selectBoxClasses} md:hidden">
					{#each reportingItems as reportItem}
						<option value={reportItem}>{reportItem}</option>
					{/each}
				</select>
				<!-- Desktop Nav -->
				<ul
					class="hidden w-full divide-x divide-black/50 rounded-full border border-black/50 font-bold dark:divide-white/50 dark:border-white/50 md:flex"
				>
					{#each reportingItems as reportItem, i}
						<li
							class="{selectedReportItem === reportItem ? 'bg-pink text-white  ' : standardHoverClasses} 
						{i === 0 ? 'rounded-l-full' : ''} {i === reportingItems.length - 1 ? 'rounded-r-full' : ''} 
							flex w-1/3 items-center justify-center py-0.5"
						>
							<button
								on:click={() => {
									selectedReportItem = reportItem;
								}}
								class="h-full w-full text-[10px]"
							>
								{reportItem}
							</button>
						</li>
					{/each}
				</ul>
				<div class="h-full w-full space-y-2.5" style="height:320px">
					{#if selectedReportItem === 'Bar Chart'}
					<BarChart/>
					{:else if selectedReportItem === 'Doughnut Chart'}
					<DoughnutChart />
					{:else}
					<PieChart />
					{/if}
				</div>
			</div>
		</Card>
	</div>

	<div class="grid gap-5 md:grid-rows-2">
		<Card heading="Due Diligence">
			<div class="flex h-full flex-col items-center justify-between space-y-2.5 md:space-y-0">
				{#each dueDiligenceOptions as item}
					<button class="{smallButtonClasses} py-2.5">{item}</button>
				{/each}
			</div>
		</Card>
		<Card heading="How Can I Help?"></Card>
	</div>
</GridLayout>
