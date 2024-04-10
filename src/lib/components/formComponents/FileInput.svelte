<script lang="ts">
	// This type error is a known issue, (https://github.com/pqina/svelte-filepond/issues/13) does not seem to be fixed yet
	import FilePond, { registerPlugin } from 'svelte-filepond';

	import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
	import 'filepond/dist/filepond.min.css';
	import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
	import { tick } from 'svelte';

	let previewUrl: string;
	// Register the plugins
	registerPlugin(
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginFileEncode
	);

	// a reference to the component, used to call FilePond methods
	let pond: FilePond;
	// pond.getFiles() will return the active files

	// the name to use for the internal file input
	let name = 'filepond';

	let signedRequestUrl: string;

	function handleInit() {
		console.log('FilePond has initialised');
	}

	async function handleLoad(params: string) {
		console.log('FilePond has loaded');
		const url = JSON.parse(params).data;
		signedRequestUrl = JSON.parse(url)[0];
		tick();
		const response = await fetch(signedRequestUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			body: pond.getFiles()[0].file
		});
		previewUrl = signedRequestUrl.split('?')[0];

		console.log(response);
	}
</script>

{#if previewUrl}
	<img src={previewUrl} class="h-20 w-20" alt="" />
{/if}

<div class="app">
	<FilePond
		bind:this={pond}
		{name}
		server={{
			process: {
				onload: handleLoad,
				url: `/api`,
				headers: {
					Accept: 'application/json'
				}
			}
		}}
		credits={false}
		oninit={handleInit}
	/>
</div>
