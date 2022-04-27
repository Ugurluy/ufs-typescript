const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");
const fingerprint = Math.random()
  .toString(36)
  .substr(2, 9);
module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  devServer: {
    disableHostCheck: true,
    watchOptions: {
      poll: true,
    },
  },
  css: {
    extract: {
      filename: `css/[name]-${fingerprint}.css?v=20.06.072214`,
      chunkFilename: `css/[name]-${fingerprint}.css?v=20.06.072214`,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });
  },
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === "development") {
  //     config.devtool = "inline-source-map";
  //   }
  //   if (process.env.NODE_ENV === "production") {
  //     config.devtool = "(none)";
  //   }
  //   config.output.filename = `js/[name]-${fingerprint}.js?v=20.06.072214`;
  //   config.output.chunkFilename = `js/[name]-${fingerprint}.js?v=20.06.072214`;
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         routes: ["/"],
  //         staticDir: path.resolve(__dirname, "dist"),
  //         postProcess(renderedRoute) {
  //           return renderedRoute;
  //         },
  //         renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
  //           inject: {},
  //           maxConcurrentRoutes: 1,
  //           executablePath: process.env.CHROMIUM_PATH || undefined,
  //           headless: true,
  //           onlyProduction: true,
  //         }),
  //       }),
  //     ],
  //   };
  // },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
