<template>
  <select v-model="currentLang">
    <option v-for="lang in languages" :value="lang.value">
      {{ lang.title }}
    </option>
  </select>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LanguageSwitcher",
  data() {
    return {
      currentLang: this.$q.cookies.get('lang'),
      languages: [
        {
          title: 'Русский',
          value: 'ru-RU'
        },
        {
          title: 'English',
          value: 'en-US'
        },
      ]
    }
  },
  watch: {
    currentLang() {
      this.$q.cookies.set('lang', this.currentLang, {sameSite: 'Strict'})
      this.$i18n.locale = this.currentLang
    }
  }
})
</script>

<style scoped lang="scss">

</style>
