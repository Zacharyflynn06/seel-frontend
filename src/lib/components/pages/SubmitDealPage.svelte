<script lang="ts">
	import { enhance } from '$app/forms';
	import { flexCenter } from '$lib/classes';
	import Card from '../Card.svelte';
	import SmallButton from '../buttons/SmallButton.svelte';
	import FileInput from '../formComponents/FileInput.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';
	import GridLayout from '../layouts/GridLayout.svelte';
</script>

<GridLayout columnSpacingClass="">
	<div class=" h-full w-full {flexCenter} ">
		<Card
			heading="Upload Documents"
			className="h-full md:max-w-[500px] md:max-h-[90%] overflow-none"
		>
			<form
				method="post"
				use:enhance
				enctype="multipart/form-data"
				class=" flex h-full w-full flex-col space-y-5"
			>
				<FileInput />

				<div class="flex h-fit w-full items-center justify-center">
					<SmallButton type="submit" label="Submit"><UploadIcon /></SmallButton>
				</div>
			</form>
		</Card>
	</div>
</GridLayout>
