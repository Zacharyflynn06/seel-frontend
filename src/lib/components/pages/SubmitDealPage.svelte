<script lang="ts">
	import { enhance } from '$app/forms';
	import Card from '../Card.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';
	import GridLayout from '../layouts/GridLayout.svelte';
</script>

<GridLayout columnSpacingClass="md:grid-cols-[40%_40%_20%] ">
	<div class="grid">
		<Card heading="Upload Documents">
			<form
				method="post"
				use:enhance
				enctype="multipart/form-data"
				class="grid h-full w-full items-center justify-center text-pink"
			>
				<UploadIcon className="h-8 w-8 " />
				<label for="file">
					<input type="file" name="fileToUpload" id="file" />
				</label>
				<button type="submit">Submit </button>
			</form>
		</Card>
	</div>
	<div class="grid">
		<Card heading="Results" />
	</div>
	<!-- <div class="grid space-y-5 md:grid-rows-3">
		<div class="grid"><Card heading="Criteria Match" /></div>
		<div class="grid"><Card heading="Missing Information" /></div>
		<div class="grid"><Card heading="Existing Matches" /></div>
	</div> -->
</GridLayout>
