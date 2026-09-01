<script lang="ts">
	import Icon from './Icon.svelte';
	import PhoneMock from './PhoneMock.svelte';

	const bars = [40, 55, 48, 70, 62, 80, 58, 46, 66, 74, 52, 88, 60, 72];
</script>

<PhoneMock floating>
	<div class="home">
		<header>
			<div class="avatar">N</div>
			<div class="hi">
				<span>Good morning</span>
				<strong>Nati</strong>
			</div>
			<div class="bell">
				<Icon name="bell" size={16} />
				<i class="dot">3</i>
			</div>
		</header>

		<h3>3 plants need<br />you today.</h3>

		<div class="health">
			<div class="hrow">
				<span class="chip"><Icon name="flame" size={12} /> Care streak · 12 days</span>
				<span class="muted">1 of 4 done</span>
			</div>
			<div class="big"><b>92</b>%</div>
			<span class="muted sm">Garden health across your plants</span>
			<div class="bars">
				{#each bars as h, i (i)}
					<span style="height:{h}%" class:hi={i >= 11}></span>
				{/each}
			</div>
		</div>

		<div class="sec">
			<span>Today’s care</span>
			<em>All tasks</em>
		</div>

		<div class="task">
			<i class="tick"><Icon name="droplet" size={13} /></i>
			<div><b>Water Monstera</b><span>Living room · 08:00</span></div>
			<span class="tag">DUE</span>
		</div>
		<div class="task">
			<i class="tick"><Icon name="droplet" size={13} /></i>
			<div><b>Mist Calathea</b><span>Bedroom · 09:00</span></div>
			<span class="tag soft">TODAY</span>
		</div>
	</div>
</PhoneMock>

<style>
	.home {
		padding: 40px 18px 18px;
		font-size: 12px;
		color: var(--ink);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	header {
		display: flex;
		align-items: center;
		gap: 9px;
	}

	.avatar {
		width: 34px;
		height: 34px;
		border-radius: 12px;
		background: var(--forest);
		color: var(--bone);
		display: grid;
		place-items: center;
		font-weight: 700;
		font-size: 13px;
	}

	.hi {
		display: flex;
		flex-direction: column;
		line-height: 1.25;
	}
	.hi span {
		font-size: 10.5px;
		color: var(--ink-55);
	}
	.hi strong {
		font-size: 13.5px;
	}

	.bell {
		margin-left: auto;
		position: relative;
		width: 34px;
		height: 34px;
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.75);
		display: grid;
		place-items: center;
	}
	.bell .dot {
		position: absolute;
		top: -5px;
		right: -4px;
		min-width: 15px;
		height: 15px;
		padding: 0 3px;
		border-radius: 999px;
		background: var(--forest);
		color: var(--bone);
		font-size: 8.5px;
		font-weight: 800;
		font-style: normal;
		display: grid;
		place-items: center;
		border: 2px solid var(--bone);
	}

	h3 {
		font-size: 22px;
		letter-spacing: -0.04em;
	}

	.health {
		background: var(--card);
		border-radius: 22px;
		padding: 13px;
		box-shadow: var(--shadow-soft);
	}
	.hrow {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		background: var(--pale1);
		color: var(--forest);
		font-weight: 600;
		font-size: 9.5px;
		padding: 5px 9px;
		border-radius: 999px;
	}
	.muted {
		color: var(--ink-40);
		font-weight: 600;
		font-size: 10px;
	}
	.muted.sm {
		display: block;
		margin-top: 2px;
	}
	.big {
		font-size: 40px;
		font-weight: 700;
		letter-spacing: -0.05em;
		line-height: 1;
		margin-top: 8px;
	}
	.big b {
		font-weight: 700;
	}
	.bars {
		display: flex;
		align-items: flex-end;
		gap: 4px;
		height: 34px;
		margin-top: 10px;
	}
	.bars span {
		flex: 1;
		border-radius: 3px;
		background: #d6e3c2;
	}
	.bars span:nth-child(odd) {
		background: #c6d9ac;
	}
	.bars span.hi {
		background: var(--forest);
	}

	.sec {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-top: 2px;
	}
	.sec span {
		font-weight: 700;
		font-size: 13px;
		letter-spacing: -0.03em;
	}
	.sec em {
		font-style: normal;
		font-size: 10px;
		font-weight: 600;
		color: var(--forest);
	}

	.task {
		display: flex;
		align-items: center;
		gap: 10px;
		background: var(--card);
		border-radius: 18px;
		padding: 10px 12px;
		box-shadow: var(--shadow-soft);
	}
	.task .tick {
		width: 26px;
		height: 26px;
		border-radius: 9px;
		background: var(--pale1);
		color: var(--forest);
		display: grid;
		place-items: center;
	}
	.task div {
		display: flex;
		flex-direction: column;
		line-height: 1.3;
	}
	.task b {
		font-size: 11.5px;
	}
	.task span {
		font-size: 9.5px;
		color: var(--ink-55);
	}
	.task .tag {
		margin-left: auto;
		font-size: 8.5px;
		font-weight: 800;
		letter-spacing: 0.06em;
		padding: 4px 8px;
		border-radius: 999px;
		background: var(--lime);
		color: var(--ink);
	}
	.task .tag.soft {
		background: var(--pale2);
		color: var(--forest);
	}
</style>
