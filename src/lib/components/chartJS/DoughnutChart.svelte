
<script lang='ts'>
  import { Doughnut } from 'svelte-chartjs';
  import { data } from './testData.js';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

    <Doughnut 
        {data} 
        options={{ responsive: true, 
                plugins: {
                    legend: {
                    position: "left",
                    align: "center"
                    }
                } 
            }}/>
