<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    type ProjectLink = {
        label: string;
        href: string;
        disabled?: boolean;
    };

    type Project = {
        name: string;
        year: string;
        summary: string;
        stack: string[];
        highlight: string;
        links: ProjectLink[];
    };

    const projects: Project[] = [
        {
            name: "Fluxus",
            year: "ongoing",
            summary: `High performance MacOS DJ software built for flexibility and control. This project is still in the planning phase but I plan on working on it for the next few years.`,
            stack: ["Swift", "SwiftUI"],
            highlight: "MacOS app",
            links: [
                { label: "GitHub", href: "https://github.com/averwhy/fluxus" },
            ],
        },
        {
            name: "Penpoint",
            year: "2025-ongoing",
            summary: `Penpoint is an application for rewarding college students for attending
        events. Built on SvelteKit, students at my school will be able add a wallet pass with a QR code to their phone,
        and when they attend an event a member of the Student Government will scan their QR code, and they earn points
        for attending the event!
        This project was a part of my role as the President of Student Government
        Organization at my college.`,
            stack: ["SvelteKit", "Tailwind", "PostgreSQL"],
            highlight: "Web app",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/averwhy/Penpoint",
                },
            ],
        },
        {
            name: "mcctf.gg",
            year: "upcoming",
            summary: `So I may have come across the source code of *the* MCCTF plugin, originally made/run by MCPVP. I plan on creating a dedicated CTF server since the network that used to run it shut down in 2023. Stay tuned..`,
            stack: ["Java"],
            highlight: "Minecraft server",
            links: [
                {
                    label: "Coming soon...",
                    href: "#",
                    disabled: true,
                },
            ],
        },
        {
            name: "packUP",
            year: "2025",
            summary: `packUP is a simple trip planning app that me and my team of peers in
      CS-360 (Mobile Application Development) worked on. We used React Native
      with Expo & GluestackUI, then we built a backend with Express.js and
      PostgreSQL. The app allows users to create trips, and it will
      automatically add items to their list based on their answers to a
      questionaire. Due to the nature of the class, we weren't able to implement
      everything we wanted to, but it was a great learning experience.`,
            stack: ["React Native", "Expo", "PostgreSQL"],
            highlight: "Mobile app",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/orgs/PackUpApp/repositories",
                },
            ],
        },
        {
            name: "Timbot",
            year: "2022-2026",
            summary: `TimBot is the main utility and moderation bot for the SNHU Esports Discord server.
      TimBot was initally made as a ticket managing bot, so 2,000+ users could
      seek support for recruitment, tech issues with our Arena, or general
      program questions if they needed to. However over the time it's been a bot
      for the server, multiple features have been added such as 'reaction'
      roles, GGCircuit integration, and more.`,
            stack: ["Python", "discord.py", "PostgreSQL"],
            highlight: "Discord bot",
            links: [
                {
                    label: "Discord",
                    href: "https://discord.gg/9jEMJgZ",
                },
            ],
        },
        {
            name: "EconomyX",
            year: "2020-2026",
            summary: `EconomyX is a unique & simple economy game bot for Discord. This project began in 2020, starting out with just a few commands and a lightweight SQLite database. Over the years I adding a variety of different features, upgraded it with PostgreSQL, and more. In May 2026, I decided to sunset the project to focus on newer things.`,
            stack: ["Python", "discord.py", "PostgreSQL"],
            highlight: "Discord bot",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/averwhy/EconomyX",
                },
            ],
        },
        {
            name: "fishy.py",
            year: "2020-2026",
            summary: `Fishy.py is a re-creation and revival of the old Discord bot Fishy, which was a reaction-based fishing game with over 16,000 catchable fish. This was my first major bot project that taught me a lot about Python, SQLite and common coding practices. While not as successful as some of my other projects, it was still a project i throughly enjoyed making, as well as learned a lot through. In May 2026, I decided to sunset the project to focus on newer things.`,
            stack: ["Python", "discord.py", "PostgreSQL"],
            highlight: "Discord bot",
            links: [{ label: "GitHub", href: "https://github.com/averwhy" }],
        },
        {
            name: "Scouting 2022/2023",
            year: "2022-2023",
            summary: `During my time on my high school's FIRST Robotics team, I made a new
      Scouting website using React that stored scouting data in Firestore, it
      then compiled that data in a few different views, allowing the team to see
      vital information by team or match.`,
            stack: ["React", "Firebase", "Firestore"],
            highlight: "Web app",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/averwhy/Scouting2022",
                },
            ],
        },
        {
            name: "TreasureDig VR",
            year: "2021-2022",
            summary: `For my high school's senior project, I chose to tackle a new project that
      I had not tried or learned before. Godot Engine is a free and open source
      engine that some of my friends had been using for projects. So I came up
      with TreasureDigVR, a simple game made for the Oculus Quest 2. After
      researching all aspects of VR, including the games industry, technology
      and more, I presented this and achieved Senior Project Honors.`,
            stack: ["Godot", "GDScript", "VR"],
            highlight: "VR Game",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/averwhy/treasure-dig-vr",
                },
            ],
        },
        {
            name: "aversite",
            year: "2024-present",
            summary: `My portfolio site! This is the second iteration, built with SvelteKit, which is easily my favorite framework to work with. My first version of my site was made with React.`,
            stack: ["SvelteKit", "Tailwind", "Cloudflare"],
            highlight: "Website",
            links: [
                {
                    label: "GitHub",
                    href: "https://github.com/averwhy/aversite",
                },
                { label: "About", href: "/about" },
            ],
        },
    ];

    const accents = [
        "var(--foreground)",
        "oklch(0.62 0 0)",
        "oklch(0.38 0 0)",
        "oklch(0.7 0 0)",
    ];
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta
        name="description"
        content="Minimal portfolio page showcasing coding projects, links, and the tools used to build them."
    />
</svelte:head>

<div class="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
    <div class="pointer-events-none absolute inset-0 -z-10"></div>

    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div class="space-y-4">
            <p
                class="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
                personal coding projects, experiments, and other work i've
                gotten myself into
            </p>
        </div>

        <section
            class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]"
        >
            {#each projects as project, index}
                <article
                    class="group relative flex h-full flex-col overflow-hidden border border-border bg-card/70 p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-7"
                    style={`--project-accent:${accents[index % accents.length]};`}
                >
                    <div class="absolute inset-x-0 top-0 h-px opacity-80"></div>
                    <div class="relative z-10 flex flex-1 flex-col gap-6">
                        <div
                            class="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                        >
                            <span>0{index}</span>
                            <span>/</span>
                            <span>{project.year}</span>
                            <span>/</span>
                            <span class="text-foreground"
                                >{project.highlight}</span
                            >
                        </div>

                        <div class="space-y-4">
                            <h2
                                class="text-2xl leading-none tracking-[-0.04em] sm:text-[1.7rem]"
                            >
                                {project.name}
                            </h2>
                            <p
                                class="max-w-prose text-sm leading-7 text-muted-foreground sm:text-[0.95rem]"
                            >
                                {project.summary}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-2 pt-1">
                            {#each project.stack as item}
                                <span
                                    class="border border-border px-2 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground"
                                >
                                    {item}
                                </span>
                            {/each}
                        </div>

                        <div
                            class="mt-auto flex flex-col gap-4 border-t border-border pt-5"
                        >
                            <div class="flex flex-wrap gap-3">
                                {#each project.links as link}
                                    <Button
                                        href={link.href}
                                        target={link.href.startsWith("http")
                                            ? "_blank"
                                            : undefined}
                                        rel={link.href.startsWith("http")
                                            ? "noreferrer noopener"
                                            : undefined}
                                        variant={link.label === "GitHub"
                                            ? "default"
                                            : "outline"}
                                        disabled={link.disabled ?? false}
                                        size="sm"
                                        class="min-w-0 justify-between gap-3 rounded-none border-border px-3 uppercase tracking-[0.2em]"
                                    >
                                        <span>{link.label}</span>
                                        <span aria-hidden="true">↗</span>
                                    </Button>
                                {/each}
                            </div>
                        </div>
                    </div>
                </article>
            {/each}
        </section>
    </div>
</div>
