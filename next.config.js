// next.config.js
module.exports = {
  i18n: {
    locales: ['en-US', 'pt-BR',],
    defaultLocale: 'pt-BR',

    domains: [
      {
        domain: 'augustoleite.com/en',
        defaultLocale: 'en-US',
      },
      {
        domain: 'augustoleite.com',
        defaultLocale: 'pt-BR',
      },
    ],
  },
}
