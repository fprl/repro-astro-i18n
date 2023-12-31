import type { AstroGlobal } from 'astro'

export default async function action(context: AstroGlobal) {
  const { request, url } = context;
  const formData = await request.formData()
  const destination = formData.get('destination') || 'all';


  return redirect(`${url.pathname}?destination=${destination}`, context);
}

function redirect(location: string, context: AstroGlobal) {
  const isFetch = context.request.headers.get('X-Requested-With') === 'XMLHttpRequest';

  return isFetch ? new Response(JSON.stringify({ redirect: location })) : context.redirect(location);
}
