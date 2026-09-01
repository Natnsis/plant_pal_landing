<script lang="ts">
	import Icon from './Icon.svelte';
	import PhoneMock from './PhoneMock.svelte';

	const posts = [
		{
			who: 'Sila M.',
			cat: 'Showcase',
			text: 'Three months of consistent misting and my Calathea finally unfurled a perfect new leaf 🌿',
			likes: 42,
			comments: 7,
			tone: 'light'
		},
		{
			who: 'Dawit K.',
			cat: 'Q&A',
			text: 'Yellowing lower leaves on a pothos — overwatering or just age?',
			likes: 11,
			comments: 5,
			tone: 'forest'
		}
	];
</script>

<PhoneMock floating>
	<div class="feed">
		<header>
			<b>Community</b>
			<div class="tabs">
				<span class="on">All</span><span>Tips</span><span>Q&A</span>
			</div>
		</header>
		{#each posts as p (p.who)}
			<article class:forest={p.tone === 'forest'}>
				<div class="top">
					<i>{p.who[0]}</i>
					<div>
						<b>{p.who}</b>
						<span>{p.cat}</span>
					</div>
				</div>
				<p>{p.text}</p>
				<div class="meta">
					<span><Icon name="star" size={12} /> {p.likes}</span>
					<span><Icon name="users" size={12} /> {p.comments}</span>
				</div>
			</article>
		{/each}
	</div>
</PhoneMock>

<style>
	.feed {
		padding: 40px 16px 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		height: 100%;
	}
	header b {
		font-size: 15px;
		letter-spacing: -0.03em;
	}
	.tabs {
		display: flex;
		gap: 6px;
		margin-top: 8px;
	}
	.tabs span {
		font-size: 9.5px;
		font-weight: 600;
		padding: 5px 10px;
		border-radius: 999px;
		background: var(--field);
		color: var(--ink-55);
	}
	.tabs .on {
		background: var(--forest);
		color: var(--bone);
	}
	article {
		background: var(--card);
		border-radius: 18px;
		padding: 12px;
		box-shadow: var(--shadow-soft);
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	article.forest {
		background: var(--forest);
		color: var(--bone);
	}
	.top {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.top i {
		width: 24px;
		height: 24px;
		border-radius: 8px;
		background: var(--pale2);
		color: var(--forest);
		display: grid;
		place-items: center;
		font-style: normal;
		font-weight: 700;
		font-size: 11px;
	}
	article.forest .top i {
		background: rgba(238, 240, 230, 0.16);
		color: var(--bone);
	}
	.top b {
		font-size: 11px;
		display: block;
	}
	.top span {
		font-size: 9px;
		opacity: 0.65;
	}
	article p {
		font-size: 10.5px;
		line-height: 1.5;
	}
	.meta {
		display: flex;
		gap: 14px;
		font-size: 9.5px;
		font-weight: 600;
		opacity: 0.75;
	}
	.meta span {
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}
</style>
