<script lang="ts">
	import { enhance } from '$app/forms';
	import { flexCenter } from '$lib/classes';
	import Card from '../Card.svelte';
	import SmallButton from '../buttons/SmallButton.svelte';
	import FileInput from '../formComponents/FileInput.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';

	let filePreviewUrl: string | undefined = undefined;
	let loading = false;
</script>

<!-- <GridLayout columnSpacingClass=""> -->
<div class=" flex h-full w-full justify-center md:items-center">
	<Card
		heading="Upload Documents"
		className="h-[calc(100vh-113px)] md:min-h-[50%] md:max-w-[500px] md:max-h-[50%] overflow-none grid items center"
	>
		<FileInput bind:previewUrl={filePreviewUrl} />
		{#if filePreviewUrl}
			<!-- content here -->
			<form
				method="POST"
				action="?/upload"
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						loading = false;
						update();
					};
				}}
			>
				<div class="flex h-fit w-full items-center justify-center">
					<input type="text" hidden name="fileUrl" value={filePreviewUrl} />
					<SmallButton type="submit" bind:loading label="Submit"><UploadIcon /></SmallButton>
				</div>
			</form>
		{/if}
	</Card>
</div>
<!-- </GridLayout> -->
