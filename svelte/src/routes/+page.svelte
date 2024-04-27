<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body class="h-screen w-screen bg-cat-base">
        <div class="flex justify-between items-center p-4">
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img
                        src="https://cdn.discordapp.com/avatars/858431740242952203/a_d44b884984a0725316652a40b1564f03.gif?size=1024"
                        alt="User Profile"
                    />
                </div>
            </div>
            <div class="dropdown dropdown-hover">
            <button
                tabindex="-1"
                class="btn m-1 bg-cat-mantle text-cat-subtext0"
                aria-haspopup="true"
                aria-expanded="false">Quick Links</button
            >
            <ul
                tabindex="-1"
                class="dropdown-content z-10 menu p-2 shadow bg-cat-mantle rounded-box w-52 ml-[-84px]"
                aria-hidden="true"
            >
                <li>
                    <a class="text-cat-subtext0 flex items-center" href="/projects">
                        <img
                            src="/file-folder.png"
                            alt="Projects"
                            class="h-6 mr-2 transition-transform duration-200 ease-out hover:transform-gpu hover:scale-125"
                        />Projects
                    </a>
                </li>
                <li>
                    <a class="text-cat-subtext0 flex items-center" href="/music">
                        <img
                            src="/headphones.png"
                            alt="Music"
                            class="h-6 mr-2 transition-transform duration-200 ease-out hover:transform-gpu hover:scale-125"
                        />Music
                    </a>
                </li>
                <li>
                    <a class="text-cat-subtext0 flex items-center" href="/contact">
                        <img
                            src="/envelope.png"
                            alt="Contact Me"
                            class="h-6 mr-2 transition-transform duration-200 ease-out hover:transform-gpu hover:scale-125"
                        />Contact Me
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </body>
</html>
