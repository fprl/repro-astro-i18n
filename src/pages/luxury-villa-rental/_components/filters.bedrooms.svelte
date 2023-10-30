<script>
  import { changeSearchParam } from './_search-store';

  export let bedrooms = 1;
</script>

<div class="p-2 border">
  <label for="bedrooms">Bedrooms</label>
  <select
    id="bedrooms"
    value={bedrooms}
    on:change={(e) =>
      changeSearchParam('filters[bedrooms]', e.currentTarget.value)}
  >
    {#each Array.from({ length: 8 }, (_, i) => `${i + 1}`) as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
