<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <div class="limiter">
        <nav class="header_part navigation">
          <BurgerMenu/>
        </nav>
        <img class="logo" src="~/assets/logo.png" alt="Es Victoria"/>
        <div class="header_part buttons">
          <button class="header_button search">
            <img class="icon" src="~/assets/icons/loupe.png" alt="Search Button">
          </button>
          <button class="header_button account">
            <img class="icon" src="~/assets/icons/bag.png" alt="Search Button">
          </button>
          <button class="header_button cart">
            <img class="icon" src="~/assets/icons/user.png" alt="Search Button">
          </button>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import {scroll} from 'quasar'
import LanguageSwitcher from "src/composnents/LanguageSwitcher.vue";
import BurgerMenu from "src/composnents/BurgerMenu.vue";

const {getScrollTarget, setVerticalScrollPosition} = scroll

export default defineComponent({
  name: 'MainLayout',
  components: {BurgerMenu, LanguageSwitcher},
  methods: {
    scrollTo(el, duration = 1000) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      setVerticalScrollPosition(target, offset, duration)
    }
  },
})
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 44px;
  padding: 11px 0;
  box-sizing: content-box;
  color: $dark;
  -webkit-box-shadow: 0 0 67px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 67px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 67px 0 rgba(0, 0, 0, 0.2);

  .header_part {
    width: calc(50% - 53px);
  }


  .limiter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: inherit;
    height: 100%;
    box-sizing: border-box;


    .navigation {
      font-size: 16px;
      display: flex;
      gap: 50px;
    }

    .logo {
      height: 100%;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 20px;

      .header_button {
        background: none;
        display: flex;
        align-items: center;

        .icon {
          max-width: 25px;
        }
      }
    }
  }
}
</style>
