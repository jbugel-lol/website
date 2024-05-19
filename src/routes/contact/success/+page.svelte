<div class="flex justify-center text-cat-text text-5xl p-28">
	Thanks for getting in contact with me!<br />
	I am going to reply as soon as possible
</div>
<div class="flex justify-center items-center">
	<div class="relative w-20 h-20">
		<div
			class="absolute inset-0 transform transition-transform duration-500 rounded-full bg-cat-mantle animate-circle"
		>
			<div
				class="absolute inset-0 flex items-center justify-center text-cat-text animate-checkmark"
			>
				<svg class="w-8 h-8 fill-current" viewBox="0 0 20 20">
					<path
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes circle-animation {
		0% {
			transform: scale(0);
		}
		25% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes checkmark-animation {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.animate-circle {
		animation: circle-animation 0.5s forwards 0.5s;
	}

	.animate-checkmark {
		animation: checkmark-animation 0.5s forwards 0.5s;
	}
	@keyframes circle-opacity {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
