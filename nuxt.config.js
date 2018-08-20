const tplFolder = '~/source_template/Mamma-s-Kitchen-master/'
const webpack = require('webpack')

module.exports = {
  /*
     ** Headers of the page
     */
  head: {
    title: 'green-model',
    htmlAttrs: {
      lang: 'fr-FR',
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
    ],
    script:[
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.min.js'},
      {src: 'https://maps.googleapis.com/maps/api/js'},
    ],
    noscript: [{ innerHTML: 'Ce site nécessite JavaScript.' }],
  },
  css: [
    // commented because loaded above via bootstrapcdn
    // { src: tplFolder + '/bootstrap.min.css', lang: 'css' },
    { src: tplFolder + 'css/font-awesome.min.css', lang: 'css' },
    { src: tplFolder + 'css/owl.carousel.css', lang: 'css' },
    { src: tplFolder + 'css/owl.theme.css', lang: 'css' },
    { src: tplFolder + 'css/animate.css', lang: 'css' },
    { src: tplFolder + 'css/flexslider.css', lang: 'css' },
    { src: tplFolder + 'css/pricing.css', lang: 'css' },
    { src: tplFolder + 'css/main.css', lang: 'css' },
  ],
  // Customize the progress bar color
  loading: { color: '#3B8070' },
  // Router conf
  router: {
    middleware: 'i18n',
  },
  // Plugins
  plugins: [
    // trads
    'plugins/i18n',
  ],
  // Build configuration
  build: {
    // https://nuxtjs.org/api/configuration-build#extractcss
    extractCSS: true,
    // add support for jQuery & Bootstrap
    vendor: [
      'bootstrap',
      tplFolder + 'js/jquery.flexslider.min.js',
      '~/plugins/flexslider.js',
      tplFolder + 'js/owl.carousel.min.js',
      tplFolder + 'js/jquery.validate.js',
      tplFolder + 'js/jquery.hoverdir.js',
      /*
      tplFolder + 'js/jQuery.scrollSpeed.js',
      '~/plugins/scroll-speed.js',
      */
      '~/plugins/scroll-spy.js',
      '~/plugins/wow.js',
      tplFolder + 'js/script.js',
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
