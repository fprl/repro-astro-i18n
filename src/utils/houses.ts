import { Fetch, apis } from '~/utils/fetch';
import qs from 'qs'

/* interfaces test data */
export interface ResultInfo {
  total: number;
  page: number;
  pages: number;
  results: number;
  isMoreResults: boolean;
  nights: number;
}

export interface HouseListing {
  id: number;
  name: string;
  latlong: string;
  max_number_of_guests: number;
  extra_service: boolean;
  number_of_bedrooms: number;
  number_of_bathrooms: number;
  special_offer: boolean;
  special_offers: {
    start: string;
    end: string;
    value: number | string;
    type: string;
  }[];
  price_min_per_week: number;
  price_max_per_week: number;
  days?: number | string;
  middle?: number | string;
  slug: string;
  subarea_name: string;
  house_photos: string[];
  surface?: number;
  distance_to_beach?: number;
  seaview: boolean;
  outside_kitchen: boolean;
  swimmingpool: boolean;
  stay_price?: number | string;
  is_eco: boolean;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  leading_region: string;
}

export interface House {
  id: number;
  leading_region: string;
  other_short_description: string;
  other_long_description: string;
  house_bedrooms: {
    id: number;
    beds: {
      id: number;
      size: string;
      type: string;
    }[];
    outside_entrance: boolean;
  }[];
  name: string;
  prices: {
    [key: number]: {
      date_from: string;
      date_to: string;
      id: number;
      sales_price: number;
      minimal_number_of_nights: number;
    };
  };
  booking_strategies: {
    date_from: string;
    date_to: string;
    id: number;
    strategy: string;
    permanent: boolean;
  }[];
  facilities_house: string[];
  facilities_kitchen: string[];
  facilities_child: any[];
  min_price_per_week: number;
  max_price_per_week: number;
  max_number_of_guests: number;
  unavailable_availabilities: {
    date_from: string;
    date_to: string;
  }[];
  discount_enabled: boolean;
  short_booking_price_additions: {
    3: number;
    4: number;
    5: number;
    6: number;
  };
  number_of_bedrooms: number;
  number_of_bathrooms: number;
  seaview: number;
  surface: number;
  outside_kitchen: number;
  swimmingpool: number;
  isEco: boolean;
  plans: any[];
  deposit?: any;
  deposit_value: number;
  kitchen_description?: any;
  house_description: string;
  discounts: any[];
  cancellation_policy: string;
  pool_size: number;
  distance_to_beach: number;
  distance_to_ibiza_city: number;
  distance_to_airport: number;
  distance_to_supermarket: number;
  wheelchairs: number;
  number_of_holiday_permit: string;
  check_in_time: string;
  invoicing_politics: string;
  fully_accepted_less_then_week_pricing_policy: boolean;
  accept_turning_off_booking_restrictions: boolean;
  youtube_link: string;
  money_back_guarantee: number;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  good_to_know?: any;
  photos: string[];
  extra_services: string;
  vicinities: {
    name: string;
    content: string;
    image: string;
  }[];
  our_location: string;
}

export interface HousesRes {
  info: ResultInfo;
  listings: HouseListing[];
}

export function getHouses(
  searchParams: URLSearchParams, locale: string = 'nl', pageNr: number = 1): Promise<HousesRes> {
  // https://github.com/ljharb/qs
  const filters = qs.stringify(searchParams);
  const resultsNr = 20;

  return Fetch<HousesRes>(
    `${apis.v4}/house/search/${locale}?page=${pageNr}&results=${resultsNr}&${filters}`,
  );
}

export async function getHouse(slug: string) {
  const locale = 'en';

  return Fetch<House>(
    `${apis.v4}/house/${slug}.json?locale=${locale}`, // ${i18next.language}
  );
}
