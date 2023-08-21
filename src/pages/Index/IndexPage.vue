<template>
  <q-page>
    <GreetingSection/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import GreetingSection from "pages/Index/Stages/GreetingSection.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {GreetingSection}
})
</script>

<style lang="scss">

</style>
