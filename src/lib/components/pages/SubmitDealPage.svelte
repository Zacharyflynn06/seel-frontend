<script lang="ts">
	import { enhance } from '$app/forms';
	import Card from '../Card.svelte';
	import SmallButton from '../buttons/SmallButton.svelte';
	import FileInput from '../formComponents/FileInput.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';

	let filePreviewUrl: string | undefined = undefined;
	let loading = false;
	let file: File;

	async function handleSubmit(event: SubmitEvent) {
		loading = !loading;
		// console.log({ event });
		debugger;
		if (!filePreviewUrl) {
			loading = false;
			return;
		}

		try {
			await fetch(filePreviewUrl, {
				method: 'PUT',
				body: file
			});
		} catch (error) {
			loading = false;
			console.log(error);
		}
	}
</script>

<div class="flex h-full w-full justify-center md:items-center">
	<Card
		heading="Upload Documents"
		className="h-fit md:w-full w-[95%] md:max-w-[500px] md:h-[500px]"
	>
		<form on:submit|preventDefault={handleSubmit}>
			<FileInput bind:file bind:signedUrl={filePreviewUrl} />

			<input type="text" hidden name="fileUrl" value={filePreviewUrl} />
			<SmallButton type="submit" bind:loading label="Submit">
				<UploadIcon />
			</SmallButton>
		</form>
	</Card>
</div>
