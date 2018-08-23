const webpack = require('webpack')

module.exports = {
  head: {
    title: 'green-model',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', crossorigin: 'anonymous', integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', crossorigin: 'anonymous', integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.min.js' },
      { src: 'https://maps.googleapis.com/maps/api/js' },
    ],
    noscript: [{ innerHTML: 'Ce site nécessite JavaScript.' }],
  },
  css: [
    { src: '~/vendors/owl.carousel.css', lang: 'css' },
    { src: '~/vendors/owl.theme.css', lang: 'css' },
    { src: '~/vendors/animate.css', lang: 'css' },
    { src: '~/vendors/flexslider.css', lang: 'css' },
    { src: '~/styles/globals.css', lang: 'css' },
    { src: '~/styles/buttons.css', lang: 'css' },
    { src: '~/styles/sections.css', lang: 'css' },
  ],
  loading: { color: '#3B8070' },
  router: {
    middleware: 'i18n',
  },
  plugins: [
    'plugins/i18n',
  ],
  build: {
    extractCSS: true,
    vendor: [
      'bootstrap',
      '~/vendors/jquery.flexslider.min.js',
      '~/plugins/flexslider.js',
      '~/vendors/owl.carousel.min.js',
      '~/vendors/jquery.validate.js',
      '~/vendors/jquery.hoverdir.js',
      '~/plugins/scroll-spy.js',
      '~/plugins/wow.js',
    ],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    // Run ESLint on save
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
