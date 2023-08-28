<template>
  <section class="gender_choose_section">
    <div class="limiter">
      <div class="col text_col">
        <div class="texts_wrapper">
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
      <div class="images_wrapper">
        <div class="col image_col">
          <q-img class="image_wrapper" src="~/assets/section_2/photos/man_1.png">
<!--            <div class="text_wrapper">-->
              <a href="" class="text">
                {{ $t('secondSection.mensCatalog') }}
              </a>
<!--            </div>-->

          </q-img>
        </div>
        <div class="col image_col">
          <q-img class="image_wrapper" src="~/assets/section_2/photos/woman_1.png">
<!--            <div class="text_wrapper">-->
              <a href="" class="text">
                {{ $t('secondSection.mensCatalog') }}
              </a>
<!--            </div>-->
          </q-img>
        </div>
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
@media (max-width: 1640px) {
  .description {
    margin-bottom: 30px;
  }
  .image_col {
    padding: 0 !important;
  }
  .title {
    font-size: 40px !important;
  }
}

@media (max-width: 1000px) {
  .images_wrapper {
    width: calc(30% - 60px) !important;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .text_col {
    width: 70% !important;
  }
  .image_col {
    width: 100% !important;
  }
  .texts_wrapper {
    flex-grow: 1;
  }
  .partnersWrapper {
    width: 100%;
  }
  .texts_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 0;
  }
}

@media (max-width: 840px) {
  .images_wrapper {
    width: 35% !important;
  }
  .text_col {
    width: calc(65% - 60px) !important;
  }
  .image_wrapper {
    margin-bottom: 30px !important;
  }
}

@media (max-width: 780px) {
  .partners {
    flex-wrap: wrap;
  }
}

@media (max-width: 700px) {
  .title {
    font-size: 30px !important;
  }
  .partnersWrapper {
    display: none !important;
  }
}

@media (max-width: 590px) {
  .limiter {
    gap: 30px !important;
  }
  .images_wrapper {
    justify-content: center !important;
    width: 40% !important;
  }
  .text_col {
    width: calc(60% - 30px) !important;
  }
  .image_col {
    flex: none !important;
  }
  .texts_wrapper {
    padding: 30px 0 !important;
  }
}

@media (max-width: 530px) {
  .limiter {
    flex-direction: column !important;
    align-items: center;
  }
  .text_col {
    width: 100% !important;
  }
  .texts_wrapper {
    padding: 0 !important;
    text-align: center;
  }
  .description {
    display: none;
  }

  .images_wrapper {
    width: 100% !important;
    flex-direction: row !important;
    gap: 20px !important;

    .image_col {
      width: calc(50% - 10px) !important;
    }
  }
  .go_to_link {
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 5px !important;

    .icon {
      display: none !important;
    }
  }
  .image_wrapper {
    margin-bottom: 10px !important;
  }
}

@media (max-width: 430px) {
  .go_to_link {
    font-size: 14px !important;
  }
}


.gender_choose_section {
  background: url("src/assets/section_2/background/background.png") no-repeat center, #736f6f;
  padding: 80px 0;

  .limiter {
    display: flex;
    justify-content: space-between;
    gap: 60px;

    .col {
      &.text_col {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: none !important;
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
            width: max(calc(25% - 18px), 80px);
          }
        }
      }

    }

    .images_wrapper {
      display: flex;
      gap: 60px;
      width: 66.6%;


      .image_col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;

        .image_wrapper {
          margin-bottom: 40px;
          width: 100%;

          //.text_wrapper {
            .text {
              position: absolute;
              bottom: 10px;
              left: 10px;
              padding: 20px;
              text-align: center;
              width: calc(100% - 20px);
              color: rgba(black, 0.8);
              background-color: rgba(white, 0.5);
              backdrop-filter: blur(5px);
              font-size: 16px;
              font-weight: 700;
            }
          //}


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
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;

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
}
</style>
<style lang="scss">
.gender_choose_section {
  span {
    color: #a8988b;
  }
}

</style>
