<script lang="ts">
	import Icon from './Icon.svelte';
	import PhoneMock from './PhoneMock.svelte';
</script>

<PhoneMock tone="forest" floating>
	<div class="scan">
		<div class="view">
			<div class="frame"></div>
			<div class="leaf"><Icon name="leaf" size={64} /></div>
			<span class="hint">Hold steady — centring the leaf</span>
		</div>
		<div class="result">
			<span class="k">Identified</span>
			<b>Monstera deliciosa</b>
			<span class="sci">Swiss cheese plant · 96% match</span>
			<div class="pills">
				<span>Bright indirect</span>
				<span>Water weekly</span>
				<span>Pet-unsafe</span>
			</div>
			<button>Add to my plants</button>
		</div>
	</div>
</PhoneMock>

<style>
	.scan {
		height: 100%;
		display: flex;
		flex-direction: column;
		color: var(--bone);
	}
	.view {
		position: relative;
		flex: 1;
		margin: 40px 14px 12px;
		border-radius: 24px;
		background: linear-gradient(160deg, #3c7340, #2f5d33 60%, #24491f);
		display: grid;
		place-items: center;
		overflow: hidden;
	}
	.frame {
		position: absolute;
		inset: 26px;
		border: 2px dashed rgba(238, 240, 230, 0.5);
		border-radius: 20px;
	}
	.leaf {
		color: rgba(238, 240, 230, 0.9);
	}
	.hint {
		position: absolute;
		bottom: 16px;
		font-size: 10px;
		font-weight: 500;
		color: rgba(238, 240, 230, 0.8);
	}
	.result {
		background: var(--bone);
		color: var(--ink);
		border-radius: 24px 24px 36px 36px;
		padding: 16px 16px 20px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.k {
		font-size: 9.5px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--forest);
	}
	.result b {
		font-size: 15px;
		letter-spacing: -0.03em;
	}
	.sci {
		font-size: 10px;
		color: var(--ink-55);
	}
	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin: 8px 0 12px;
	}
	.pills span {
		font-size: 9px;
		font-weight: 600;
		padding: 5px 9px;
		border-radius: 999px;
		background: var(--pale1);
		color: var(--forest);
	}
	button {
		font: inherit;
		font-size: 11.5px;
		font-weight: 600;
		border: 0;
		border-radius: 999px;
		padding: 11px;
		background: var(--forest);
		color: var(--bone);
	}
</style>
