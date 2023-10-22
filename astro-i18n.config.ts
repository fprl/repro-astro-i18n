import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "en", // default app locale
	secondaryLocales: ["nl"], // other supported locales
	fallbackLocale: "en", // fallback locale (on missing translation)
	trailingSlash: "never", // "never" or "always"
	run: "client+server", // "client+server" or "server"
	showPrimaryLocale: false, // "/en/about" vs "/about"
	translationLoadingRules: [], // per page group loading
	translationDirectory: {}, // translation directory names
	translations: {
		common: {
			en: {
				hi: "Hi",
			},
			nl: {
				hi: "Hallo",
			},
		}
	}, // { [translation_group1]: { [locale1]: {}, ... } }
	routes: {
		"nl": {
			'about': "over-ons",
			"luxury-villa-rental": "luxe-villa-huren",
		}
	}, // { [secondary_locale1]: { about: "about-translated", ... } }
})
