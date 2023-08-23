import {boot} from 'quasar/wrappers'
import {createI18n} from 'vue-i18n'
import messages from 'src/i18n'
import {Quasar, Cookies} from "quasar";

export default boot(({app}) => {
  let savedLocale = Cookies.get('lang')
  let locale
  if (savedLocale) {
    locale = savedLocale
  } else {
    locale = Quasar.lang.getLocale()
    Cookies.set('lang', locale, {sameSite: 'Strict'})
  }
  const i18n = createI18n({
    locale: locale,
    fallbackLocale: 'en-US',
    globalInjection: true,
    messages
  })
  app.use(i18n)
})
