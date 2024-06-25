export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      meta: [
        {
          property: "og:title",
          content: "BountyHub Docs",
        },
        {
          property: "og:site_name",
          content: "BountyHub",
        },
        {
          property: "og:description",
          content: "BountyHub platform documentation",
        },
        {
          property: "og:image",
          content: "https://bountyhub.org/assets/logo_whitebg.png",
        },
        {
          property: "og:image:width",
          content: "500",
        },
        {
          property: "og:image:height",
          content: "500",
        },
        {
          property: "og:url",
          content: "https://docs.bountyhub.org",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    },
  },
});
