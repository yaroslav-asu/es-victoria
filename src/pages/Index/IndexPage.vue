<template>
  <q-page>
    <GreetingSection/>
    <GenderChoose/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import GreetingSection from "pages/Index/Stages/GreetingSection.vue";
import GenderChoose from "pages/Index/Stages/GenderChoose.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {GenderChoose, GreetingSection}
})
</script>

<style lang="scss">

</style>
