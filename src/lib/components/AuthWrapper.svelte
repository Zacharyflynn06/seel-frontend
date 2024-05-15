<script lang="ts">
	import { padHeader } from '$lib/classes';
	import Card from './Card.svelte';
	import GradientBg from './GradientBg.svelte';
	import SeelIcon from './icons/SeelIcon.svelte';

	export let label = '';
</script>

<GradientBg />

<div class="flex {padHeader} w-full items-center justify-center p-5">
	<Card>
		<div class="flex h-48 w-full items-center justify-center">
			<SeelIcon className="h-full w-auto text-purple dark:text-off-white" />
		</div>

		<h1>{label}</h1>

		<slot />
	</Card>
</div>
