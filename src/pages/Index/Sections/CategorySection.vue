<template>
  <section class="category_section">
    <div class="limiter">
      <div class="categories">
        <CategoryComponent
          v-for="(category, id) in categories"
          :title="$t(`forthSection.${category.title}`)"
          :image="`section_4/categories/${category.image}.jpg`"
          :class="`category_${id + 1}`"
          :position="category.position ? category.position : null"
          :img-style="category.imgStyle ? category.imgStyle : null"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import CategoryComponent from "src/composnents/CategoryComponent.vue";

export default defineComponent({
  name: "CategoryStages",
  components: {CategoryComponent},
  data() {
    return {
      categories: [
        {title: 'shoes', image: '1',},
        {title: 'hoodie', image: '6', position: '0 0'},
        {title: 'hats', image: '4'},
        {title: 'dresses', image: '3'},
        {title: 'tshirts', image: '5'},
        {title: 'outerwear', image: '2'},
        {title: 'juwels', image: '8'},
        {title: 'jeansAndTrousers', image: '9'},
        {title: 'glasses', image: '7'},
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.category_section {
  $gap: 15px;
  padding: 30px 0 7rem;

  .categories {
    $widthGap: calc(#{$gap} * 4 / 5);
    display: grid;
    grid-template-columns: min(calc(23.375vw - #{$widthGap}), 435.383px)  min(calc(9.35vw - #{$widthGap}), 166.95px) min(calc(21.0375vw - #{$widthGap}), 405.65px) min(calc(9.35vw - #{$widthGap}), 166.9px) min(calc(30.3875vw - #{$widthGap}), 569.617px);
    grid-template-rows: min(calc(15.1937vw - #{$widthGap} / 2), 284.8px) min(calc(8.1812vw - #{$gap} - #{$widthGap} / 2), 150.583px) min(calc(7.0125vw - #{$widthGap}), 137.217px) min(16.3625vw, 328.167px) min(calc(14.025vw - #{$widthGap} * 2), 244.433px);
    gap: $gap;

    .category_1 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .category_2 {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 4;
    }

    .category_3 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .category_4 {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 4;
    }

    .category_5 {
      grid-column-start: 5;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 5;
    }

    .category_6 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 6;
    }

    .category_7 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 6;
    }

    .category_8 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;
    }
  }
}
</style>
