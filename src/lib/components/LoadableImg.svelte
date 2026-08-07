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
    let computedWidth = $state<number | undefined>(undefined);
    let computedHeight = $state<number | undefined>(undefined);

    function handleLoad() {
        loaded = true;

        if (!imgEl) return;

        if (width == null) computedWidth = imgEl.naturalWidth || undefined;
        if (height == null) computedHeight = imgEl.naturalHeight || undefined;
    }

    function handleError() {
        failed = true;
    }

    const sizeStyle = $derived.by(() =>
        computedWidth || computedHeight
            ? `width: ${computedWidth ? computedWidth + "px" : "auto"}; height: ${computedHeight ? computedHeight + "px" : "auto"};`
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
            width={computedWidth}
            height={computedHeight}
            loading="lazy"
            class={`block h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            onload={handleLoad}
            onerror={handleError}
        />
    {/if}
</div>
