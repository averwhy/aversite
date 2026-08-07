<script lang="ts">
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";

    let {
        src,
        alt,
        width = null,
        height = null,
        class: className = "",
    } = $props();

    let loaded = $state(false);
    let failed = $state(false);

    let imgEl = $state<HTMLImageElement | null>(null);

    function handleLoad() {
        loaded = true;
    }

    function handleError() {
        failed = true;
    }

    const sizeStyle = $derived.by(() =>
        width != null || height != null
            ? `width: ${width != null ? `${width}px` : "auto"}; height: ${height != null ? `${height}px` : "auto"};`
            : "",
    );
</script>

<div class={`relative overflow-hidden ${className}`} style={sizeStyle}>
    {#if !loaded || failed}
        <Skeleton class="absolute inset-0 h-full w-full rounded-md" />
    {/if}

    {#if !failed}
        <img
            bind:this={imgEl}
            {src}
            {alt}
            width={width ?? undefined}
            height={height ?? undefined}
            loading="lazy"
            class={`block h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            onload={handleLoad}
            onerror={handleError}
        />
    {/if}
</div>
