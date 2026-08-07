<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import lightGallery from "lightgallery";
    import lgZoom from "lightgallery/plugins/zoom";
    import lgThumbnail from "lightgallery/plugins/thumbnail";

    import "lightgallery/css/lightgallery.css";
    import "lightgallery/css/lg-zoom.css";
    import "lightgallery/css/lg-thumbnail.css";

    import LoadableImg from "$lib/components/LoadableImg.svelte";

    let galleryContainer: HTMLDivElement | null = null;
    let lgInstance: any = null;

    let { images, class: className = "" } = $props();

    onMount(() => {
        if (!galleryContainer) return;

        lgInstance = lightGallery(galleryContainer, {
            plugins: [lgZoom, lgThumbnail],
            speed: 500,
            licenseKey: "1000-0000-000-0002", // this is stupid. if you are a library developer don't ever EVER do this
        });
    });

    onDestroy(() => {
        lgInstance?.destroy?.();
    });
</script>

<div bind:this={galleryContainer} class={className}>
    {#each images as img}
        <LoadableImg src={img.url} alt={img.caption} />
    {/each}
</div>
