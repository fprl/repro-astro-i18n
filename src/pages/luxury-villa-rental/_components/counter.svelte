<script lang="ts">
  import { onDestroy } from 'svelte';

  // create a counter that updates every second
  let count = 0;
  const interval = setInterval(() => {
    count += 1;
  }, 1000);

  // stop the counter when the component is destroyed
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<h1>{count}</h1>
