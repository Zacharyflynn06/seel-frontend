<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="grid h-screen w-full items-center justify-center bg-gradient-to-bl from-pink to-purple">
	<div class="flex flex-col items-center justify-center">
		<img class="h-[10rem] w-[10rem] drop-shadow-2xl" src="images/SeelLogo.png" alt="" />
		<div class="font text-center font-spartan text-2xl text-white">
			<h1 class="text-7xl">We're Sorry!</h1>
			<h1>Something Went Wrong</h1>

			<p>{$page.status} - {$page.error?.message}</p>
		</div>
	</div>
</div>
