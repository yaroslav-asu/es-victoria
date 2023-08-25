<template>
  <div class="burger_menu_wrapper">
    <div class="burger_menu_button"/>
    <p class="text">
      Меню
    </p>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BurgerMenu"
})
</script>

<style scoped lang="scss">
.burger_menu_wrapper {
  cursor: pointer;
  height: 14px;
  display: flex;
  align-items: center;

  .burger_menu_button {
    width: 20px;
    height: 2px;
    border-radius: 10px;
    position: relative;
    background-color: $dark;
    margin-right: 10px;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: inherit;
      bottom: 6px;
      display: block;
      position: relative;
      border-radius: inherit;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: inherit;
      top: 4px;
      display: block;
      position: relative;
      border-radius: inherit;
    }
  }
}
</style>
