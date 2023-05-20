// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSEOMeta } from "./utils/seo";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Blog",
      meta: [
        {
          ...createSEOMeta({
            description: "Get to know to do a blog with Nuxt!",
          }),
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@storyblok/nuxt", "nuxt-simple-sitemap"],
  sitemap: {
    sitemaps: true,
    siteUrl: "https://localhost/3010",
    dynamicUrlsApiEndpoint: "/__sitemap",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
  },
});
