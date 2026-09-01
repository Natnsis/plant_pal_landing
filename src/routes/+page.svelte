<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Showcase from '$lib/components/Showcase.svelte';
	import Install from '$lib/components/Install.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base } from '$app/paths';

	const title = 'PlantPal — plant care that keeps your garden alive';
	const description =
		'Free, open-source Android app for plant care: scan & identify plants, get an AI plant doctor, smart watering reminders, garden health tracking and a community. Download the APK.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{base}/icon.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{base}/icon.jpg" />
</svelte:head>

<Nav />
<main>
	<Hero />
	<Features />
	<Showcase />
	<Install />
	<OpenSource />
</main>
<Footer />
