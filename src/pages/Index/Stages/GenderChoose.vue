<template>
  <section class="gender_choose_section">
    <div class="limiter">
      <div class="col text_col">
        <div class="">
          <p class="slogan" v-html="$t('secondSection.slogan')"/>
          <h1 class="title" v-html="$t('secondSection.title')"/>
          <p class="description">{{ $t('secondSection.description') }}</p>
        </div>
        <div class="partnersWrapper">
          <p class="partners_text">{{ $t('secondSection.partners') }}</p>
          <div class="partners">
            <img class="partner" src="~/assets/section_1/brands/balmain.svg" alt="Balmain logo">
            <img class="partner" src="~/assets/section_1/brands/dior.svg" alt="Dior logo">
            <img class="partner" src="~/assets/section_1/brands/nike.svg" alt="Nike logo">
            <img class="partner" src="~/assets/section_1/brands/versace.svg" alt="Versace logo">
          </div>
        </div>
      </div>
      <div class="col image_col">
        <q-img class="image" src="~/assets/section_2/photos/man_1.png"/>
        <a href="" class="go_to_link">
          {{ $t('secondSection.mensCatalog') }}
          <q-icon class="icon" name="sym_r_keyboard_arrow_right"/>
        </a>
      </div>
      <div class="col image_col">
        <q-img class="image" src="~/assets/section_2/photos/woman_1.png"/>
        <a href="" class="go_to_link">
          {{ $t('secondSection.womensCatalog') }}
          <q-icon class="icon" name="sym_r_keyboard_arrow_right"/>
        </a>
      </div>
    </div>

  </section>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GenderChoose"
})
</script>

<style scoped lang="scss">
.gender_choose_section {
  background: url("src/assets/section_2/background/background.png") no-repeat center, #736f6f;

  .limiter {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 80px 0;

    .col {
      width: calc(33.3% - 20px);

      &.text_col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .slogan {
        font-size: 24px;
        color: white;
        margin-bottom: 40px;
      }

      .title {
        font-size: 50px;
        font-weight: 500;
        color: white;
        line-height: normal;
        margin-bottom: 40px;

      }

      .description {
        font-size: 20px;
        color: white;

      }

      .partnersWrapper {

        .partners_text {
          color: #171717;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .partners {
          display: flex;
          gap: 24px;

          .partner {
            width: calc(25% - 18px);
          }
        }
      }

    }

    .image_col {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0 40px 0;

      .image {
        margin-bottom: 40px;
        width: 100%;

        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          transition: background-color 0.2s ease-in-out;
          cursor: pointer;
        }

        &:hover {
          &::before {
            background-color: rgba(white, 0.1);
          }
        }
      }

      .go_to_link {
        color: white;
        font-size: 20px;

        .icon {
          font-size: 25px;
          padding: 2px;
          border-radius: 50%;
          border: 1px solid white;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.gender_choose_section {
  span {
    color: #a8988b;
  }
}

</style>
