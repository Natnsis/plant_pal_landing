<script lang="ts">
	import { base } from '$app/paths';
	import { GITHUB_URL } from '$lib/config';
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="wrap inner">
		<a class="brand" href="/">
			<img class="mark" src="{base}/icon.jpg" alt="" width="26" height="26" /> PlantPal
		</a>
		<nav>
			<a href="#features">Features</a>
			<a href="#showcase">The app</a>
			<a href="#install">Install</a>
			<a href={GITHUB_URL} target="_blank" rel="noopener">GitHub</a>
		</nav>
		<span class="fine">© {year} PlantPal · Open source · Made for plant people</span>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--ink-12);
		padding-block: 32px;
	}
	.inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-weight: 700;
		letter-spacing: -0.03em;
	}
	.mark {
		width: 26px;
		height: 26px;
		border-radius: 8px;
		object-fit: cover;
		display: block;
	}
	nav {
		display: flex;
		gap: 18px;
		font-size: 13.5px;
		font-weight: 500;
		color: var(--ink-55);
	}
	nav a:hover {
		color: var(--ink);
	}
	.fine {
		margin-left: auto;
		font-size: 12.5px;
		color: var(--ink-40);
	}
	@media (max-width: 640px) {
		.fine {
			margin-left: 0;
		}
	}
</style>
