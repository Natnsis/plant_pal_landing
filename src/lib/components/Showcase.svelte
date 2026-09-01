<script lang="ts">
	import Icon from './Icon.svelte';
	import PhoneScan from './PhoneScan.svelte';
	import PhoneCommunity from './PhoneCommunity.svelte';
</script>

<section id="showcase" class="section showcase">
	<div class="wrap">
		<div class="row">
			<div class="text">
				<span class="eyebrow"><Icon name="scan" size={13} /> Scan → care plan</span>
				<h2>Meet a plant once.<br />Care for it forever.</h2>
				<p class="lede">
					A single scan gives you the species, its light and water needs, pet-safety, and a
					recurring schedule — already on your calendar before you’ve put the pot down.
				</p>
				<ul class="ticks">
					<li><Icon name="check" size={15} /> Works from camera or gallery</li>
					<li><Icon name="check" size={15} /> Editable cadence per task</li>
					<li><Icon name="check" size={15} /> Growth photos & journal built in</li>
				</ul>
			</div>
			<div class="art art-a">
				<div class="halo"></div>
				<PhoneScan />
			</div>
		</div>

		<div class="row reverse">
			<div class="text">
				<span class="eyebrow"><Icon name="users" size={13} /> Not alone with it</span>
				<h2>The garden gets<br />easier together.</h2>
				<p class="lede">
					Post a leaf that’s misbehaving and the community weighs in. Every reply and like
					comes back as a notification, and tapping it drops you straight into the thread.
				</p>
				<ul class="ticks">
					<li><Icon name="check" size={15} /> Ask, showcase, or share a tip</li>
					<li><Icon name="check" size={15} /> Replies &amp; likes hit your inbox</li>
					<li><Icon name="check" size={15} /> Tap a notification → open the thread</li>
				</ul>
			</div>
			<div class="art art-b">
				<div class="halo"></div>
				<PhoneCommunity />
			</div>
		</div>
	</div>
</section>

<style>
	.showcase {
		background: linear-gradient(180deg, var(--bone), var(--field));
	}
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
		align-items: center;
	}
	.row + .row {
		margin-top: clamp(64px, 9vw, 120px);
	}
	.text {
		display: flex;
		flex-direction: column;
		gap: 18px;
		align-items: flex-start;
	}
	h2 {
		font-size: clamp(28px, 4.6vw, 48px);
	}
	.ticks {
		list-style: none;
		margin: 4px 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 14px;
		font-weight: 500;
	}
	.ticks li {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.ticks :global(svg) {
		color: var(--forest);
		flex: none;
	}

	.art {
		position: relative;
		display: grid;
		place-items: center;
		min-height: 560px;
	}
	.halo {
		position: absolute;
		width: 78%;
		aspect-ratio: 1;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 35%, #cdddb9, #a3b790);
		opacity: 0.5;
	}

	@media (max-width: 900px) {
		.row,
		.row.reverse {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		.art {
			min-height: 520px;
			order: 2;
		}
		.text {
			order: 1;
		}
	}
</style>
