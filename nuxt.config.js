if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
module.exports = {
  mode: "spa",
  env: {
    BASE_URL: process.env.BASE_URL,
    API_HOST: process.env.API_HOST,
    AUTHORIZATION_TOKEN: process.env.AUTHORIZATION_TOKEN,
    INDICATIVE_CIRCLE_RADIUS_METERS: process.env.INDICATIVE_CIRCLE_RADIUS_METERS || 15,
  },
  loading: { color: "mediumspringgreen" },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: { formatter: require("eslint-friendly-formatter") },
        });
      }
      config.node = {
        net: "empty",
        tls: "empty",
        dns: "empty",
      };
      config.performance.maxAssetSize = 350000;
      config.module.rules.push({
        test: /\.svgi$/,
        use: ["html-loader"],
      });
    },
    loaders: { vue: { transformAssetUrls: { "svg-img": "src" } } },
    babel: { plugins: ["@babel/plugin-proposal-export-default-from"] },
    postcss: require("./config/build/postcss"),
    extractCSS: process.env.NODE_ENV === "production",
    transpile: [],
  },
  watch: ["@/config/**/*.js"],
  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/moment",
  ],
  modules: [
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/dotenv",
      require("./config/dotenv"),
    ],
    "@nuxtjs/axios",
  ],
  plugins: [
    "@/plugins/axios",
    "@/plugins/svg-img",
    "@/plugins/joi",
    "@/plugins/leaflet.client",
  ],
  css: [
    "@/assets/styles/bases/index.scss",
    "@/assets/styles/vendors/index.scss",
    "leaflet/dist/leaflet.css",
  ],
  head: require("./config/head"),
  styleResources: require("./config/style-resources"),
  router: require("./config/router"),
  axios: require("./config/axios"),
  vuetify: require("./config/vuetify"),
  moment: require("./config/moment"),
};
