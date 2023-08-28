<template>
  <section class="category_section">
    <div class="limiter">
      <div class="categories">
        <div class="main_block_col first_col">
          <CategoryComponent
            :title="$t(`forthSection.shoes`)"
            image="section_4/categories/1.jpg"
            class="category_1"
          />
          <CategoryComponent
            :title="$t(`forthSection.outerwear`)"
            image="section_4/categories/2.jpg"
            class="category_2"
          />
        </div>
        <div class="main_block_col second_col">
          <div class="row first_row">
            <CategoryComponent
              :title="$t(`forthSection.hoodie`)"
              image="section_4/categories/6.jpg"
              class="category_3"
            />
            <div class="col">
              <CategoryComponent
                :title="$t(`forthSection.hats`)"
                image="section_4/categories/4.jpg"
                class="category_4"
              />
              <CategoryComponent
                :title="$t(`forthSection.dresses`)"
                image="section_4/categories/3.jpg"
                class="category_5"
              />
            </div>
          </div>
          <div class="row second_row">
            <CategoryComponent
              :title="$t(`forthSection.juwels`)"
              image="section_4/categories/8.jpg"
              class="category_6"
            />
            <CategoryComponent
              :title="$t(`forthSection.jeansAndTrousers`)"
              image="section_4/categories/9.jpg"
              class="category_7"
            />
          </div>
        </div>
        <div class="main_block_col third_col">
          <CategoryComponent
            :title="$t(`forthSection.tshirts`)"
            image="section_4/categories/5.jpg"
            class="category_8"
          />
          <CategoryComponent
            :title="$t(`forthSection.glasses`)"
            image="section_4/categories/7.jpg"
            class="category_9"
          />
        </div>
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
})
</script>

<style scoped lang="scss">
@media (max-width: 1530px) {
  .category_6{
    width: calc(50% - calc(15px / 2)) !important;
  }
  .category_7{
    width: calc(50% - calc(15px / 2)) !important;
  }
}
@media (max-width: 1250px) {
  .category_3{
    width: calc(50% - calc(15px / 2)) !important;
  }
}
@media (max-width: 1024px) {
  .first_col{
    flex-grow: 25 !important;
  }
  .third_col{
    flex-grow: 25 !important;

  }
}
@media (max-width: 840px) {
  .first_col{
    flex-grow: 20 !important;
  }
  .third_col{
    flex-grow: 20 !important;
  }
}
@media (max-width: 790px) {
  .categories{
    flex-direction: column;
  }
  .first_col{
    flex-direction: row !important;
  }
  .third_col{
    flex-direction: row !important;
  }
}
.category_section {
  $gap: 15px;
  padding: 30px 0 7rem;

  .categories {
    display: flex;
    gap: $gap;

    .main_block_col {
      display: flex;
      flex-direction: column;
      gap: $gap;
    }

    .first_col {
      flex-grow: 30;

      .category_1 {
        aspect-ratio: 1;
        flex-grow: 1;
      }

      .category_2 {
        flex-grow: 2;

      }
    }

    .second_col {
      //width: 40.75%;
      flex-grow: 40;

      .first_row {
        display: flex;
        gap: $gap;
        flex-grow: 1;
        flex-wrap: nowrap;

        .category_3 {
          aspect-ratio: 1;
          width: 70%;
          //flex-grow: 1;
        }

        .col {
          width: 30%;
          gap: $gap;
          display: flex;
          flex-direction: column;
          //flex-grow: 30;
          .category_4 {
            flex-grow: 1;
          }

          .category_5 {
            flex-grow: 1;
          }
        }
      }

      .second_row {
        width: 100%;
        display: flex;
        gap: $gap;

        .category_6 {
          width: calc(28.75% - calc(#{$gap} / 2));
          flex-grow: 2;
        }

        .category_7 {
          width: calc(71.25% - calc(#{$gap} / 2));
          flex-grow: 1;
        }
      }

    }

    .third_col {
      //width: 31.25%;
      flex-grow: 30;

      .category_8 {
        flex-grow: 1;
      }
    }
  }
}
</style>
