import { sequence, defineMiddleware } from "astro/middleware"
import { useAstroI18n } from "astro-i18n"
import astroI18nConfig from "../../astro-i18n.config"

const astroI18n = useAstroI18n(
	astroI18nConfig,
	undefined /* custom formatters */,
)

const actionsMiddleware = defineMiddleware(async (context, next) => {
	const isFetch = context.request.headers.get('X-Requested-With') === 'XMLHttpRequest';

	if (!isFetch && context.request.method === 'POST' && context.url.searchParams.get('action')) {
		console.log('post');
		// console.log(context);

		// get formData
		const formData = await context.request.formData();

		// create object from formData
		const data = Object.fromEntries(formData.entries());

		// save it in context.locals
		context.locals = {
			...context.locals,
			form: {
				data
			}
		};
	}

	return next();
});

export const onRequest = sequence(astroI18n, actionsMiddleware)
