<script lang="ts">
	import { page } from '$app/stores';

	let title: string;
	function extractTitleFromPathname() {
		return $page.url.pathname
			.split('/')
			.map((part) => part.replace('-', ' '))
			.join(' ');
	}

	$: if ($page.url.pathname !== '/') {
		title = extractTitleFromPathname();
	} else {
		title = 'Dashboard';
	}
</script>

<header
	class="fixed top-0 z-10 flex h-20 w-full items-end justify-between bg-off-white p-5 shadow-01dp md:ml-[10rem] dark:bg-off-black"
>
	<h1 class="text-4xl font-extrabold capitalize">
		{title}
	</h1>

	<div class="flex space-x-5">
		<div class="space-x-2.5">
			<span class="uppercase tracking-widest">organization</span>
			<select name="" id="" class="capitalize">
				<option value="">platy partners</option>
			</select>
		</div>

		<div class="space-x-2.5">
			<span class="uppercase tracking-widest">vehicles</span>
			<select name="" id="" class="capitalize">
				<option value="">platy partners fund</option>
			</select>
		</div>
	</div>

	<div></div>
</header>
