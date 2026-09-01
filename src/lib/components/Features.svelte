<script lang="ts">
	import Icon from './Icon.svelte';

	const features = [
		{
			icon: 'scan',
			title: 'Scan & identify',
			body: 'Point your camera at any plant. PlantPal names the species and loads its care profile in seconds.',
			tone: 'light'
		},
		{
			icon: 'pulse',
			title: 'AI plant doctor',
			body: 'Describe the yellow leaf or send a photo. Get a likely diagnosis and a fix you can actually follow.',
			tone: 'forest'
		},
		{
			icon: 'bell',
			title: 'Smart reminders',
			body: 'Watering, feeding, misting and rotation scheduled from each plant’s real needs — delivered when you ask.',
			tone: 'light'
		},
		{
			icon: 'chart',
			title: 'Garden health score',
			body: 'One number for your whole collection, trended over time, so you can see a slump before a plant does.',
			tone: 'light'
		},
		{
			icon: 'flame',
			title: 'Care streaks',
			body: 'Keep the streak alive. Small, honest nudges that make consistent care a habit instead of a chore.',
			tone: 'forest'
		},
		{
			icon: 'users',
			title: 'A community that helps',
			body: 'Share wins, ask questions, get answers. Replies and likes land straight in your notifications.',
			tone: 'light'
		}
	] as const;
</script>

<section id="features" class="section">
	<div class="wrap">
		<div class="head">
			<span class="eyebrow"><Icon name="sparkles" size={13} /> What it does</span>
			<h2>Everything a plant needs,<br />in one calm app.</h2>
			<p class="lede">
				No spreadsheets, no guesswork. PlantPal turns scattered plant care into a routine you
				can keep.
			</p>
		</div>

		<div class="grid">
			{#each features as f (f.title)}
				<article class:forest={f.tone === 'forest'}>
					<span class="chip"><Icon name={f.icon} size={20} /></span>
					<h3>{f.title}</h3>
					<p>{f.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.head {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 44px;
		max-width: 640px;
	}
	h2 {
		font-size: clamp(28px, 4.4vw, 46px);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 18px;
	}
	article {
		background: var(--card);
		border-radius: var(--radius);
		padding: 26px 24px 28px;
		box-shadow: var(--shadow-soft);
		display: flex;
		flex-direction: column;
		gap: 12px;
		min-height: 210px;
	}
	article.forest {
		background: var(--forest);
		color: var(--bone);
	}
	.chip {
		width: 44px;
		height: 44px;
		border-radius: 14px;
		background: var(--pale1);
		color: var(--forest);
		display: grid;
		place-items: center;
	}
	article.forest .chip {
		background: rgba(238, 240, 230, 0.14);
		color: var(--lime);
	}
	h3 {
		font-size: 18px;
		letter-spacing: -0.03em;
	}
	article p {
		font-size: 13.5px;
		line-height: 1.55;
		color: var(--ink-55);
	}
	article.forest p {
		color: rgba(238, 240, 230, 0.78);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
		article {
			min-height: 0;
		}
	}
</style>
