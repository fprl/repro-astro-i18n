<script>
  import { changeSearchParam } from './_search-store';
</script>

<div class="p-2 border">
  <label for="persons">Persons</label>
  <select
    id="persons"
    on:change={(e) =>
      changeSearchParam('filters[persons]', e.currentTarget.value)}
  >
    {#each Array.from({ length: 12 }, (_, i) => `${i + 1}`) as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
