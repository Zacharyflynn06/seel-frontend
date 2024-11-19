<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { anchorTagClasses } from '$lib/classes';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import toast from 'svelte-french-toast';
	import type { ActionData } from './$types';
	import { getAllInvestingEntities } from '$lib/services/investingEntity';
	export let form: ActionData;

	let loading = false;

	$: if (form?.success) {
		toast.success('Logged in successfully', { position: 'top-center' });
		// goto('/dashboard');
	}

	$: if (form?.error) {
		toast.error('Invalid email or password', { position: 'top-center' });
	}

	async function getEntities() {
		const investingEntities = await getAllInvestingEntities(
			'eyJraWQiOiJ2UE01eloxZFg3T0lKUkkyeG5IY0lZZnJqUmhMSDRsWXFOdDdwbXhNcm5zPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NDA4MTQ2OC00MGQxLTcwOWUtOGJhOS0yMDhjMTQ3ZjYxNTQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9DbWhQOHpZT2kiLCJjbGllbnRfaWQiOiI1ZDIxazhpdmh1ajZhOTVwOHJwbTZkcm1nayIsIm9yaWdpbl9qdGkiOiIzZTczOTdkMS04OTk1LTQ3ZjgtYjFhZi03NTE3ZDE1NTdiOTIiLCJldmVudF9pZCI6IjQ4NjUyYzdmLThiMDMtNGJjMi04MjdiLWU1OTQxMTk2MzI2YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MzE5ODM3OTAsImV4cCI6MTczMTk4NzM5MCwiaWF0IjoxNzMxOTgzNzkwLCJqdGkiOiI1ZmUzN2NhYy00ZmZjLTQyZTQtYWFmNy1kYTEzYzUyNWNmMjAiLCJ1c2VybmFtZSI6ImFkbWluIn0.BX6MQZQafnLe7Hj1ki7vRZ1MUYrNCYZsPpMqyK-RJOGnKuXuwI0MmSqJJ0eHIoiJxSMH4mLB9F6orh0svnKZT9r3GCWFY4laciPNMu5x6rixD7zLxNsZgcBs11eF3NBSZjyzUtwIlWRfdVrpCITyrxEeZJK255_o3gm_IBNhg-sDE6cbtC08Nvy8UFXxNOSrTgVXeV0h8BLEsLutEyPGWLHiGASF6OUqN7AZnLTfShXo4DDxqQt3IyTez85EZy4CSEqa-TtUfA510gIPM8C41wLfVMQ34j7zvqbvTWQJLELo-NkLni08TOmehlqdmpZj1zsly9A3yjQqWCZvQ0Ymng'
		);

		if (investingEntities) {
			console.log({ investingEntities });
		}
	}

	getEntities();
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	}}
	action="?/login"
	method="POST"
	class="space-y-2.5"
>
	<h1>Log in</h1>
	<label for="email-address" class="sr-only">Email</label>

	<TextInput
		required
		type="email"
		name="email-address"
		label="Email Address"
		placeholder="john.doe@example.com"
	/>
	<label for="password" class="sr-only">Password</label>

	<TextInput
		required
		type="password"
		name="password"
		minlength={6}
		label="Password"
		placeholder=" minimum 6 characters"
	/>
	<div class="flex w-full justify-between">
		<a class="{anchorTagClasses} text-xs" href="/forgot-password">Forgot password?</a>
		<a class="{anchorTagClasses} text-xs" href="/sign-up">Need an account?</a>
	</div>

	<div class="flex justify-center">
		<SmallButton type="submit" {loading} label="Log in" />
	</div>
</form>
