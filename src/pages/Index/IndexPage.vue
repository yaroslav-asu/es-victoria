<template>
  <q-page>
    <GreetingSection/>
    <GenderChoose/>
    <GoodsOfTheDay/>
    <CategoryStages/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import GreetingSection from "pages/Index/Stages/GreetingSection.vue";
import GenderChoose from "pages/Index/Stages/GenderChoose.vue";
import GoodsOfTheDay from "pages/Index/Stages/GoodsOfTheDay.vue";
import CategoryStages from "pages/Index/Stages/CategoryStages.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {CategoryStages, GoodsOfTheDay, GenderChoose, GreetingSection}
})
</script>

<style lang="scss">

</style>
