<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <div class="limiter">
        <nav class="header_part navigation">
          <BurgerMenu/>
        </nav>
        <img class="logo" src="~/assets/logo.png" alt="Es Victoria"/>
        <div class="header_part buttons">
          <button class="header_button search_button">
            <img class="icon" src="~/assets/icons/loupe.png" alt="Search Button" @click="toggleSearch">
            <input type="text" class="search" :class="searchShowed ? 'search--active' : ''"
                   :style="{cursor : searchShowed ? 'auto': 'default !important'}" :disabled="!searchShowed">
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
import {defineComponent, nextTick} from 'vue'
import {scroll} from 'quasar'
import LanguageSwitcher from "src/composnents/LanguageSwitcher.vue";
import BurgerMenu from "src/composnents/BurgerMenu.vue";

const {getScrollTarget, setVerticalScrollPosition} = scroll

export default defineComponent({
  name: 'MainLayout',
  components: {BurgerMenu, LanguageSwitcher},
  data() {
    return {
      searchShowed: false,
      hideSearch: false
    }
  },
  methods: {
    scrollTo(el, duration = 1000) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      setVerticalScrollPosition(target, offset, duration)
    },
    toggleSearch() {
      // if (!this.searchShowed) {
      //   this.hideSearch = false
      // } else {
      //   setTimeout(() => {
      //     this.hideSearch = true
      //   }, 500)
      // }
      this.searchShowed = !this.searchShowed
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
        width: auto;

        .icon {
          max-width: 25px;
          z-index: 1;
        }

        &.search_button {
          position: relative;

          .search {
            transition: width 0.5s ease-in-out, border 0.5s ease-in-out;
            outline: none;
            padding: 10px;
            padding-right: 35px;
            border: 2px solid white;
            width: 20px;
            position: absolute;
            border-radius: 10px;

            right: -5px;
            z-index: 0;

            &.search--active {
              width: 300px;
              border: 2px solid rgba($dark, 0.2) !important;
            }
          }
        }
      }
    }
  }
}
</style>
