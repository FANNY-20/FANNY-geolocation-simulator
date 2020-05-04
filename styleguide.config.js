const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  sections: [
    {
      name: "Components",
      components: "./components/**/*.vue",
    },
    {
      name: "Mixins",
      components: "./mixins/**/*.js",
    },
  ],
  assetsDir: "./static/",
  require: [
    "./assets/styles/bases/index.scss",
    "./assets/styles/vendors/index.scss",
  ],
  usageMode: "expand",
  webpackConfig: {
    node: {
      net: "empty",
      tls: "empty",
      dns: "empty",
    },
    resolve: {
      extensions: [".js", ".json", ".vue", ".ts"],
      alias: {
        "@": path.resolve(__dirname),
        "~": path.resolve(__dirname),
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  "./assets/styles/abstracts/_variables.scss",
                  "./assets/styles/abstracts/_placeholders.scss",
                  "./assets/styles/abstracts/helpers/**/*.scss",
                  "./assets/styles/abstracts/ui/**/*.scss",
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svgi$/,
          use: ["html-loader"],
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
};
