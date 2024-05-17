<script lang="ts">
	import { mainPanelWidth, padHeader } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import FileInput from '$lib/components/formComponents/FileInput.svelte';
	import UploadIcon from '$lib/components/icons/UploadIcon.svelte';

	let filePreviewUrl: string | undefined = undefined;
	let loading = false;
	let file: File;

	async function handleSubmit(event: SubmitEvent) {
		loading = !loading;
		console.log({ event });
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

<Card heading="Upload Documents">
	<form on:submit|preventDefault={handleSubmit}>
		<FileInput />

		<!-- <input type="text" hidden name="fileUrl" value={filePreviewUrl} /> -->
		<!-- <div class="flex w-full justify-end">
			<SmallButton type="submit" bind:loading label="Submit">
				<UploadIcon />
			</SmallButton>
		</div> -->
	</form>
</Card>
