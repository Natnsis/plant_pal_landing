<script lang="ts">
	import Icon from './Icon.svelte';
	import { GITHUB_URL, APK_URL, APK_FILENAME } from '$lib/config';
</script>

<section class="section">
	<div class="wrap">
		<div class="band">
			<div class="leaf leaf-a"><Icon name="leaf" size={140} /></div>
			<div class="leaf leaf-b"><Icon name="leaf" size={100} /></div>

			<span class="eyebrow light"><Icon name="github" size={13} /> Open source</span>
			<h2>Built in the open.<br />A star genuinely helps.</h2>
			<p>
				PlantPal — the Flutter app and the Go API — is free to use, read, fork and self-host.
				If it’s useful to you, starring the repo is the easiest way to help other plant
				people find it.
			</p>
			<div class="actions">
				<a class="btn btn--lime" href={GITHUB_URL} target="_blank" rel="noopener">
					<Icon name="star" size={16} /> Star on GitHub
				</a>
				<a class="btn ghost-on-dark" href={APK_URL} download={APK_FILENAME}>
					<Icon name="download" size={16} /> Download the app
				</a>
			</div>
			<code class="repo">{GITHUB_URL.replace('https://', '')}</code>
		</div>
	</div>
</section>

<style>
	.band {
		position: relative;
		overflow: hidden;
		background: var(--forest);
		color: var(--bone);
		border-radius: var(--radius-lg);
		padding: clamp(40px, 7vw, 80px);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
	}
	h2 {
		font-size: clamp(28px, 4.6vw, 48px);
	}
	.band p {
		font-size: 15px;
		line-height: 1.6;
		color: rgba(238, 240, 230, 0.8);
		max-width: 52ch;
	}
	.eyebrow.light {
		background: rgba(238, 240, 230, 0.14);
		color: var(--lime);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 6px;
	}
	.ghost-on-dark {
		background: transparent;
		color: var(--bone);
		border: 1px solid rgba(238, 240, 230, 0.3);
	}
	.ghost-on-dark:hover {
		background: rgba(238, 240, 230, 0.1);
	}
	.repo {
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 12.5px;
		color: rgba(238, 240, 230, 0.7);
		background: rgba(238, 240, 230, 0.1);
		padding: 6px 12px;
		border-radius: 999px;
	}
	.leaf {
		position: absolute;
		color: rgba(238, 240, 230, 0.08);
	}
	.leaf-a {
		top: -20px;
		right: 40px;
		transform: rotate(30deg);
	}
	.leaf-b {
		bottom: -30px;
		right: 22%;
		transform: rotate(-120deg);
	}
</style>
