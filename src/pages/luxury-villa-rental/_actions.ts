import type { AstroGlobal } from 'astro'

export const actions = {
  search: async (context: AstroGlobal) => {
    const { request, url } = context;
    const formData = await request.formData()
    const destination = formData.get('destination');


    return redirect(`${url.pathname}?destination=${destination}`, context);
  },
};


function redirect(location: string, context: AstroGlobal) {
  const isFetch = context.request.headers.get('X-Requested-With') === 'XMLHttpRequest';

  return isFetch ? new Response(JSON.stringify({ redirect: location })) : context.redirect(location);
}
