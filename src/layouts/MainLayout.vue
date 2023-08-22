<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <div class="limiter">
        <nav class="header_part navigation">
          <a class="nav_link">Домой</a>
          <a class="nav_link">Магазин</a>
          <a class="nav_link">Продукты</a>
          <a class="nav_link">Отзывы</a>
        </nav>
        <img class="logo" src="~/assets/logo.png" alt="Es Victoria"/>
        <div class="header_part buttons">
          <button class="header_button search">
            <q-icon class="icon" name="sym_r_search"/>
          </button>
          <button class="header_button account">
            <q-icon class="icon" name="sym_r_person"/>
          </button>
          <button class="header_button cart">
            <q-icon class="icon" name="sym_r_shopping_bag"/>
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

const {getScrollTarget, setVerticalScrollPosition} = scroll
import AlertIcon from 'vue-ionicons/dist/ios-alert.vue'
import CartIcon from 'vue-ionicons/dist/ios-cart.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {AlertIcon, CartIcon},
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
  height: 60px;
  padding: 20px 0;
  box-sizing: content-box;
  color: $dark;

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
      gap: 15px;

      .header_button {
        background: none;

        .icon {
          font-size: 35px;
        }
      }
    }
  }
}
</style>
