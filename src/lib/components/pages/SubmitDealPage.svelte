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

<div class="flex h-full w-full items-center justify-center">
	<Card heading="Upload Documents" className="h-full md:max-w-[500px] md:h-[500px]">
		<FileInput bind:previewUrl={filePreviewUrl} />
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
				<SmallButton
					disabled={filePreviewUrl ? false : true}
					type="submit"
					bind:loading
					label="Submit"
				>
					<UploadIcon />
				</SmallButton>
			</div>
		</form>
	</Card>
</div>
