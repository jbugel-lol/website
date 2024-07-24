<script lang="ts">
    import { onMount } from 'svelte';

    function updateClock() {
        const now = new Date();
        const time =
            now.getHours().toString().padStart(2, '0') +
            ':' +
            now.getMinutes().toString().padStart(2, '0') +
            ':' +
            now.getSeconds().toString().padStart(2, '0');
        const date =
            now.getDate().toString().padStart(2, '0') +
            '/' +
            (now.getMonth() + 1).toString().padStart(2, '0') +
            '/' +
            now.getFullYear();
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.innerHTML = time + '<br>' + date;
        }
    }

    onMount(() => {
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    });
</script>

<body class="flex flex-col items-center text-4xl">
    Work in Progress
    <iframe
        id="video"
        src="https://yt.artemislena.eu/embed/E5WpblyBR38?autoplay=1&loop=1&controls=0&mute=0"
        frameborder="0"
        allow="autoplay"
        title="Focus Site"
        class="hidden"
    ></iframe>
    <p class="text-center p-8 text-xl">
        if your browser is blocking autoplay, enable it in your browser settings for video and audio and
        refresh the page
    </p>
    <p id="clock"></p>
</body>
