<script>
	import { mainPanelWidth } from '$lib/classes';

	import { page } from '$app/stores';

	$: url = $page.url;

	$: segments = url.pathname.split('/').filter((segment) => segment !== '');
</script>

<div class="flex flex-wrap items-center p-4">
	<ul class="flex items-center">
		<!-- <li class="inline-flex items-center">
			<a href="#" class="text-gray-600 hover:text-blue-500">
				<svg
					class="mx-2 h-auto w-5 fill-current text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#000000"
					><path d="M0 0h24v24H0V0z" fill="none" /><path
						d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
					/></svg
				>
			</a>

			<span class="mx-4 h-auto font-medium text-gray-400">/</span>
		</li> -->
		{#each segments as segment, i}
			<li class="inline-flex items-center">
				<a
					href={`/${segments.slice(0, i + 1).join('/')}`}
					class="text-gray-600 hover:text-blue-500"
				>
					{segment}
				</a>

				<span class="mx-4 h-auto font-medium text-gray-400">/</span>
			</li>
		{/each}
	</ul>
</div>
