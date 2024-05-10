<script lang="ts">
	export let columnSpacingClass = 'md:grid-cols-[25%_50%_25%]';
</script>

<div
	class="{columnSpacingClass} grid h-[calc(100dvh-72px)] space-y-5 px-5 pb-[120px] pt-5 dark:bg-black md:max-h-full md:space-x-5 md:space-y-0 md:pb-5"
>
	<slot />
</div>
