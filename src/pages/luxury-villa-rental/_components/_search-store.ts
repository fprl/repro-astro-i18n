// stores/searchParams.ts
import { createSearchParams } from '@nanostores/router'
import { onMount } from 'nanostores';

export const searchParams = createSearchParams()

onMount(searchParams, () => {
  searchParams.subscribe(params => {
    // console.log(params);
  })
})

export function changeSearchParam(key: 'filters[persons]' | 'filters[bedrooms]', value: string) {
  searchParams.open({ ...searchParams.get(), [key]: value })
}
