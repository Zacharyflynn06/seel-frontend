<script lang="ts">
	import { flexCenter, mainPanelWidth } from '$lib/classes';
	import Spinner from '../Spinner.svelte';
</script>

<div class="{flexCenter} {mainPanelWidth} h-[calc(100vh-80px)] w-full text-pink">
	<Spinner className="h-[5rem] w-[5rem]" />
</div>
