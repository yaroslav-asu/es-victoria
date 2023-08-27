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
    locale = Quasar.lang.getLocale().toLowerCase()
    if (locale.includes('ru') || locale.includes('by') || locale.includes('ua')) {
      locale = 'ru-RU'
    } else if (locale.includes('en') || locale.includes('us') || locale.includes('uk')) {
      locale = 'en-US'
    } else if (locale.includes('sr') || locale.includes('hr') || locale.includes('bs') || locale.includes('rs')) {
      locale = 'sr-RS'
    } else {
      locale = 'en-US'
    }
    Cookies.set('lang', locale, {sameSite: 'Strict'})
  }
  const i18n = createI18n({
    locale: locale,
    fallbackLocale: 'en-US',
    globalInjection: true,
    messages,
    warnHtmlInMessage: 'off',
  })
  app.use(i18n)
})
