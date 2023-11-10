import type { APIContext, AstroGlobal } from 'astro'
import { astroI18n } from 'astro-i18n';

const BASE_URL_SYSTEM = 'https://system.huishurenibiza.nl';

export const GET = async (Astro: AstroGlobal) => {
  const locale = astroI18n.locale;
  const filters = Astro.url.search.slice(1);

  const results = await fetch(`${BASE_URL_SYSTEM}/api/v4/house/search/${locale}?${filters}`).then(res => res.json()).catch(() => null);

  if (!results) return new Response(JSON.stringify({ error: results }), {
    status: 500,
    statusText: 'Internal Server Error',
  })

  return new Response(
    JSON.stringify({ ...results, }), { headers: { "Cache-Control": "s-maxage=60" } }
  )
}


export const POST = async ({ request, url, redirect }: APIContext) => {
  const formData = await request.formData();
  const destination = formData.get('destination') || 'all';

  return redirect(`/luxury-villa-rental?destination=${destination}`);
}
