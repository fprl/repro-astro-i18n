<script lang="ts">
  import type { HousesRes } from '~/utils/houses';

  export let info: HousesRes['info'];
  export let listings: HousesRes['listings'] = [];

  console.log('hi there');

  const page = info.page;
  const pages = info.pages;
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  const isMoreResults = page < pages;
</script>

<div>
  <div class="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
    {#each listings as listing, i (listing.id)}
      <!-- <Intersection bind:this={intersection} {i < 2} {i > 1} class="min-h-[36rem]"> -->
      <!-- <ListingsCard listing={listing} nights={listingsRes.info.nights} dense={false} /> -->
      <!-- </Intersection> -->

      <div>
        {listing.id}
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
