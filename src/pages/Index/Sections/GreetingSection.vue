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
        class="slider greeting_slider"
        infinite
        ref="carousel"
        autoplay
      >
        <template v-slot:control>
          <q-carousel-control
            position="right"
            class="carouser_control control_right"
            @click="$refs.carousel.next()"
          >
            <button class="change_slide_button">
              <q-icon class="icon" name="sym_r_arrow_forward_ios"/>
            </button>
          </q-carousel-control>
          <q-carousel-control
            position="left"
            class="carouser_control control_left"
            @click="$refs.carousel.previous()"
          >
            <button class="change_slide_button">
              <q-icon class="icon" name="sym_r_arrow_forward_ios"/>
            </button>
          </q-carousel-control>
        </template>
        <q-carousel-slide :name="1" class="slide third_slide">
          <FillerWrapper class="image_wrapper first_image">
            <img class="image" src="~/assets/section_1/photos/6118fb8269a0378477b5cbd620df05e3.jpg"
                 alt="Woman standing">
          </FillerWrapper>
          <div class="content_wrapper">
            <div class="title_wrapper">
              <h1 class="slide_title" v-html="$t('firstSection.slides.third.title')"/>
              <div class="separator"/>
            </div>
            <p class="text" v-html="$t('firstSection.slides.third.text')"/>
            <a href="" class="start_link">
              <p class="start_link_text" v-html="$t('firstSection.slides.third.startLink')"/>
              <img
                class="icon"
                src="~/assets/icons/rightArrow.png"
                alt="Arrow right"
              >
            </a>
          </div>
          <FillerWrapper class="image_wrapper second_image">
            <img class="image" src="~/assets/section_1/photos/4559777f0e46f79fdaa3a174967dc3f9.jpg"
                 alt="Woman standing">
          </FillerWrapper>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="slide second_slide">
          <FillerWrapper class="filler_wrapper">
            <div class="part">
              <h1 class="slide_title" v-html="$t('firstSection.slides.second.title')"/>
              <div class="separator"/>
              <p class="subtitle" v-html="$t('firstSection.slides.second.subtitle')"/>
              <p class="text">
                {{ $t('firstSection.slides.second.text') }}
              </p>
              <button class="start_button">
                {{ $t('buttons.goTo') }}
                <img class="icon" src="~/assets/icons/rightArrow.png" alt="Arrow right">
              </button>
            </div>
            <div class="photo_part">
              <img class="slide_photo" src="~/assets/section_1/photos/1banner_woman.png" alt="Woman in hat">
            </div>
          </FillerWrapper>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="slide first_slide">
          <FillerWrapper class="filler_wrapper">
            <div class="part">
              <div class="collections_block">
                <p class="collections_text" v-html="$t('firstSection.slides.first.collectionsText')"/>
              </div>
              <div class="">
                <h1 class="title" v-html="$t('firstSection.slides.first.title')"/>
                <div class="row">
                  <p class="description">
                    {{ $t('firstSection.slides.first.description') }}
                  </p>
                </div>
              </div>
              <div class=""/>
            </div>
          </FillerWrapper>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import FillerWrapper from "src/composnents/FillerWrapper.vue";

export default defineComponent({
  name: "GreetingSection",
  components: {FillerWrapper},
  data() {
    return {
      slide: 1
    }
  }
})
</script>

<style scoped lang="scss">

@media (max-width: 1600px) {
  .third_slide {
    .first_image {
      display: none !important;
    }

    .content_wrapper {
      width: 50% !important;
      align-items: flex-start !important;
      text-align: start !important;

      .title_wrapper {
        align-items: flex-start !important;
      }
    }

    .second_image {
      width: 50% !important;

      .image {
        width: 100%;
      }
    }
  }
}

@media (max-width: 1550px) {
  .first_slide {
    .filler_wrapper {
      background-size: 50% !important;
      background-position-y: center !important;
    }

    .part {
      padding: 30px !important;
      width: 45% !important;

      .title {
        font-size: 60px !important;
        line-height: normal !important;
      }
    }
  }
}

@media (max-width: 1350px) {
  .first_slide {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .filler_wrapper {
      height: auto !important;
    }

    .collections_block {
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 1220px) {
  .first_slide {
    .filler_wrapper {
      background-size: 45% !important;
    }

    .part {
      width: 50% !important;
    }
  }
}

@media (max-width: 1200px) {
  .second_slide {
    .slide_title {
      font-size: 50px !important;
    }


  }
  .slide {
    .filler_wrapper {
      padding: 20px !important;
    }
  }
}

@media (max-width: 1130px) {
  .first_slide {
    .part {
      .title {
        font-size: 50px !important;
      }
    }
  }
}

@media (max-width: 1010px) {
  .first_slide {
    .part {
      .title {
        font-size: 40px !important;
      }
    }

    .filler_wrapper {
      padding: 20px !important;
    }

    .collections_text {
      font-size: 25px !important;
    }

  }
  .third_slide {
    background-image: url(http://localhost:8080/img/2background.a09f2a99.png) !important;
    background-size: auto !important;
    background-position: center center !important;

    .content_wrapper {
      width: 100% !important;
      align-items: center !important;
      text-align: center !important;

      .title_wrapper {
        align-items: center !important;
      }
    }

    .second_image {
      display: none !important;
    }
  }
}

@media (max-width: 980px) {
  .first_slide {
    .filler_wrapper {
      background: none !important;
    }

    .part {
      width: 100% !important;

      .collections_block {
        margin-bottom: 20px !important;
      }

      .title {
        font-size: 35px !important;
        text-align: center;
      }

      .description {
        text-align: center;
      }
    }
  }
}

@media (max-width: 900px) {
  .first_slide {
    .part {
      .title {
        font-size: 35px !important;
      }
    }
  }
  .second_slide {
    .photo_part {
      display: none !important;
    }

    .part {
      align-items: center !important;
      text-align: center !important;
    }
  }
}


@media (max-width: 800px) {
  .q-carousel__control {
    display: none !important;
  }
  .slide {
    padding: 0 !important;
  }
}

@media (max-width: 600px) {
  .first_slide {
    .part {
      padding: 0 !important;

      .collections_block {
        margin-left: 10px;
      }
    }
  }
  .second_slide {
    .part {
      width: 100%;

      .right_filler {
        display: none;
      }

      .separator {
        width: 70% !important;
      }
    }

    .slide_title {
      font-size: 35px !important;
    }

    .subtitle {
      font-size: 20px !important;
    }

    .text {
      font-size: 15px !important;
    }

    .start_button {
      font-size: 15px !important;
    }
  }
  .third_slide {
    .slide_title {
      font-size: 35px !important;
    }

    .text {
      font-size: 20px !important;
      margin-bottom: 30px;
    }

    .content_wrapper {
      justify-content: center !important;
      height: 100% !important;
    }

    .start_link_text {
      font-size: 25px !important;
    }
  }
}

@media (max-width: 400px) {
  .first_slide {
    .collections_block {
      &::before {
        right: -15px !important;
      }

      .collections_text {
        font-size: 20px !important;

      }
    }

  }
}

.slider {
  width: 100%;
  height: 100%;

  .carouser_control {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.control_left {
      .change_slide_button {
        .icon {
          transform: scale(-1, 1);
        }
      }
    }

    .change_slide_button {
      display: flex;
      align-items: center;
      height: 100%;
      background-color: transparent;
      padding: 15px;
      position: relative;

      &::after {
        content: '';
        height: 100px;
        aspect-ratio: 1;
        position: absolute;
        border-radius: 50%;
        transition: background-color 0.3s ease-out;
        left: 50%;
        transform: translate(-50%, 0);
      }

      &:hover::after {
        background-color: rgba(202, 201, 201, 0.2);
      }

      .icon {
        font-size: 32px;
        color: #ebebeb;
        display: flex;
        justify-content: center;
      }
    }
  }

  .slide {
    padding: 60px;
  }

  .first_slide {

    .filler_wrapper {
      display: flex;
      background: url("src/assets/section_1/photos/fd2bf24651299e029133fdafbb4c570b-up.jpg") no-repeat;
      background-size: contain;
      background-position-x: right;
      height: 100%;
      background-origin: content-box;
    }

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
          min-width: 70px;
          min-height: 70px;
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
    background-image: url("src/assets/section_1/backgrounds/1banner.png");

    .filler_wrapper {
      width: 100%;
      height: 100%;
      display: flex;
    }

    .part {
      flex-grow: 6;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;


      .slide_title {
        font-size: 65px;
        line-height: normal;
        font-weight: 400;
      }

      .separator {
        width: 334px;
        height: 3px;
        border-radius: 10px;
        background-color: $dark;
        margin: 20px 0;
      }

      .subtitle {
        font-size: 30px;
      }

      .text {
        font-size: 23px;
        color: #787878;
        max-width: 700px;
      }

      .start_button {
        margin-top: 80px;
        font-size: 20px;
        padding: 25px 45px;
        color: white;
        background-color: #787878;
        display: flex;
        align-items: center;
        position: relative;

        .icon {
          width: 16px;
          display: inline-block;
          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(102%) contrast(102%);
          position: relative;
          top: 1px;
          margin-left: 4px;
        }
      }
    }

    .photo_part {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      flex-grow: 4;


      .slide_photo {
        height: 100%;
        width: 100%;
        position: relative;
        bottom: 15%;
        object-fit: contain;
      }
    }
  }

  .third_slide {
    display: flex;
    justify-content: space-between;
    $accent: #787460;
    background-image: url("src/assets/section_1/backgrounds/2background.png"),
    url("src/assets/section_1/backgrounds/2background.png"),
    url("src/assets/section_1/backgrounds/2background.png");
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 0 top, center top, right top;
    background-size: 33.3% 100%;


    .image_wrapper {
      box-sizing: content-box;
      width: 33.33%;
      display: flex;
      justify-content: center;

      .image {
        height: 100%;
        -webkit-box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.3);
        max-width: 431px;
        object-fit: cover;
      }
    }

    .content_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      height: 87%;
      padding: 60px 0;
      width: 33.33%;

      .title_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .slide_title {
          font-size: 50px;
          line-height: normal;
        }

        .separator {
          width: 80%;
          height: 2px;
          background-color: $dark;
          margin: 10px 0 40px 0;
        }
      }

      .text {
        font-size: 26px;
        max-width: 70%;
      }

      .start_link {
        display: flex;
        flex-wrap: nowrap;

        .start_link_text {
          font-size: 28px;
          color: $accent;
        }

        .icon {
          width: 16px;
          object-fit: contain;
          position: relative;
          top: 1px;
          filter: invert(44%) sepia(2%) saturate(3202%) hue-rotate(13deg) brightness(99%) contrast(75%);
        }
      }
    }
  }
}


.landing_section {
  height: min(1080px, calc(100dvh - 60px));

  .limiter {
    height: 100%;
    -webkit-box-shadow: 0 0 67px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 67px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 67px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

<style lang="scss">
@media (max-width: 600px) {
  .slide {
    .filler {
      display: none !important;
    }
  }
}

.greeting_section {
  .first_slide {
    span {
      transform: rotate(70deg);
      -ms-transform: rotate(70deg);
      -webkit-transform: rotate(-3deg);
      color: $accent;
      display: inline-block;
    }
  }

  .second_slide {
    span {
      color: #7d4931;
    }
  }

  .third_slide {
    span {
      color: #787460;
    }
  }
}

.greeting_slider {
  .control_right {
    margin: 0 !important;
  }

  .control_left {
    margin: 0 !important;
  }
}
</style>
