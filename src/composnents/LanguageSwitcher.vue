<template>
  <q-select v-model="currentLang" class="lang_switcher" :options="languages" map-options borderless dense/>
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
          label: 'Русский',
          value: 'ru-RU'
        },
        {
          label: 'English',
          value: 'en-US'
        },
      ]
    }
  },
  watch: {
    currentLang() {
      this.$q.cookies.set('lang', this.currentLang.value, {sameSite: 'Strict'})
      this.$i18n.locale = this.currentLang.value
    },
  },
})
</script>

<style scoped lang="scss">
.lang_switcher_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: 'expand_more';
    font-family: "Material Symbols Rounded";
    color: $dark;
    display: inline-block;
    //position: absolute;
    //right: 20px;
    //top: 15px;
    pointer-events: none;
  }
}

.lang_switcher {
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  //padding: 20px 0 20px 60px;

}
</style>
