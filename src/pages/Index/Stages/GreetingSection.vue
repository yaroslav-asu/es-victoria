<template>
  <section class="landing_section greeting_section">
    <div class="limiter">
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
            Поймите Кто Вы с Нашей <span>Одеждой</span>
          </h1>
          <div class="row">
            <p class="description">
              Вырази себя с уверенностью в каждой детали! Стильная одежда — ключ к вашей неповторимой индивидуальности.
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
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GreetingSection"
})
</script>

<style scoped lang="scss">
.landing_section {
  height: calc(100vh - 130px);

  .limiter {
    display: flex;
    background: url("src/assets/section_1/sitting_woman.jpeg") no-repeat;
    background-size: contain;
    background-position-x: right;
    height: 100%;

    .part {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 0;
      position: relative;

      .collections_block {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 120px;
        margin-top: 40px;

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
        font-weight: 700;
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
        position: relative;
        top: 30px;

        .partners {
          display: flex;
          gap: 40px;
          position: relative;
          top: -30px;

          .partner_logo {
            width: 120px;
          }
        }
      }
    }
  }

}
</style>
