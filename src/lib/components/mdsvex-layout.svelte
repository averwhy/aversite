<script lang="ts">
	let { children } = $props();
</script>

<article class="mdsvex-content">
	{@render children?.()}
</article>

<style>
	.mdsvex-content {
		line-height: 1.75;
	}

	.mdsvex-content :global(h1) {
		margin-bottom: 0.75rem;
		font-size: 2.5rem;
		line-height: 1.1;
		font-weight: 700;
	}

	.mdsvex-content :global(h2) {
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
	}

	.mdsvex-content :global(h3) {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 600;
	}

	.mdsvex-content :global(p) {
		margin-bottom: 1rem;
	}

	.mdsvex-content :global(a) {
		color: rgb(96 165 250);
		text-decoration-line: underline;
		text-underline-offset: 0.2em;
	}

	.mdsvex-content :global(a:hover) {
		color: rgb(29 78 216);
	}
</style>