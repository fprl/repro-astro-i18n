// stores/searchParams.ts
import { navigate } from 'astro:transitions/client';

export function changeSearchParam(key: 'filters[persons]' | 'filters[bedrooms]' | 'destination', value: string) {
  // searchParams.open({ ...searchParams.get(), [key]: value })
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);
  navigate(`?${params.toString()}`);
}
