<script lang="ts">
	import { flexCenter, padHeader } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import GradientBg from '$lib/components/GradientBg.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.classList.add('gradient-animation');
	});
</script>

<GradientBg />

<Card heading="About Seel">
	<p class="">
		Founded in 2024, Seel is an AI-powered platform designed to streamline private market deal
		execution. Our mission is to simplify and enhance the investment process through automation and
		data-driven insights. Our Vision
	</p>
	<br />
	<h2>Our Vision</h2>
	<p>
		Seel aims to revolutionize the private equity and venture capital space by providing an
		end-to-end solution for deal execution. Leveraging AI and machine learning, we streamline tasks
		like deal qualification, due diligence, and investment memo creation.
	</p>
	<br />
	<h2>What We Offer</h2>
	<ul class="list-disc">
		Intelligent Platform:
		<li class="ml-5">
			Our AI-driven platform automates laborious tasks, saving time and enabling precise
			decision-making.
		</li>
		<br />
		Comprehensive Services:
		<li class="ml-5">
			From deal submission to investment memo generation, Seel offers a seamless experience tailored
			to the needs of private market firms.
		</li>
		<br />
		Built by an Expert Team:
		<li class="ml-5">
			Comprising AI specialists, software developers, and industry professionals, we bring our deep
			expertise to enhance the deal execution processes.
		</li>
	</ul>
</Card>
