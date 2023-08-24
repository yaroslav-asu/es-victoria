<template>
  <div class="filler_wrapper">
    <div class="filler left_filler"/>
    <slot/>
    <div class="filler right_filler"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FillerWrapper"
})
</script>

<style scoped lang="scss">
.filler_wrapper {
  position: relative;
  padding: 40px;

  .filler {
    height: 40px;
    width: 40px;
    position: absolute;
    border-radius: 10px;
    $background: rgba(#787878, 0.5);


    &::before {
      content: "";
      position: absolute;
      background-color: $background;
      border-radius: inherit;
    }

    &::after {
      content: "";
      position: absolute;
      background-color: $background;
      border-radius: inherit;

    }
  }

  $size: 3px;
  $margin: 10px;

  .left_filler {
    left: 0;
    bottom: 0;

    &::before {
      width: $size;
      height: inherit;
      bottom: $margin;
    }

    &::after {
      width: inherit;
      height: $size;
      bottom: 0;
      left: $margin;
    }
  }

  .right_filler {
    right: 0;
    top: 0;

    &::before {
      width: inherit;
      height: $size;
      right: $margin;
    }

    &::after {
      width: $size;
      height: inherit;
      right: 0;
      top: $margin;
    }
  }
}
</style>
