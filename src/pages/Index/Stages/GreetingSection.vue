<template>
  <section class="landing_section greeting_section">
    <div class="limiter">
      <div class="part">
        <div class="collections_block">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GreetingSection"
})
</script>

<style scoped lang="scss">
.landing_section {
  .limiter{
    display: flex;
    background: url("src/assets/sitting_woman.jpeg") no-repeat;
    .part {
      width: 50%;
    }
  }

}
</style>
