<script lang="ts">
	import type { NavigationItem } from '$lib/types/nav';

	export let navObj: NavigationItem;
</script>

<a
	href={navObj.href}
	class="flex flex-col items-center space-y-2.5 transition-all duration-500 ease-in-out hover:scale-[102.5%] active:scale-[97.5%]"
>
	<div
		class="shadow-08dp hover:shadow-24dp active:shadow-04dp text-light-purple h-12 w-12 rounded-xl border border-white bg-white p-3 transition-all duration-500 ease-in-out md:h-14 md:w-14 md:rounded-2xl"
	>
		<svelte:component this={navObj.icon} className="h-auto w-full" />
	</div>

	<div
		class=" text-center text-[10px] uppercase text-white md:block md:font-extrabold md:tracking-[6px]"
	>
		<!-- using this nbsp to counter the wide letter spacing at the end of name to stay centered-->
		&nbsp;{navObj.name}
	</div>
</a>
