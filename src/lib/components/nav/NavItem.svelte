<script lang="ts">
	import type { NavigationItem } from '$lib/types/nav';

	export let navObj: NavigationItem;
</script>

<a
	href={navObj.href}
	class="flex transform-gpu flex-col items-center space-y-2.5 transition-all duration-200 ease-in-out hover:scale-[102.5%] active:scale-[97.5%]"
>
	<div
		class="h-12 w-12 rounded-lg bg-gradient-to-bl from-white/70 to-white/30 p-3 shadow-08dp backdrop-blur-[100px] transition-all duration-500 ease-in-out hover:shadow-24dp active:shadow-04dp md:h-14 md:w-14"
	>
		<svelte:component this={navObj.icon} class="h-auto w-full text-pink" />
	</div>

	<div class=" text-center text-[12px] tracking-tight text-off-white md:block md:font-extrabold">
		{navObj.name}
	</div>
</a>
