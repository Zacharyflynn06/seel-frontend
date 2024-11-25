<script lang="ts">
	// This type error is a known issue, (https://github.com/pqina/svelte-filepond/issues/13) does not seem to be fixed yet
	import FilePond, { registerPlugin } from 'svelte-filepond';
	//
	import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
	import 'filepond/dist/filepond.min.css';
	import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

	export let companyId: string;
	export let investingEntityId: string;
	export let userId: string;
	export let upsertDocumentMetadataId: string = '';

	// Register the plugins
	registerPlugin(
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginFileEncode
	);

	// a reference to the component, used to call FilePond methods
	let pond: FilePond;
	// pond.getFiles() will return the active files

	// let name = 'filepond';
	export let fileIsReady = false;

	const getPresignedUrl = async (filename: string): Promise<string> => {
		// let uploadUrl = '';
		// const store = new UpsertDocumentMetadataStore();
		// await store
		// 	.mutate({ input: { name: filename, investingEntityId, companyId, userId } })
		// 	.then((res) => {
		// 		console.log({ res });
		// 		uploadUrl = res?.data?.upsertDocumentMetadata?.uploadUrl;
		// 		upsertDocumentMetadataId = res?.data?.upsertDocumentMetadata?.id;
		// 	});
		// return uploadUrl;
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

	const uploadFileToS3 = (url: string, data: ArrayBuffer | string | null) => {
		if (!data) {
			return Promise.resolve();
		}

		return fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/octet-stream'
			},
			body: data
		});
	};

	// const handleAddFile = async (err: Error, fileItem: object) => {
	// 	if (err) {
	// 		throw new Error('FilePond error: ' + err.message);
	// 	}

	// 	console.log('File added', fileItem);
	// 	const uploadUrl = await getPresignedUrl(fileItem.filename);
	// 	console.log({ uploadUrl });
	// 	const buffer = await readFile(fileItem.file);
	// 	console.log({ buffer });
	// 	await uploadFileToS3(uploadUrl, buffer).then((res) => {
	// 		console.log('uploadFileToS3', { res });
	// 	});
	// };

	const filepondServer = {
		process(fieldName, file, metadata, load, error, progress, abort, transfer, options) {
			console.log({ fieldName, file, metadata, load, error, progress, abort, transfer, options });
			const init = async () => {
				const uploadUrl = await getPresignedUrl(file.name);
				console.log({ uploadUrl });
				const buffer = await readFile(file);
				console.log({ buffer });
				await uploadFileToS3(uploadUrl, buffer).then((res) => {
					console.log('uploadFileToS3', { res });
					load(uploadUrl);
				});
			};

			init();

			// Should expose an abort method so the request can be cancelled
			return {
				abort: () => {
					// This function is entered if the user has tapped the cancel button
					request.abort();

					// Let FilePond know the request has been cancelled
					abort();
				}
			};
		}
		// fetch: async (url, load, error, progress, abort, headers) => {
		// 	console.log('fetch', { url, load, error, progress, abort, headers });
		// },
		// load: (source, load, error, progress, abort, headers) => {
		// 	console.log('source in load - ', source);
		// }
	};
</script>

<FilePond server={filepondServer} allowMultiple={false} credits={false} />

<!-- <FilePond bind:this={pond} server="/api/file-upload" allowMultiple={true} credits={false} /> -->

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
