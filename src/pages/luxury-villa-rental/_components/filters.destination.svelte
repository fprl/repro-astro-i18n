<script lang="ts">
  import { changeSearchParam } from './_search-store';

  export let destination: 'ibiza' | 'mallorca' = 'ibiza';
  !destination && (destination = 'ibiza');

  const destinations = ['ibiza', 'mallorca'];
</script>

<div class="p-2 border">
  <label for="destination">Destination: {destination}</label>
  <div class="flex gap-x-2">
    <!-- each for destinations -->
    {#each destinations as option (option)}
      <button
        class="border px-2 py-1 hover:bg-gray-200"
        class:bg-gray-100={destination === option}
        on:click={() => changeSearchParam('destination', option)}
      >
        {option}
      </button>
    {/each}
  </div>
</div>
