// stores/searchParams.ts
import { createSearchParams } from '@nanostores/router'
import { onMount } from 'nanostores';

export const $searchParams = createSearchParams()

onMount($searchParams, () => {
  $searchParams.subscribe(params => {
    console.log(params);

    const stringified = new URLSearchParams(params).toString()
    console.log(params);
    const listingsContainer = document.getElementById('listings')

    // add loader in listings container
    listingsContainer!.innerHTML = '<div class="loader">Loading</div>'

    getHouses({ filters: stringified })
      .then(response => response?.json())
      .then(data => {
        const listings = data?.listings
        console.log(data);




        // grab the template
        const templateElement = document.getElementById('listing-template') as HTMLTemplateElement
        // for each listing in listings array insert a clone of the template
        listings?.forEach((listing: any) => {
          // make a copy of the template
          const clone = templateElement?.content.cloneNode(true) as HTMLElement

          // // change the h2 to the listing title
          const title = clone?.querySelector('h2')
          title!.textContent = listing.name

          // change p to the listing description
          const description = clone?.querySelector('p')
          description!.textContent = listing.description

          listingsContainer?.appendChild(clone)
        })
      }).catch(error => console.error(error))
  })
})

export function changeSearchParam(key: 'filters[persons]' | 'filters[bedrooms]', value: string) {
  $searchParams.open({ ...$searchParams.get(), [key]: value })
}

async function getHouses({
  page = 1,
  results = 21,
  locale = 'en',
  filters = '',
}: {
  page?: number;
  results?: number;
  locale?: string;
  filters?: string;
}) {
  return fetch(
    `https://system.huishurenibiza.nl/api/v4/house/search/${locale}?page=${page}&results=${results}&${filters}`
  ).catch(() => null);
}
