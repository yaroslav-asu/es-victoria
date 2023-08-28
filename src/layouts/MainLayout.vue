<template>
  <q-layout view="lHh Lpr lFf">
    <div class="search_bar" :style="{transform: searchShowed ?  `translate(0)` : ''}">
      <div class="limiter">
        <q-input v-model="search" borderless dense class="search">
          <template v-slot:prepend>
            <q-icon name="sym_r_search"/>
          </template>
          <template v-slot:append>
            <q-icon name="close" v-if="search.length" @click="search = ''" class="cursor-pointer"/>

          </template>
        </q-input>
        <button class="search_button">
          {{ $t('header.search') }}
        </button>
      </div>
    </div>
    <q-header class="header">
      <div class="limiter">
        <nav class="header_part navigation">
          <BurgerMenu/>
        </nav>
        <img class="logo" src="~/assets/logo.png" alt="Es Victoria"/>
        <div class="header_part buttons">
          <button class="header_button search_button">
            <img class="icon" src="~/assets/icons/loupe.png" alt="Search Button" @click="toggleSearch" v-if="!searchShowed">
            <q-icon class="icon" name="sym_r_close" v-if="searchShowed" @click="toggleSearch"/>
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
      search: '',
    }
  },
  methods: {
    scrollTo(el, duration = 1000) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      setVerticalScrollPosition(target, offset, duration)
    },
    toggleSearch() {
      this.searchShowed = !this.searchShowed
    }
  },
})
</script>

<style lang="scss" scoped>
.search_bar {
  position: fixed;
  top: 66px;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  transform: translate(0, -100%);
  transition: transform 0.3s ease-in-out;
  z-index: 100;

  .limiter {
    display: flex;
    //align-items: center;
    gap: 10px;
  }

  .search {
    width: 100%;
    background-color: rgba($dark, 0.1);
    padding: 0 10px;
    border-radius: 10px;
  }

  .search_button {
    padding: 0 15px;
    border-radius: 10px;
    background-color: $dark;
    color: white;

  }
}

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
          font-size: 25px;
          z-index: 1;
        }

        &.search_button {
          position: relative;
        }
      }
    }
  }
}
</style>
