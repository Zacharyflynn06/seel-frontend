<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="grid h-screen w-full items-center justify-center bg-gradient-to-bl from-pink to-purple">
	<div class="flex flex-col items-center justify-center">
		<img class="drop-shadow-2xl" src="images/SeelLogo.png" alt="" />
		<div class="text-center text-white">
			<h1>We're Sorry!</h1>
			<h1>Something Went Wrong</h1>

			<p>{$page.status} - {$page.error?.message}</p>
		</div>
	</div>
</div>

<style>
	h1 {
		@apply text-2xl font-extrabold;
	}
</style>
