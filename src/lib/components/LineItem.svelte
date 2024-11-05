<script>
	import { flexCenter } from '$lib/classes';
</script>

<div class="flex items-center space-x-5 duration-300 ease-in-out">
	<div class="h-10 w-10 rounded-full bg-pink text-off-white {flexCenter}">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	</div>
	<div class="text-lg font-semibold underline hover:text-purple">
		<slot />
	</div>
</div>
