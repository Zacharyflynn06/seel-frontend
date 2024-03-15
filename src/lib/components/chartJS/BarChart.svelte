<script lang='ts'>
    import { Bar } from 'svelte-chartjs';
    import { data } from './testData';
    import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>
<div>
    <Bar {data} options={{ maintainAspectRatio: true }} />
</div>