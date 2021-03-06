import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// https://nuxtjs.org/examples/i18n
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: 'ja',
    fallbackLocale: 'ja',
    messages: {
      'ja': require('~/locales/ja.json'),
    }
  })
}