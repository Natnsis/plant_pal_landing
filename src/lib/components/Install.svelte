<script lang="ts">
	import Icon from './Icon.svelte';
	import {
		APK_URL,
		APK_FILENAME,
		GITHUB_URL,
		RELEASE_PAGE,
		APP_VERSION,
		APK_SIZE,
		MIN_ANDROID
	} from '$lib/config';

	const steps = [
		{
			title: 'Download the APK',
			body: `Tap the button above on your Android phone (it comes from the <a href="${RELEASE_PAGE}" target="_blank" rel="noopener">GitHub release</a>). You’ll get an <code>.apk</code> file in your Downloads.`
		},
		{
			title: 'Open the file',
			body: 'Tap the download notification, or open it from your Files / Downloads app.'
		},
		{
			title: 'Allow installs from this source',
			body: 'The first time, Android asks permission for your browser or file manager to install apps. Tap <b>Settings</b> → toggle <b>Allow from this source</b> → go back.'
		},
		{
			title: 'Get past Play Protect',
			body: 'Play Protect scans apps from outside the Play Store and shows a warning by default. On the “unsafe app” or “app not scanned” dialog, tap <b>More details</b> → <b>Install anyway</b> (or <b>Install without scanning</b>).',
			warn: true
		},
		{
			title: 'Open PlantPal',
			body: 'Launch it from your app drawer, create an account, and scan your first plant. 🌱'
		}
	];
</script>

<section id="install" class="section install">
	<div class="wrap">
		<div class="head">
			<span class="eyebrow"><Icon name="download" size={13} /> Get the app</span>
			<h2>Install in about a minute.</h2>
			<p class="lede">
				PlantPal isn’t on the Play Store yet, so you install the APK directly from the
				project’s GitHub release — the same build anyone can rebuild from source.
			</p>
		</div>

		<div class="card">
			<div class="dl">
				<div>
					<b>PlantPal for Android</b>
					<span>v{APP_VERSION} · {APK_SIZE} · {MIN_ANDROID}</span>
				</div>
				<a class="btn btn--primary" href={APK_URL} download={APK_FILENAME}>
					<Icon name="download" size={17} /> Download APK
				</a>
			</div>

			<ol class="steps">
				{#each steps as s, i (s.title)}
					<li class:warn={s.warn}>
						<span class="num">{i + 1}</span>
						<div class="body">
							<b>{s.title}</b>
							{#if s.warn}
								<span class="badge"><Icon name="shield" size={13} /> Expected warning</span>
							{/if}
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							<p>{@html s.body}</p>
						</div>
					</li>
				{/each}
			</ol>

			<div class="foot">
				<Icon name="github" size={16} />
				<p>
					Rather build it from source? Clone the repo and run
					<code>flutter build apk --release</code>. Everything you need is in
					<a href={GITHUB_URL} target="_blank" rel="noopener">the app repo</a>.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.head {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 620px;
		margin-bottom: 36px;
	}
	h2 {
		font-size: clamp(28px, 4.4vw, 46px);
	}

	.card {
		background: var(--card);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-card);
		padding: clamp(22px, 4vw, 40px);
	}

	.dl {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 24px;
		border-bottom: 1px solid var(--ink-12);
	}
	.dl b {
		font-size: 17px;
		letter-spacing: -0.02em;
		display: block;
	}
	.dl span {
		font-size: 13px;
		color: var(--ink-55);
		font-weight: 500;
	}

	.steps {
		list-style: none;
		margin: 24px 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.steps li {
		display: flex;
		gap: 16px;
		padding: 16px 0;
		border-bottom: 1px solid var(--ink-12);
	}
	.steps li:last-child {
		border-bottom: 0;
	}
	.num {
		flex: none;
		width: 30px;
		height: 30px;
		border-radius: 10px;
		background: var(--pale1);
		color: var(--forest);
		font-weight: 700;
		font-size: 13px;
		display: grid;
		place-items: center;
	}
	.body b {
		font-size: 15px;
		letter-spacing: -0.02em;
	}
	.body :global(p) {
		font-size: 13.5px;
		line-height: 1.6;
		color: var(--ink-55);
		margin-top: 4px;
	}
	.body :global(code) {
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 12px;
		background: var(--field);
		padding: 1px 6px;
		border-radius: 6px;
		color: var(--ink);
	}
	.body :global(b) {
		color: var(--ink);
	}

	.steps li.warn {
		background: var(--amber-bg);
		border: 0;
		border-radius: var(--radius-sm);
		padding: 16px;
		margin: 6px 0;
	}
	.steps li.warn .num {
		background: rgba(122, 82, 17, 0.16);
		color: var(--amber-fg);
	}
	.steps li.warn .body :global(p) {
		color: var(--amber-fg);
	}
	.steps li.warn .body :global(b) {
		color: var(--amber-fg);
	}
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		margin-left: 10px;
		font-size: 11px;
		font-weight: 700;
		color: var(--amber-fg);
		vertical-align: middle;
	}

	.foot {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		margin-top: 24px;
		padding: 16px;
		background: var(--field);
		border-radius: var(--radius-sm);
	}
	.foot :global(svg) {
		flex: none;
		margin-top: 2px;
	}
	.foot p {
		font-size: 13px;
		line-height: 1.6;
		color: var(--ink-55);
	}
	.foot a {
		color: var(--forest);
		font-weight: 600;
	}
	.foot :global(code) {
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 12px;
		background: var(--card);
		padding: 1px 6px;
		border-radius: 6px;
	}
</style>
