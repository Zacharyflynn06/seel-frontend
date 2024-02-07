<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	const dummyData = [
		{ heading: 'New Object 1', body: 'This is a new object added to the array.' },
		{ heading: 'New Object 2', body: 'This is another new object added to the array.' },
		{ heading: 'New Object 3', body: 'Yet another new object added to the array.' },
		{ heading: 'New Object 4', body: 'Adding more objects to the array.' },
		{ heading: 'New Object 5', body: 'Another object added for testing purposes.' },
		{ heading: 'New Object 6', body: 'Testing the functionality of the array.' },
		{ heading: 'New Object 7', body: 'Adding more data to the array.' },
		{ heading: 'New Object 8', body: 'Testing the rendering of multiple cards.' },
		{ heading: 'New Object 9', body: 'Adding more objects to the array.' },
		{ heading: 'New Object 10', body: 'Final object added to the array.' },
		{ heading: 'New Object 11', body: 'This is another new object added to the array.' },
		{ heading: 'New Object 12', body: 'Yet another new object added to the array.' },
		{ heading: 'New Object 13', body: 'Adding more objects to the array.' },
		{ heading: 'New Object 14', body: 'Another object added for testing purposes.' },
		{ heading: 'New Object 15', body: 'Testing the functionality of the array.' },
		{ heading: 'New Object 16', body: 'Adding more data to the array.' },
		{ heading: 'New Object 17', body: 'Testing the rendering of multiple cards.' },
		{ heading: 'New Object 18', body: 'Adding more objects to the array.' },
		{ heading: 'New Object 19', body: 'Final object added to the array.' }
	];
</script>

<div
	class="grid h-screen w-full gap-5 overflow-x-hidden bg-off-white p-5 md:grid-cols-4 md:pl-[11.25rem] dark:bg-black"
>
	{#each dummyData as data}
		<Card {data} />
	{/each}
</div>
