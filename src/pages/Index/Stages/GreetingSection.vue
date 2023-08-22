<template>
  <section class="landing_section greeting_section">
    <div class="limiter">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="grey"
        padding
        arrows
        class="slider"
        infinite
        autoplay
        navigation

      >
        <q-carousel-slide :name="1" class="slide first_slide">
          <div class="part">
            <div class="collections_block">
              <p class="collections_text">
                Новые коллекции
                <br/>
                Весна 2023
              </p>
            </div>
            <div class="">
              <h1 class="title">
                Поймите Кто Вы Благодаря Нашей <span>Одежде</span>
              </h1>
              <div class="row">
                <p class="description">
                  Вырази себя с уверенностью в каждой детали! Стильная одежда — ключ к вашей неповторимой
                  индивидуальности.
                  Отражай свою личность через модные образы и создавай впечатление, которое запомнят навсегда.
                </p>
                <button class="start_button">
                  <q-icon class="icon" name="sym_r_arrow_forward"/>
                </button>
              </div>
            </div>

            <div class="partners_wrapper">
              Наши партнеры
              <div class="partners">
                <img class="partner_logo" src="~/assets/section_1/brands/balmain.svg" alt="Adidas Logo">
                <img class="partner_logo" src="~/assets/section_1/brands/dior.svg" alt="Adidas Logo">
                <img class="partner_logo" src="~/assets/section_1/brands/nike.svg" alt="Adidas Logo">
                <img class="partner_logo" src="~/assets/section_1/brands/versace.svg" alt="Adidas Logo">
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="slide second_slide">
          <div class="part">
            <div class="collections_block">
              <p class="collections_text">
                Новые коллекции
                <br/>
                Весна 2023
              </p>
            </div>
            <div class="">
              <h1 class="title">
                Посмотрите Новую Леюнюю <span>Коллекцию</span>
              </h1>
              <div class="row">
                <p class="description">
                  Вырази себя с уверенностью в каждой детали! Стильная одежда — ключ к вашей неповторимой
                  индивидуальности.
                  Отражай свою личность через модные образы и создавай впечатление, которое запомнят навсегда.
                </p>
                <button class="start_button">
                  <q-icon class="icon" name="sym_r_arrow_forward"/>
                </button>
              </div>
            </div>
            <div class=""></div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="slide third_slide">
          <div class="part">
            <div class="collections_block">
              <p class="collections_text">
                Новые коллекции
                <br/>
                Весна 2023
              </p>
            </div>
            <div class="">
              <h1 class="title">
                Посмотрите Новую Мужскую <span>Коллекцию</span>
              </h1>
              <div class="row">
                <p class="description">
                  Вырази себя с уверенностью в каждой детали! Стильная одежда — ключ к вашей неповторимой
                  индивидуальности.
                  Отражай свою личность через модные образы и создавай впечатление, которое запомнят навсегда.
                </p>
                <button class="start_button">
                  <q-icon class="icon" name="sym_r_arrow_forward"/>
                </button>
              </div>
            </div>
            <div class=""></div>
          </div>
        </q-carousel-slide>

      </q-carousel>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GreetingSection",
  data() {
    return {
      slide: 1
    }
  }
})
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  height: 100%;

  .slide {
    padding-bottom: 0;
  }

  .first_slide {
    display: flex;
    background: url("src/assets/section_1/fd2bf24651299e029133fdafbb4c570b-up.jpg") no-repeat;

    background-size: contain;
    background-position-x: right;

    .part {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 0;

      .collections_block {
        position: relative;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          display: block;
          background-color: $accent;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          $shadowMargin: -35px;
          -webkit-box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
          -moz-box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
          box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
          right: -10px;
          position: relative;
          z-index: 0;
        }

        .collections_text {
          font-size: 30px;
          font-weight: 400;
          line-height: 30px;
          z-index: 1;
          position: relative;
        }
      }

      .title {
        font-weight: 400;
        margin-bottom: 40px;

        span {
          transform: rotate(70deg);
          -ms-transform: rotate(70deg);
          -webkit-transform: rotate(-3deg);
          color: $accent;
          display: inline-block;
        }
      }

      .row {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        gap: 20px;
        margin-bottom: 40px;

        .description {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.4);
        }

        .start_button {
          min-width: 60px;
          min-height: 60px;
          border-radius: 50%;
          background-color: $dark;

          .icon {
            font-size: 40px;
            color: white;
            rotate: -45deg;
          }
        }

      }

      .partners_wrapper {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.4);

        .partners {
          margin-top: 30px;
          display: flex;
          gap: 40px;
          align-items: center;

          .partner_logo {
            width: 120px;
          }
        }
      }
    }
  }

  .second_slide {
    background: url("src/assets/section_1/511f752fc74ea31fd30df0e19119054a-up.jpg") no-repeat;
    background-size: contain;
    background-position-x: left;
    display: flex;
    justify-content: flex-end;

    $accent: #c49c7e;

    .collections_block {
      position: relative;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: block;
        background-color: $accent;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        $shadowMargin: -35px;
        -webkit-box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
        box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
        right: -10px;
        position: relative;
        z-index: 0;
      }

      .collections_text {
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        z-index: 1;
        position: relative;
      }
    }

    .part {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .title {
      font-weight: 400;
      margin-bottom: 40px;

      span {
        transform: rotate(70deg);
        -ms-transform: rotate(70deg);
        -webkit-transform: rotate(-3deg);
        color: $accent;
        display: inline-block;
      }
    }

    .row {
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: nowrap;
      align-items: flex-end;
      gap: 20px;
      margin-bottom: 40px;

      .description {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.4);
      }

      .start_button {
        min-width: 60px;
        min-height: 60px;
        border-radius: 50%;
        background-color: $dark;

        .icon {
          font-size: 40px;
          color: white;
          rotate: -45deg;
        }
      }
    }
  }

  .third_slide {
    background: url("src/assets/section_1/831e7f1d463a6fe92d89d79613918ca7.jpg") no-repeat;
    background-size: contain;
    background-position-x: right;
    display: flex;
    justify-content: flex-start;
    $accent: #335230;

    .part {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 0;

      .collections_block {
        position: relative;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          display: block;
          background-color: $accent;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          $shadowMargin: -35px;
          -webkit-box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
          -moz-box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
          box-shadow: $shadowMargin 0 0 0 rgba(0, 0, 0, 0.1);
          right: -10px;
          position: relative;
          z-index: 0;
        }

        .collections_text {
          font-size: 30px;
          font-weight: 400;
          line-height: 30px;
          z-index: 1;
          position: relative;
        }
      }

      .title {
        font-weight: 400;
        margin-bottom: 40px;

        span {
          transform: rotate(70deg);
          -ms-transform: rotate(70deg);
          -webkit-transform: rotate(-3deg);
          color: $accent;
          display: inline-block;
        }
      }

      .row {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        gap: 20px;
        margin-bottom: 40px;

        .description {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.4);
        }

        .start_button {
          min-width: 60px;
          min-height: 60px;
          border-radius: 50%;
          background-color: $dark;

          .icon {
            font-size: 40px;
            color: white;
            rotate: -45deg;
          }
        }

      }

      .partners_wrapper {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.4);

        .partners {
          margin-top: 30px;
          display: flex;
          gap: 40px;
          align-items: center;

          .partner_logo {
            width: 120px;
          }
        }
      }
    }

  }
}


.landing_section {
  height: calc(100vh - 130px);

  .limiter {
    height: 100%;
  }
}
</style>
