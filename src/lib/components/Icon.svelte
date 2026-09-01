<script lang="ts">
	// Minimal inline icon set (Lucide-style 24px stroke paths) so the page
	// ships no icon font / sprite. Stroke inherits `currentColor`.
	type Name =
		| 'leaf'
		| 'scan'
		| 'pulse'
		| 'bell'
		| 'users'
		| 'book'
		| 'sparkles'
		| 'chart'
		| 'github'
		| 'star'
		| 'download'
		| 'check'
		| 'shield'
		| 'arrow'
		| 'droplet'
		| 'flame';

	let { name, size = 24, stroke = 1.75 }: { name: Name; size?: number; stroke?: number } =
		$props();

	const paths: Record<Name, string> = {
		leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-10-1 11-4 16-9 17Z"/><path d="M4 20c2-4 5-7 10-9"/>',
		scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
		pulse: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
		bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>',
		users:
			'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13A4 4 0 0 1 16 11"/>',
		book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
		sparkles:
			'<path d="m12 3 1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9Z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z"/>',
		chart: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6" rx="1"/><rect x="12" y="8" width="3" height="10" rx="1"/><rect x="17" y="4" width="3" height="14" rx="1"/>',
		github:
			'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5.1 5.1 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.6 0C6.7 1.4 5.6 1.7 5.6 1.7a4.8 4.8 0 0 0-.1 3.5A5.1 5.1 0 0 0 4 8.8c0 5 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V22"/>',
		star: '<path d="m12 2 3 6.9 7.5.9-5.5 5 1.4 7.4L12 18.6 5.6 22.2 7 14.8 1.5 9.8 9 8.9Z"/>',
		download: '<path d="M12 3v12"/><path d="m7 12 5 5 5-5"/><path d="M5 21h14"/>',
		check: '<path d="M20 6 9 17l-5-5"/>',
		shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
		arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
		droplet: '<path d="M12 2.5S5 10 5 14a7 7 0 0 0 14 0c0-4-7-11.5-7-11.5Z"/>',
		flame:
			'<path d="M12 22c4 0 7-2.7 7-7 0-4-3-6-4-9-2 2-3 3-4 3 0-3-1-5-3-7 0 5-4 6-4 11 0 4.3 3 9 8 9Z"/>'
	};
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html paths[name]}
</svg>
