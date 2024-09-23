<script lang="ts">
	import TrashIcon from '../icons/TrashIcon.svelte';

	// your script goes here

	let isOpen = false;
</script>

<div>
	{#if !isOpen}
		<button on:click|preventDefault={() => (isOpen = true)} class="text-red">
			<TrashIcon />
		</button>
	{:else}
		<div class="border-red grid items-center justify-center rounded-md border p-2">
			<p class="text-red text-center text-sm">Are you sure?</p>
			<div class="flex w-full justify-between">
				<button type="submit">Yes</button>
				<button
					on:click|preventDefault={() => {
						isOpen = false;
					}}>No</button
				>
			</div>
		</div>
	{/if}
</div>
