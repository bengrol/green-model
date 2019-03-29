import Vue from 'vue'

const mail = 'romain.racamier@gmail.com'
// const mail = 'groleau.b@gmail.com'

export const formActionUrl = 'https://formspree.io/' + mail

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    } else {
      console.error('cannot use non-hanled locale', locale)
    }
  },
}

export const adress = {
  'street':'Boulevard de Lorraine \n' +
    'ABIDJAN - COTE IVOIRE ',
  'phone':'+44 12 213584'
}

export const eventBus = new Vue()
