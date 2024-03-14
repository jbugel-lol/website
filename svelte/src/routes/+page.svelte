<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const darkReaderMetaTag = document.querySelector('meta[name="darkreader"]');
    if (darkReaderMetaTag) {
      alert('You\'re using darkreader, which breaks the styles on this page. Please disable it. :)');
    }
  });
</script>


