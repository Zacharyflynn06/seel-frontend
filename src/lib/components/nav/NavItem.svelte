<script lang="ts">
	import type { NavigationItem } from '$lib/types/nav';

	export let navObj: NavigationItem;
</script>

<a
	href={navObj.href}
	class="flex transform-gpu flex-col items-center space-y-2.5 transition-all duration-500 ease-in-out hover:scale-[102.5%] active:scale-[97.5%]"
>
	<div
		class="h-12 w-12 rounded-xl bg-white p-3 text-light-purple shadow-08dp transition-all duration-500 ease-in-out hover:shadow-24dp active:shadow-04dp md:h-14 md:w-14 md:rounded-2xl dark:bg-off-black"
	>
		<svelte:component this={navObj.icon} className="h-auto w-full" />
	</div>

	<div
		class=" text-center text-[10px] uppercase text-white md:block md:font-extrabold md:tracking-[6px] dark:text-black"
	>
		<!-- using this nbsp to counter the wide letter spacing at the end of name to stay centered-->
		{navObj.name}
	</div>
</a>
