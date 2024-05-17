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

	let name = 'filepond';

	const getPresignedUrl = async (): Promise<string> => {
		let url = '';
		const store = new AddDocumentToCollectionUrlStore();

		await store.fetch({ variables: { collectionName: 'zac-test-1' } }).then((res) => {
			if (res?.data?.addDocumentToCollectionUrl) {
				url = res?.data?.addDocumentToCollectionUrl;
			}
		});
		return url;
	};

	const readFile = (file: File) =>
		new Promise<ArrayBuffer | string | null>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = (e) => reject(e);
			reader.readAsArrayBuffer(file);
		});

	function handleInit() {
		console.log('FilePond has initialized');
	}

	const uploadFileToS3 = (url: string, data: ArrayBuffer | string | null) => {
		if (!data) {
			return Promise.resolve();
		}

		return fetch(url, {
			method: 'PUT',
			body: data
		});
	};

	async function handleAddFile(err, fileItem) {
		const url = await getPresignedUrl();
		const buffer = await readFile(fileItem.file);
		await uploadFileToS3(url, buffer).then((res) => {
			console.log({ res });
		});
	}
</script>

<FilePond
	server="/api"
	allowMultiple={true}
	oninit={handleInit}
	onaddfile={handleAddFile}
	credits={false}
/>

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
