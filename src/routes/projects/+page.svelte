<!DOCTYPE html>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
	<head>
		<!--meta http-equiv="refresh" content="0; url=https://github.com/jbugel-lol?tab=repositories" /-->
		<meta charset="UTF-8" />
		<meta name="robots" content="noindex" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My current projects</title>
	</head>
	<body class="h-screen w-screen bg-cat-base flex justify-center items-center">
		<div class="flex flex-col items-center justify-center">
			<p class="text-cat-text">
				This site is still under construction. Meanwhile, if you want to see my repositories, <a
					href="https://github.com/jbugel-lol?tab=repositories">click here</a
				>.
			</p>
			<span class="loading loading-spinner loading-lg text-cat-text"></span>
		</div>
		<div class="text-center p-16">
			<p class="text-3xl">
				<a href="/">Portfolio</a>
			</p>
			<p class="">
				One of my most recent projects is currently this Portfolio you are reading here
			</p>
			<button class="p-2 border-2 rounded-full border-cat-lavender">
				<a href="#portfolio">Learn more</a>
			</button>
			<div class="text-center p-8">
				<p class="text-3xl">
					<a href="https://jbugel.link">Link Shortener</a>
				</p>
				<p>My Link Shortener with built-in privacy and ease of use</p>
				<button class="p-2 border-2 rounded-full border-cat-lavender">
					<a href="#linkshortener">Learn more</a>
				</button>
				<div class="text-center p-8">
					<p class="text-3xl">
						<a href="/focus">Focus Site</a>
					</p>
					<p>A little Site for focusing on your work</p>
					<button class="p-2 border-2 rounded-full border-cat-lavender">
						<a href="#focus">Learn more</a>
					</button>
					<div class="text-center p-8">
						<p class="text-3xl">
							<a href="/music">My Music </a>
						</p>
						<p>
							I also do Tekk/Hardtekk Music, you can give it a shot if you want, it would support me
							a ton
						</p>
						<button class="p-2 border-2 rounded-full border-cat-lavender">
							<a href="#music">Learn more</a>
						</button>
					</div>
					<div class="p-64" id="portfolio">
						<p class="text-3xl">Portfolio</p>
						<div class="p-4">
							<p>
								So the story about my Portfolio is quite simple, I always wanted to a Website,
								visible to everyone
							</p>
							<p>
								I asked a good friend if they could show me how to make a Website, because they make
								beatiful sites
							</p>
							<p>
								Take a <a href="https://upndevelopment.de">look here.</a>
							</p>
						</div>
					</div>
					<div class="p-64" id="linkshortener">
						<p class="text-3xl">Link Shortener</p>
						<div class="p-4">
							<p>
								At this point I got a bit into selfhosting, I was moving my websites from plesk to a
								KVM.
							</p>
							<p>
								My previous link shortener (YOURLS*) didn't work because of some PHP-Error I
								couldn't solve.
							</p>
							<p>
								Then a other friend helped me with creating this Link Shortener and is right now
								under development, but is going to be released soon.
							</p>
							<p class="p-2">
								* I do not say that YOURLS is bad, it is cool if you want to have a simple and
								easy-to-use link shortener with a cool ecosystem
							</p>
						</div>
					</div>
					<div class="p-64" id="focus">
						<p class="text-3xl">Focus Site</p>
						<div class="p-4">
							<p>
								Sometimes when I had to learn something, I couldn't focus on that task I was
								supposed to
							</p>
							<p>
								After I have done the task, I made a little website which included the current time
								and date. At the Title Bar it also had a countdown.
							</p>
							<p>
								Since I am now writing all Websites in SvelteKit, I also going to rewrite the focus
								site.
							</p>
							<p>
								If you want to see the first version of it <a
									href="htps://github.com/jbugel-lol/jbugel.xyz-focus"
									class="underline"
								>
									click here.</a
								>
							</p>
						</div>
					</div>
					<div class="p-64" id="music">
						<p class="text-3xl">My Music</p>
					</div>
				</div>
			</div>
		</div></body
	>
</html>
