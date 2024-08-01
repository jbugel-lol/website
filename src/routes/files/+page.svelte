<script>
    import { onMount } from 'svelte';

    /**
     * @type {any[]}
     */
    let files = [];
    let searchTerm = '';

    onMount(async () => {
        const response = await fetch('/files');
        files = await response.json();
    });

    /**
     * @param {number} bytes
     * @returns {string}
     */
    function formatSize(bytes) {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1048576) return `${(bytes / 1024).toFixed(2)} KB`;
        if (bytes < 1073741824) return `${(bytes / 1048576).toFixed(2)} MB`;
        return `${(bytes / 1073741824).toFixed(2)} GB`;
    }
    $: filteredFiles = files.filter(file => 
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
</script>


<p class="text-4xl text-center" >Files List</p>
<p class="text-2xl text-center"> Just a little download section for diffrent stuff</p>
<div class="search-container flex justify-center border-transparent p-8">
    <input
        type="text"
        class="search-input search-input-text bg-cat-mantle rounded-3xl text-center focus:outline-none focus:outline-cat-lavender"
        style="width: 30rem;"
        placeholder="Search files..."
        bind:value={searchTerm}
    />
</div>
<ul class="p-12 text-center">
    {#each filteredFiles as file}
        <li class="file-item">
            <a class="file-name" href={file.url} download> {file.name}</a>
            <span class="file-size">({formatSize(file.size)})</span>
        </li>
    {/each}
</ul>
