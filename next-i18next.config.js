// const path = require('path');

module.exports = {
  target: 'serverless',
  i18n: {
    locales: ["default", "en", "ru"],
    // localePath: path.resolve('./public/locales'),
    defaultLocale: "en",
    localeDetection: false,
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
  experimental: {
    webpackBuildWorker: true,
  },
};
