<script lang="ts">
	let {
		children,
		tone = 'bone',
		floating = false
	}: {
		children: import('svelte').Snippet;
		tone?: 'bone' | 'forest';
		floating?: boolean;
	} = $props();
</script>

<div class="phone" class:floating data-tone={tone}>
	<div class="notch"></div>
	<div class="screen">
		{@render children()}
	</div>
</div>

<style>
	.phone {
		position: relative;
		width: 100%;
		max-width: 300px;
		aspect-ratio: 300 / 620;
		border-radius: 46px;
		padding: 12px;
		background: #12160f;
		box-shadow:
			0 2px 0 1px rgba(255, 255, 255, 0.06) inset,
			var(--shadow-card);
	}

	.phone.floating {
		box-shadow: 0 40px 80px -30px rgba(22, 24, 15, 0.4);
	}

	.notch {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 96px;
		height: 22px;
		border-radius: 999px;
		background: #12160f;
		z-index: 3;
	}

	.screen {
		position: relative;
		height: 100%;
		border-radius: 36px;
		overflow: hidden;
		background: var(--bone);
		display: flex;
		flex-direction: column;
	}

	.phone[data-tone='forest'] .screen {
		background: var(--forest);
	}
</style>
