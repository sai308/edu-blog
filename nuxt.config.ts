// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["shadcn-docs-nuxt"],
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-07-06",
});
