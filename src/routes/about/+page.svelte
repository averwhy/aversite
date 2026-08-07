<script lang="ts">
    import LoadableImg from "$lib/components/LoadableImg.svelte";
</script>

<div class="flex items-center justify-center p-1">
    <div class="flex max-w-6xl flex-col gap-12 p-3 leading-9 lg:p-6">
        <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <LoadableImg
                src="https://cdn.averwhy.net/IMG_2199.JPG"
                alt="A young man (me) wearing pink glasses, smiling at the camera making a peace hand gesture"
                width="360"
                height="480"
                class="mx-auto"
            />
            <p class="max-w-prose">
                My name is Avery. I'm a 22 year old Software Engineer from New Hampshire, and I'm passionate about all things computers, especially programming, hardware, and open source software. I've worked with Python the most (though that's changing), but have experience with Javascript/Typescript, C++, Java, Rust, Lua/

                <a
                    href="https://luau.org"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:text-blue-700"
                >
                    Luau
                </a>

                , C#, and GDScript (Godot). I love working with databases too, primarily PostgreSQL.
            </p>
        </section>

        <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <p class="max-w-prose lg:order-1">
                I've always loved technology. Ever since I first started using computers at 7 years old, I was drawn to it more than anything. I played Minecraft almost every day on my families iMac. Since then, my passion for computers grew exponentially. I didn't just like using them- I wanted to know how they worked and how the different applications were made. I still remember being in elementary school when the Hour of Code came to my school, and I tried 'coding' for the first time. Needless to say, I remember staying on the website even after it ended because I wanted to beat all the levels. When I started middle school, I heard about computer classes you could take. They mostly just taught computer competency skills, but enjoyed it nonetheless. In 8th grade, I vividly remember writing Windows Batch scripts for the first time. Then came the time to pick my freshman year classes. The first one I added was Programming with John Ranta.
            </p>
            <LoadableImg
                src="https://cdn.averwhy.net/IMG_2338.jpeg"
                alt="Young toddler sitting on his dad's lap playing Webkinz on an old iMac"
                width="270"
                height="360"
                class="mx-auto lg:order-2"
            />
        </section>

        <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <LoadableImg
                src="https://cdn.averwhy.net/IMG_roboticsvarsityletter.jpg"
                alt="A teenager holding a certificate that reads 'FIRST Robotics Certification of Participation', while also holding a Varsity Letter. He is also posing with his mom"
                width="270"
                height="360"
                class="mx-auto"
            />
            <p class="max-w-prose">
                My first programming class was an intro to Python. We used Notepad++ to edit our programs, and John showed us videos on{" "}

                <a
                    href="https://py4e.com"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:text-blue-700"
                >
                    PY4E.
                </a>
                {" "}
                On most of my projects I would go above and beyond because I was curious how I could make my program different. Before I knew it, I found myself joining the Programming Club, along with some others at my school like The Claw (our schools digital magazine).
            </p>
        </section>

        <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <p class="max-w-prose lg:order-1">
                Throughout my years in high school, I took programming classes every year/semester. Some of the things I learned include but aren't limited to: Python & Pygame, some Rust, Javascript, and Java. Come Sophomore year, I found myself getting involved in FIRST Robotics. I found my calling there in a team environment- kids my age working towards specific goals in a very collaborative setting. I stayed in FIRST Robotics through covid and continued competing until I graduated. In order to graduate though, I needed to complete my{" "}
                <span>senior project.</span>
                For that, I choose to take on a unique project: I made{" "}

                <a
                    href="https://github.com/averwhy/treasure-dig-vr?tab=readme-ov-file#treasuredig-vr"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:text-blue-700"
                >
                    a VR game
                </a>
                {" "}
                in the Godot Game engine using GDScript, a Pythonic-like language.
            </p>
            <LoadableImg
                src="https://cdn.averwhy.net/december2019HOC.png"
                alt="A newspaper article showing students posing with their teacher"
                width="270"
                height="360"
                class="mx-auto lg:order-2"
            />
        </section>

        <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <LoadableImg
                src="https://cdn.averwhy.net/meSeta.jpg"
                alt="A freshman college student standing in front of the School of Engineering, Technology and Aeronautics"
                width="270"
                height="360"
                class="mx-auto"
            />
            <p class="max-w-prose">
                Come the Covid pandemic, everything stopped. I needed something to keep my hands busy, so I started a new Discord bot project, named EconomyX. I began writing this bot from the ground up using{" "}

                <a
                    href="https://averwhy.net/portfolio"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:text-blue-700"
                >
                    discord.py
                </a>

                , all whilst maintaining (and slowly working on) my other bot fishy.py. I share a bit more of the bots specific's details on my portfolio page. That bot today has since amassed over 960 guilds with over a thousand different players. <br />
                Fast foward to the end of high school, I eagerly started college at SNHU which allowed me to take a handful of more focused classes that have fostered my interests a lot.
            </p>
        </section>

        <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <p class="max-w-prose lg:order-1">
                Throughout my time at SNHU I worked on a variety of different projects- including full stack applications, mobile apps, Kubernetes clusters, games and more. After graduating, I started at BAE Systems as a Software Engineer, mainly working with C++ in embedded system environments. So far I've learned a ton and can't wait to continue learning and growing! I'm also working on a handful of hobby projects, which you can view on my portfolio. Thanks for reading about me!
            </p>
            <LoadableImg
                src="https://cdn.averwhy.net/IMG_2165.jpeg"
                alt="Three young students holding a prize check after winning a programming competition"
                width="270"
                height="360"
                class="mx-auto lg:order-2"
            />
        </section>
    </div>
</div>
