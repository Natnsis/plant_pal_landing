<script lang="ts">
	import Icon from './Icon.svelte';
	import { base } from '$app/paths';
	import { APK_URL, APK_FILENAME, GITHUB_URL } from '$lib/config';
</script>

<header class="nav">
	<div class="wrap inner">
		<a class="brand" href="/">
			<img class="mark" src="{base}/icon.jpg" alt="" width="30" height="30" />
			PlantPal
		</a>

		<nav class="links">
			<a href="#features">Features</a>
			<a href="#showcase">The app</a>
			<a href="#install">Install</a>
			<a href={GITHUB_URL} target="_blank" rel="noopener">GitHub</a>
		</nav>

		<div class="cta">
			<a class="btn btn--ghost btn--sm gh" href={GITHUB_URL} target="_blank" rel="noopener">
				<Icon name="star" size={15} /> Star
			</a>
			<a class="btn btn--primary btn--sm" href={APK_URL} download={APK_FILENAME}>
				<Icon name="download" size={15} /> Download
			</a>
		</div>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--bone) 82%, transparent);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--ink-12);
	}
	.inner {
		display: flex;
		align-items: center;
		gap: 24px;
		height: 68px;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-weight: 700;
		font-size: 17px;
		letter-spacing: -0.03em;
	}
	.mark {
		width: 30px;
		height: 30px;
		border-radius: 10px;
		object-fit: cover;
		display: block;
	}
	.links {
		display: flex;
		gap: 22px;
		margin-left: 12px;
		font-size: 14px;
		font-weight: 500;
		color: var(--ink-55);
	}
	.links a:hover {
		color: var(--ink);
	}
	.cta {
		margin-left: auto;
		display: flex;
		gap: 10px;
	}
	@media (max-width: 780px) {
		.links {
			display: none;
		}
		.cta .gh {
			display: none;
		}
	}
</style>
