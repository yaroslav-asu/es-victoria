<template>
  <section class="goods_of_the_day">
    <div class="limiter">
      <div class="row">
        <p class="title">{{ $t('thirdSection.title') }}</p>
        <div class="separator"/>
      </div>
      <div class="products_view">
        <div class="control_wrapper left">
          <button class="products_control" v-if="slider.page > 1" @click="slider.page--">
            <q-icon class="icon" name="sym_r_chevron_left"/>
          </button>
        </div>
        <div class="products_wrapper"
             :style="{right:this.rightPadding+ 'px'}">
          <div class="product" v-for="(product, id) in products" :key="product.price" ref="product">
            <q-img class="product_image" :src="`section_3/shorts/${id + 1}.png`" :ratio="413/577" fit="contain">
              <div class="content">
                <q-icon class="favorite_button" :name="product.favorite ? 'favorite':'favorite_border'"
                        @click="product.favorite = !product.favorite"/>
              </div>
            </q-img>
            <div class="row">
              <p class="product_title" v-html="$t(`thirdSection.products.${id + 1}`)"/>
              <p class="price">{{ product.price }} ₽</p>
            </div>
            <q-resize-observer @resize="productResize"/>
          </div>
        </div>
        <div class="control_wrapper right">
          <button class="products_control" v-if="slider.page < products.length / slider.shift" @click="slider.page++">
            <q-icon class="icon" name="sym_r_chevron_right"/>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GoodsOfTheDay",
  data() {
    return {
      slider: {
        page: 1,
        shift: 3
      },
      products: [
        {
          price: 1999,
          favorite: false,
        },
        {
          price: 1499,
          favorite: false,

        },
        {
          price: 2999,
          favorite: false,
        },
        {
          price: 1999,
          favorite: false,
        },
        {
          price: 1499,
          favorite: false,
        },
        {
          price: 2999,
          favorite: false,
        },
        {
          price: 2999,
          favorite: false,
        },
        {
          price: 1999,
          favorite: false,
        },
        {
          price: 1499,
          favorite: false,
        },
      ],
      productWidth: 0
    }
  },
  methods: {
    productResize() {
      if (!this.$refs.product || !this.$refs.product.length) return
      this.productWidth = this.$refs.product[0].getBoundingClientRect().width
    }
  },
  computed: {
    rightPadding() {
      if (this.slider.page === 1) return 30
      return (this.slider.page - 1) * this.slider.shift * this.productWidth + (this.slider.page - 1) * this.slider.shift * 60 + 30
    }
  }
})
</script>

<style scoped lang="scss">
.goods_of_the_day {
  .limiter {
    padding: 40px 0;

    .row {
      display: flex;
      align-items: center;
      gap: 15px;

      .title {
        font-size: 26px;
      }

      .separator {
        flex-grow: 1;
        height: 2px;
        background-color: $dark;
      }

      margin-bottom: 40px;
    }

    .products_view {
      overflow-x: hidden;
      width: 100%;
      position: relative;

      .control_wrapper {
        position: absolute;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;

        &.left {
          left: 0;
        }

        &.right {
          right: 0;
        }

        .products_control {
          z-index: 1;
          background-color: transparent;
          font-size: 30px;
          height: 100%;
        }
      }

      .products_wrapper {
        display: flex;
        flex-wrap: nowrap;
        gap: 60px;
        position: relative;
        padding-left: 60px;
        transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);

        .product {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-width: calc(100% / 4 - 45px);
          position: relative;

          .product_image {
            position: relative;
            height: 100%;

            .content {
              position: absolute;
              background-color: transparent;
              width: 100%;
              padding: 10px;
              text-align: end;
              color: $dark;
            }

            .favorite_button {

            }
          }
        }

        .row {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;

          .product_title {
          }

          .price {
          }
        }
      }
    }


  }
}

</style>
