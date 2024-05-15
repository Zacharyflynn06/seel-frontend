<script lang="ts">
	// This type error is a known issue, (https://github.com/pqina/svelte-filepond/issues/13) does not seem to be fixed yet
	import FilePond, { registerPlugin } from 'svelte-filepond';

	import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
	import 'filepond/dist/filepond.min.css';
	import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
	import { AddDocumentToCollectionUrlStore } from '$houdini';

	export let signedUrl: string | undefined = undefined;
	// Register the plugins
	registerPlugin(
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginFileEncode
	);

	// a reference to the component, used to call FilePond methods
	let pond: FilePond;
	// pond.getFiles() will return the active files
	export let file;
	// the name to use for the internal file input
	let name = 'filepond';

	function handleInit() {
		console.log('FilePond has initialised');
	}
	async function handleAddFile(err, fileItem) {
		console.log(err, fileItem);
		try {
			console.log('A file has been added', fileItem);
			const store = new AddDocumentToCollectionUrlStore();
			store;
			store.variables = true;

			// Get the signed url
			await store
				.fetch({ variables: { collectionName: 'zac-test-1' } })
				.then((res) => (signedUrl = res.data?.addDocumentToCollectionUrl));

			// Fetch using PUT
			if (signedUrl) {
				await fetch(signedUrl, {
					method: 'PUT',
					body: fileItem.getFiles()[0].file
				});
			}
		} catch (error) {
			console.log((error as Error).message);
		}
	}
</script>

<div class="app">
	<FilePond bind:this={pond} {name} credits={false} oninit={handleInit} onaddfile={handleAddFile} />
</div>

<style lang="postcss">
	:global(.dark .filepond--panel-root) {
		@apply bg-grey-08;
	}
	/* :global(.filepond--panel-root) {
		@apply border border-;
	} */
	:global(.dark .filepond--drop-label) {
		@apply text-off-white;
	}
	:global(.filepond--drop-label) {
		@apply text-off-black;
	}
</style>
