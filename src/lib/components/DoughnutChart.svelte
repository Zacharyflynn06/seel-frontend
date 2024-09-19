<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let percentage: number;

	const data = {
		labels: ['Pass', 'Fail'],
		datasets: [
			{
				data: [percentage, 1 - percentage],
				backgroundColor: ['#4b4a78', '#d0577b'],
				hoverOffset: 4
			}
		]
	};
	const config = {
		type: 'doughnut',
		data: data
	};

	onMount(() => {
		const doughnutChart = new Chart(document.getElementById('doughnut'), config);
	});
</script>

<div class=" h-[300px] w-[300px]">
	<canvas id="doughnut" />
</div>
