const cssFolder = '~source_template/Mamma-s-Kitchen-master/css'
const webpack = require('webpack')

module.exports = {
  /*
     ** Headers of the page
     */
  head: {
    title: 'green-model',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', crossorigin: 'anonymous', integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
    ],
    bodyAttrs: {
      'data-spy': 'scroll',
      'data-target': '#template-navbar'
    }
  },
  css: [
    // commented because loaded above via bootstrapcdn
    // { src: cssFolder + '/bootstrap.min.css', lang: 'css' },
    { src: cssFolder + '/font-awesome.min.css', lang: 'css' },
    { src: cssFolder + '/owl.carousel.css', lang: 'css' },
    { src: cssFolder + '/owl.theme.css', lang: 'css' },
    { src: cssFolder + '/animate.css', lang: 'css' },
    { src: cssFolder + '/flexslider.css', lang: 'css' },
    { src: cssFolder + '/pricing.css', lang: 'css' },
    { src: cssFolder + '/main.css', lang: 'css' },
  ],
  /*
     ** Customize the progress bar color
     */
  loading: { color: '#3B8070' },
  /*
     ** Build configuration
     */
  build: {
    // https://nuxtjs.org/api/configuration-build#extractcss
    extractCSS: true,
    // add support for jQuery & Bootstrap
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
         ** Run ESLint on save
         */
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
