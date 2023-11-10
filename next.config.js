/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
const path = require("path");
const webpack = require("webpack");

const { i18n } = require("./next-i18next.config");

const localeSubpaths = {};

module.exports = {
  output: 'standalone',
  i18n,
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: false,
  publicRuntimeConfig: {
    localeSubpaths,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "application/styles")],
    prependData: "@import \"~@styles/_vars.scss\"; @import \"~@styles/_glob.scss\";",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      loader: "url-loader",
      options: {
        limit: 100000,
      },
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    );

    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/changeracc/:id",
  //       destination: "/changeracc/:id/info",
  //       permanent: false,
  //     },
  //   ];
  // },
};
