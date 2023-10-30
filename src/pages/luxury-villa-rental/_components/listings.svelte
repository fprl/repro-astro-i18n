<script lang="ts">
  import { onMount } from 'svelte';
  import { getHouses, type HousesRes } from '~/utils/houses';

  export let info: HousesRes['info'];
  export let listings: HousesRes['listings'] = [];

  let mounted = false;
  let loading = false;

  $: page = info.page;
  $: pages = info.pages;
  $: pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  $: isMoreResults = page < pages;

  onMount(() => (mounted = true));
</script>

{#if loading}
  <div class="flex justify-center">
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
{:else}
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
{/if}
