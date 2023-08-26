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
import GreetingSection from "pages/Index/Sections/GreetingSection.vue";
import GenderChoose from "pages/Index/Sections/GenderChooseSection.vue";
import GoodsOfTheDay from "pages/Index/Sections/GoodsOfTheDaySection.vue";
import CategoryStages from "pages/Index/Sections/CategorySection.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {CategoryStages, GoodsOfTheDay, GenderChoose, GreetingSection}
})
</script>

<style lang="scss">

</style>
