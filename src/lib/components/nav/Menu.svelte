<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';
</script>

<nav
	transition:slide
	class="absolute right-0 top-[72px] z-20 bg-white p-5 dark:bg-grey-08 sm:top-[80px]"
>
	<ul class="space-y-2.5">
		<li><a href="/">Home</a></li>

		<li>
			<a href="/about">About</a>
		</li>
		<li>Settings</li>
		<li>
			<form action="/log-out" method="POST" use:enhance>
				<button type="submit">Sign Out</button>
			</form>
		</li>
	</ul>
</nav>
