import env from "./shared/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],

  runtimeConfig: {
    public: {
      envExample: env.ENV_EXAMPLE,
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
