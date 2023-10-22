<script lang="ts">
  import { onMount } from 'svelte';
  import { getHouses, type HousesRes } from '~/utils/houses';
  import { searchParams, changeSearchParam } from './_search-store';

  export let info: HousesRes['info'];
  export let listings: HousesRes['listings'] = [];

  let mounted = false;
  $: page = info.page;
  $: pages = info.pages;
  $: pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  $: isMoreResults = page < pages;

  onMount(() => (mounted = true));

  searchParams.subscribe((params) => {
    if (!mounted) return;

    getHouses(params, 'en', 1).then((res) => {
      info = res.info;
      listings = res.listings;
    });
  });
</script>

<div class="space-y-4">
  <div class="flex gap-x-4">
    <div class="p-2 border">
      <label for="bedrooms">Bedrooms</label>
      <select
        id="bedrooms"
        on:change={(e) =>
          changeSearchParam('filters[bedrooms]', e.currentTarget.value)}
      >
        {#each Array.from({ length: 8 }, (_, i) => `${i + 1}`) as option (option)}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>

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
  </div>

  <div class="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
    {#each listings as listing, i (listing.id)}
      <!-- <Intersection bind:this={intersection} {i < 2} {i > 1} class="min-h-[36rem]"> -->
      <!-- <ListingsCard listing={listing} nights={listingsRes.info.nights} dense={false} /> -->
      <!-- </Intersection> -->

      <div>
        {listing.name}
      </div>
    {/each}
  </div>

  <!-- pagination -->
  <div class="w-full bg-accent flex justify-center gap-x-2 my-4 py-4">
    {#if page !== 1}
      <button>
        <!-- <Link href={`/luxury-villa-rental?page=${page - 1}`}>Previous page</Link> -->
        <a href={`/luxury-villa-rental?page=${page - 1}`}>Previous oage</a>
      </button>
    {/if}

    <div class="max-w-4/5">
      {#each pageNumbers as pageNumber (pageNumber)}
        <!-- <Button
          asChild
          variant={pageNumber === page ? 'default' : 'outline'}
          size="sm"
        >
          <Link href={`/luxury-villa-rental?page=${pageNumber}`}
            >{pageNumber}</Link
          >
        </Button> -->

        <a
          class={pageNumber === page ? 'text-bold' : ''}
          href={`/luxury-villa-rental?page=${pageNumber}`}>{pageNumber}</a
        >
      {/each}
    </div>

    {#if isMoreResults}
      <!-- <Button asChild size="sm">
        <Link href={`/luxury-villa-rental?page=${page + 1}`}>Next page</Link>
      </Button> -->
      <a href={`luxury-villa-rental?page=${page + 1}`}>Next page</a>
    {/if}
  </div>
</div>
