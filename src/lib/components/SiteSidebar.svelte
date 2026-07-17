<script lang="ts">
    import CodeIcon from "@lucide/svelte/icons/code";
    import HouseIcon from "@lucide/svelte/icons/house";
    import PersonStanding from "@lucide/svelte/icons/person-standing";
    import Images from "@lucide/svelte/icons/images";
    import Guitar from "@lucide/svelte/icons/guitar";
    import TextInitial from "@lucide/svelte/icons/text-initial";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    // Menu items.
    const items = [
        {
            title: "home",
            url: "/",
            icon: HouseIcon,
            target: "_self",
        },
        {
            title: "about",
            url: "about",
            icon: PersonStanding,
            target: "_self",
        },
        {
            title: "portfolio",
            url: "portfolio",
            icon: CodeIcon,
            target: "_self",
        },
        {
            title: "gallery",
            url: "gallery",
            icon: Images,
            target: "_self",
        },
        {
            title: "music",
            url: "music",
            icon: Guitar,
            target: "_self",
        },
        {
            title: "blog",
            url: "https://blog.averwhy.net",
            icon: TextInitial,
            target: "_blank",
        },
    ];
</script>

<Sidebar.Root variant="sidebar">
    <Sidebar.Content>
        <Sidebar.Group>
            <!-- <Sidebar.GroupLabel>Application</Sidebar.GroupLabel> -->
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    {#each items as item (item.title)}
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton>
                                {#snippet child({ props })}
                                    <a href={item.url} target={item.target} {...props}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                    {/each}
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
    </Sidebar.Content>
</Sidebar.Root>
