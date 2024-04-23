<script lang="ts">
	import { enhance } from '$app/forms';
	import { flexCenter } from '$lib/classes';
	import Card from '../Card.svelte';
	import SmallButton from '../buttons/SmallButton.svelte';
	import FileInput from '../formComponents/FileInput.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';

	let filePreviewUrl: string | undefined = undefined;
</script>

<!-- <GridLayout columnSpacingClass=""> -->
<div class=" h-full w-full {flexCenter} ">
	<Card
		heading="Upload Documents"
		className="h-full md:h-fit md:min-h-[50%] md:max-w-[500px] md:max-h-[90%] overflow-none grid items center"
	>
		<FileInput bind:previewUrl={filePreviewUrl} />
		{#if filePreviewUrl}
			<!-- content here -->
			<form method="POST" action="?/upload" use:enhance>
				<div class="flex h-fit w-full items-center justify-center">
					<input type="text" hidden name="fileUrl" value={filePreviewUrl} />
					<SmallButton type="submit" label="Submit"><UploadIcon /></SmallButton>
				</div>
			</form>
		{/if}
	</Card>
</div>
<!-- </GridLayout> -->
