<script lang="ts">
	import Icon from './Icon.svelte';
	import PhoneHome from './PhoneHome.svelte';
	import { APK_URL, APK_FILENAME, GITHUB_URL, APP_VERSION, APK_SIZE, MIN_ANDROID } from '$lib/config';
</script>

<section class="hero">
	<div class="wrap grid">
		<div class="copy">
			<span class="eyebrow"><Icon name="leaf" size={13} /> Free · Open source · Android</span>
			<h1>
				Keep every plant<br />
				<span class="accent">alive and thriving</span><br />
				from one pocket garden.
			</h1>
			<p class="lede">
				PlantPal scans and identifies your plants, builds a care schedule, nudges you when
				something needs water, and tracks your whole garden’s health — with an AI plant doctor
				for the bad days.
			</p>

			<div class="actions">
				<a class="btn btn--primary" href={APK_URL} download={APK_FILENAME}>
					<Icon name="download" size={17} /> Download for Android
				</a>
				<a class="btn btn--ghost" href={GITHUB_URL} target="_blank" rel="noopener">
					<Icon name="star" size={16} /> Star on GitHub
				</a>
			</div>

			<ul class="meta">
				<li><Icon name="check" size={14} /> v{APP_VERSION}</li>
				<li><Icon name="check" size={14} /> {APK_SIZE} APK</li>
				<li><Icon name="check" size={14} /> {MIN_ANDROID}</li>
			</ul>
		</div>

		<div class="stage">
			<div class="blob"></div>
			<div class="leaf leaf-a"><Icon name="leaf" size={120} /></div>
			<div class="leaf leaf-b"><Icon name="leaf" size={84} /></div>
			<PhoneHome />
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(48px, 8vw, 96px) clamp(64px, 10vw, 120px);
		overflow: hidden;
	}
	.grid {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 48px;
		align-items: center;
	}
	.copy {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 22px;
	}
	h1 {
		font-size: clamp(38px, 6.4vw, 68px);
	}
	.accent {
		color: var(--forest);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
		margin: 4px 0 0;
		padding: 0;
		list-style: none;
		font-size: 13px;
		font-weight: 600;
		color: var(--ink-55);
	}
	.meta li {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.meta :global(svg) {
		color: var(--forest);
	}

	.stage {
		position: relative;
		display: grid;
		place-items: center;
		min-height: 560px;
	}
	.blob {
		position: absolute;
		inset: 6% 4%;
		border-radius: 46% 54% 60% 40% / 52% 44% 56% 48%;
		background: radial-gradient(circle at 30% 30%, #b3c6a0, #93a87e);
		filter: blur(2px);
		opacity: 0.55;
	}
	.leaf {
		position: absolute;
		color: var(--forest);
		opacity: 0.16;
	}
	.leaf-a {
		top: -12px;
		right: 2%;
		transform: rotate(24deg);
	}
	.leaf-b {
		bottom: 4%;
		left: -4%;
		transform: rotate(-140deg);
		color: var(--forest);
		opacity: 0.14;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
			gap: 12px;
		}
		.stage {
			min-height: 520px;
		}
		.copy {
			align-items: flex-start;
		}
	}
</style>
