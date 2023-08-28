<template>
  <q-page>
    <GreetingSection/>
    <GenderChoose/>
    <GoodsOfTheDay/>
    <CategoryStages/>
    <FooterSection/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import GreetingSection from "pages/Index/Sections/GreetingSection.vue";
import GenderChoose from "pages/Index/Sections/GenderChooseSection.vue";
import GoodsOfTheDay from "pages/Index/Sections/GoodsOfTheDaySection.vue";
import CategoryStages from "pages/Index/Sections/CategorySection.vue";
import FooterSection from "pages/Index/Sections/FooterSection.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {FooterSection, CategoryStages, GoodsOfTheDay, GenderChoose, GreetingSection},
  beforeRouteEnter() {
    ym(94762887, 'hit', "/")
  },
})
</script>

<style lang="scss">

</style>
