<template>
  <q-select v-model="currentLang" class="lang_switcher" :options="languages" map-options borderless dense
            @update:model-value="updateLocale"/>
</template>

<script>
import {defineComponent, nextTick} from 'vue'

export default defineComponent({
  name: "LanguageSwitcher",
  data() {
    return {
      currentLang: this.$q.cookies.get('lang'),
      languages: [
        {
          label: 'Русский',
          value: 'ru-RU'
        },
        {
          label: 'English',
          value: 'en-US'
        },
        {
          label: 'Српски',
          value: 'sr-RS'
        },
        {
          label: 'Türkçe',
          value: 'tr-TR'
        },
      ]
    }
  },
  methods: {
    updateLocale() {
      this.$q.cookies.set('lang', this.currentLang.value, {sameSite: 'Strict'})
      this.$i18n.locale = this.currentLang.value
    },
  },
  watch: {
    '$i18n.locale': function (val) {
      console.log(this.currentLang, val)
      nextTick(() => {
        this.currentLang = val
      })
    }
  },
})
</script>

<style scoped lang="scss">

</style>
