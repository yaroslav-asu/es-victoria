<template>
  <div class="burger_menu_wrapper" @click="toggle">
    <button class="burger_menu_button" :class="isOpen ? 'burger--active' : ''"/>
    <p class="text">
      {{ $t('buttons.menu') }}
    </p>
  </div>
  <div class="limiter" ref="limiter"/>
  <div class="overlay" @click="toggle" v-if="this.isOpen"/>
  <div class="menu"
       :style="{width: isOpen ? `${menuWidth}px` : '0',  transition: !menuResizeTransition ? 'none !important' : ''}"
       :class="isOpen ? 'menu--active': ''">
    <div class="content">
      <p class="content_hover" v-for="(category, id) in categories" @mouseenter="() => mouseEnter(id)"
         @mouseleave="() => mouseLeave(id)">
        {{ $t(`menu.${category.title}`) }}
      </p>
      <LanguageSwitcher class="language_switcher"/>
    </div>
  </div>
  <div
    class="content_section"
    :style="{left: isOpen ? menuWidth + 'px' : ''}"
    @mouseenter="additionalMenuHovered = true"
    @mouseleave="additionalMenuLeave"
  >
    <div class="menu_content first_content_style mirror_style" v-if="categories[0].isHovered"
         :style="{ width: $q.screen.width <= 720 ? additionalMenuWidth: ''}">
      <div class="row">
        <div class="col brands_col">
          <p class="column_title">{{ $t('menu.titles.brands').toUpperCase() }}</p>
          <a class="link" v-for="brand in content.novelties.brands" :key="brand.link"
             :href="brand.link">{{ brand.title }}</a>
        </div>
        <div class="col">
          <p class="column_title">{{ $t('menu.titles.categories').toUpperCase() }}</p>
          <a class="link" v-for="category in content.novelties.categories" :key="category.title"
             :href="category.link">{{ $t(`menu.content.${category.title}`) }}</a>
        </div>
      </div>
      <div class="categories_demonstration">
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/shoes.png"/>
          <p>{{ $t('menu.content.shoes').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper long">
          <q-img class="image" src="~/assets/menu/jeans.webp"/>
          <p>{{ $t('menu.content.jeans').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/bags.jpg"/>
          <p>{{ $t('menu.content.bags').toUpperCase() }}</p>
        </a>
      </div>
    </div>
    <div class="menu_content bradns_style" v-if="categories[1].isHovered"
         :style="{ width: $q.screen.width <= 720 ? additionalMenuWidth: ''}">
      <div class="col">
        <p class="column_title">{{ $t('menu.titles.brands').toUpperCase() }}</p>
        <div class="col brands">
          <a class="link" v-for="brand in content.brands" :key="brand.link"
             :href="brand.link">{{ brand.title }}</a>
        </div>
      </div>
      <div class="categories_demonstration">
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/balenciaga.jpg"/>
          <p>BALENCIAGA</p>
        </a>
        <a class="image_wrapper long">
          <q-img class="image" src="~/assets/menu/gucci.webp"/>
          <p>GUCCI</p>
        </a>
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/balmain.jpg"/>
          <p>BALMAIN</p>
        </a>
      </div>
    </div>
    <div class="menu_content first_content_style mirror_style" v-if="categories[2].isHovered"
         :style="{ width: $q.screen.width <= 720 ? additionalMenuWidth: ''}">
      <div class="row">
        <div class="col brands_col">
          <p class="column_title">{{ $t('menu.titles.brands').toUpperCase() }}</p>
          <a class="link" v-for="brand in content.mens.brands" :key="brand.link"
             :href="brand.link">{{ brand.title }}</a>
        </div>
        <div class="col">
          <p class="column_title">{{ $t('menu.titles.categories').toUpperCase() }}</p>
          <a class="link" v-for="category in content.mens.categories" :key="category.title"
             :href="category.link">{{ $t(`menu.content.${category.title}`) }}</a>
        </div>
      </div>
      <div class="categories_demonstration">
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/tie.jpg"/>
          <p>{{ $t('menu.content.ties').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/shoes.webp"/>
          <p>{{ $t('menu.content.shoes').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper long">
          <q-img class="image" src="~/assets/menu/costumes.jpg"/>
          <p>{{ $t('menu.content.costumes').toUpperCase() }}</p>
        </a>
      </div>
    </div>
    <div class="menu_content first_content_style" v-if="categories[3].isHovered"
         :style="{ width: $q.screen.width <= 720 ? additionalMenuWidth: ''}">
      <div class="row">
        <div class="col brands_col">
          <p class="column_title">{{ $t('menu.titles.brands').toUpperCase() }}</p>
          <a class="link" v-for="brand in content.womens.brands" :key="brand.link"
             :href="brand.link">{{ brand.title }}</a>
        </div>
        <div class="col">
          <p class="column_title">{{ $t('menu.titles.categories').toUpperCase() }}</p>
          <a class="link" v-for="category in content.womens.categories" :key="category.title"
             :href="category.link">{{ $t(`menu.content.${category.title}`) }}</a>
        </div>
      </div>
      <div class="categories_demonstration">
        <a class="image_wrapper ">
          <q-img class="image" src="~/assets/menu/perfume.jpg"/>
          <p>{{ $t('menu.content.perfume').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/shoes_woman.jpg"/>
          <p>{{ $t('menu.content.shoes').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper long">
          <q-img class="image" src="~/assets/menu/dress.jpg"/>
          <p>{{ $t('menu.content.dresses').toUpperCase() }}</p>
        </a>
      </div>
    </div>
    <div class="menu_content first_content_style" v-if="categories[4].isHovered"
         :style="{ width: $q.screen.width <= 720 ? additionalMenuWidth: ''}">
      <div class="row">
        <div class="col brands_col">
          <p class="column_title">{{ $t('menu.titles.brands').toUpperCase() }}</p>
          <a class="link" v-for="brand in content.accessories.brands" :key="brand.link"
             :href="brand.link">{{ brand.title }}</a>
        </div>
        <div class="col">
          <p class="column_title">{{ $t('menu.titles.categories').toUpperCase() }}</p>
          <a class="link" v-for="category in content.accessories.categories" :key="category.title"
             :href="category.link">{{ $t(`menu.content.${category.title}`) }}</a>
        </div>
      </div>
      <div class="categories_demonstration">
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/belts.jpg"/>
          <p>{{ $t('menu.content.belts').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/accessories.jpg"/>
          <p>{{ $t('menu.content.watchbands').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper ">
          <q-img class="image" src="~/assets/menu/hats.jpg"/>
          <p>{{ $t('menu.content.hats').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper ">
          <q-img class="image" src="~/assets/menu/scarves.webp"/>
          <p>{{ $t('menu.content.scarves').toUpperCase() }}</p>
        </a>
      </div>
    </div>
    <div class="menu_content first_content_style mirror_style" v-if="categories[5].isHovered"
         :style="{ width: $q.screen.width <= 720 ? additionalMenuWidth: ''}">
      <div class="row">
        <div class="col brands_col">
          <p class="column_title">{{ $t('menu.titles.brands').toUpperCase() }}</p>
          <a class="link" v-for="brand in content.sales.brands" :key="brand.link"
             :href="brand.link">{{ brand.title }}</a>
        </div>
        <div class="col">
          <p class="column_title">{{ $t('menu.titles.categories').toUpperCase() }}</p>
          <a class="link" v-for="category in content.sales.categories" :key="category.title"
             :href="category.link">{{ $t(`menu.content.${category.title}`) }}</a>
        </div>
      </div>
      <div class="categories_demonstration">
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/sweaters.jpg"/>
          <p>{{ $t('menu.content.sweaters').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper">
          <q-img class="image" src="~/assets/menu/hats_2.jpg"/>
          <p>{{ $t('menu.content.winterHats').toUpperCase() }}</p>
        </a>
        <a class="image_wrapper long_horizontal">
          <q-img class="image" src="~/assets/menu/shoes_long.jpg"/>
          <p>{{ $t('menu.content.shoes').toUpperCase() }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import translations from 'src/i18n/ru-RU/menu/index.js'
import LanguageSwitcher from "src/composnents/LanguageSwitcher.vue";

export default defineComponent({
  name: "BurgerMenu",
  components: {LanguageSwitcher},
  data() {
    this.$nextTick(() => {
      this.changeBrands()
    })
    return {
      isOpen: false,
      categories: [
        {title: 'novelties', isHovered: false, stopTimeout: null},
        {title: 'brands', isHovered: false, stopTimeout: null},
        {title: 'mens', isHovered: false, stopTimeout: null},
        {title: 'womens', isHovered: false, stopTimeout: null},
        {title: 'accessories', isHovered: false, stopTimeout: null},
        {title: 'sales', isHovered: false, stopTimeout: null}
      ],
      content: {
        novelties: {
          brands: [{title: 'Adidas', link: ''}, {title: 'Nike', link: ''}, {title: 'Puma', link: ''}, {
            title: 'Reebok',
            link: ''
          }, {title: 'New Balance', link: ''}, {title: 'Vans', link: ''}],
          categories: [
            {title: 'shoes', link: ''},
            {title: 'tshorts', link: ''},
            {title: 'shorts', link: ''},
            {title: 'accessories', link: ''},
            {title: 'bags', link: ''},
            {title: 'underwear', link: ''},
            {title: 'jewelry', link: ''},
            {title: 'watches', link: ''},
            {title: 'glasses', link: ''},
            {title: 'cosmetics', link: ''}
          ]
        },
        brands: [],
        mens: {
          brands: [
            {title: "Hugo Boss", link: ""},
            {title: "Tommy Hilfiger", link: ""},
            {title: "Ralph Lauren", link: ""},
            {title: "Calvin Klein", link: ""},
            {title: "Armani", link: ""},
            {title: "Levi's", link: ""},
            {title: "Nike", link: ""},
            {title: "Adidas", link: ""},
            {title: "Zara", link: ""},
            {title: "Gap", link: ""}
          ],
          categories: [
            {title: "shorts", link: ""},
            {title: "glasses", link: ""},
            {title: "tshorts", link: ""},
            {title: "underwear", link: ""},
            {title: "shoes", link: ""},
            {title: "watches", link: ""},
            {title: "bags", link: ""}
          ]
        },
        womens: {
          brands: [
            {title: "Chanel", link: ""},
            {title: "Gucci", link: ""},
            {title: "Versace", link: ""},
            {title: "Dior", link: ""},
            {title: "Valentino", link: ""},
            {title: "Michael Kors", link: ""},
            {title: "Kate Spade", link: ""},
            {title: "H&M", link: ""}
          ],
          categories: [
            {title: "dresses", link: ""},
            {title: "handbags", link: ""},
            {title: "skirts", link: ""},
            {title: "lingerie", link: ""},
            {title: "shoes", link: ""},
            {title: "jewelry", link: ""},
            {title: "eyewear", link: ""}
          ]
        },
        accessories: {
          brands: [
            {title: "Louis Vuitton", link: ""},
            {title: "Prada", link: ""},
            {title: "Fendi", link: ""},
            {title: "Burberry", link: ""},
            {title: "Givenchy", link: ""},
            {title: "Tiffany & Co.", link: ""},
            {title: "Coach", link: ""},
            {title: "Zara", link: ""}
          ],
          categories: [
            {title: "handbags", link: ""},
            {title: "jewelry", link: ""},
            {title: "eyewear", link: ""},
            {title: "watches", link: ""},
            {title: "hats", link: ""},
            {title: "scarves", link: ""},
            {title: "belts", link: ""}
          ]
        },
        sales: {
          brands: [
            {title: "Calvin Klein", link: ""},
            {title: "Tommy Hilfiger", link: ""},
            {title: "H&M", link: ""},
            {title: "Gucci", link: ""},
            {title: "Versace", link: ""},
            {title: "Chanel", link: ""},
            {title: "Dior", link: ""},
            {title: "Balenciaga", link: ""}
          ],
          categories: [
            {title: "outerwear", link: ""},
            {title: "dresses", link: ""},
            {title: "sweaters", link: ""},
            {title: "shoes", link: ""},
            {title: "accessories", link: ""},
            {title: "skirts", link: ""}
          ]
        }

      },
      additionalMenuHovered: false,
      menuWidth: 0,
      additionalMenuTransition: 100,
      translations,
      menuResizeTransition: true,
      additionalMenuWidth: 0,
      additionalMenuTransform: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.updateMenuWidth()
        this.transition = false
        if (this.$q.screen.width <= 720) {
          this.showOpenAdditionalMenuAnimation()
        }
      } else {
        this.additionalMenuWidth = 0
      }
    },
    mouseEnter(id) {
      this.categories.forEach((category) => {
        category.isHovered = false
      })
      this.categories[id].isHovered = true
      clearTimeout(this.categories[id].stopTimeout)
    },
    mouseLeave(id) {
      this.categories[id].stopTimeout = setTimeout(() => {
        this.categories[id].isHovered = false
      }, this.additionalMenuTransition)
    },
    additionalMenuLeave() {
      this.additionalMenuHovered = false
      this.categories.forEach((category) => {
        category.stopTimeout = setTimeout(() => {
          category.isHovered = false
        }, this.additionalMenuTransition)
      })
    },
    screenResize() {
      this.updateMenuWidth()
      this.menuResizeTransition = false
      setTimeout(() => {
        this.menuResizeTransition = true
      }, 500)
    },
    updateMenuWidth() {
      this.menuWidth = this.$refs.limiter.getBoundingClientRect().left
      if (this.$q.screen.width >= 790) {
        this.menuWidth += 200
      } else {
        this.menuWidth += 130
      }
    },
    showOpenAdditionalMenuAnimation() {
      this.additionalMenuWidth = `calc(100vw - ${this.menuWidth}px)`
    },
    changeBrands() {
      if (this.$q.screen.width <= 790) {
        this.content.brands = [
          {title: 'Valentino', link: ''},
          {title: 'Givenchy', link: ''},
          {title: 'Ralph Lauren', link: ''},
          {title: 'Vans', link: ''},
          {title: 'Balenciaga', link: ''},
          {title: 'Puma', link: ''},
          {title: 'Gucci', link: ''},
          {title: 'Levi\'s', link: ''},
          {title: 'Armani', link: ''},
          {title: 'New Balance', link: ''},
          {title: 'Diesel', link: ''},
          {title: 'Reebok', link: ''},
          {title: 'Nike', link: ''},
          {title: 'Hugo Boss', link: ''},
        ]
      } else {
        this.content.brands = [
          {title: 'Valentino', link: ''},
          {title: 'Givenchy', link: ''},
          {title: 'Ralph Lauren', link: ''},
          {title: 'Vans', link: ''},
          {title: 'Balenciaga', link: ''},
          {title: 'Puma', link: ''},
          {title: 'Gucci', link: ''},
          {title: 'Levi\'s', link: ''},
          {title: 'Armani', link: ''},
          {title: 'New Balance', link: ''},
          {title: 'Diesel', link: ''},
          {title: 'Reebok', link: ''},
          {title: 'Nike', link: ''},
          {title: 'Hugo Boss', link: ''},
          {title: 'Fendi', link: ''},
          {title: 'Zara', link: ''},
          {title: 'Dolce & Gabbana', link: ''},
          {title: 'Tommy Hilfiger', link: ''},
          {title: 'Gap', link: ''},
          {title: 'Chanel', link: ''},
          {title: 'Burberry', link: ''},
          {title: 'Calvin Klein', link: ''},
          {title: 'Lacoste', link: ''},
          {title: 'Saint Laurent', link: ''},
          {title: 'Versace', link: ''},
          {title: 'Dior', link: ''},
          {title: 'Kenzo', link: ''}
        ]
      }
    }
  },
  watch: {
    additionalMenuHovered(val) {
      if (val) {
        this.categories.forEach((category) => {
          clearTimeout(category.stopTimeout)
        })
      }
    },
    '$q.screen.width': function () {
      this.screenResize()
      this.changeBrands()
    }
  },
})
</script>

<style scoped lang="scss">
@media (max-width: 790px) {
  .content {
    width: 130px;

    .content_hover {
      padding: 20px 0 !important;
    }

    .language_switcher {
      padding: 12px 18px !important;
    }
  }
  .categories_demonstration {
    display: none !important;
  }
  .brands_col {
    display: none !important;
  }
  .bradns_style {
    .col.brands {
      overflow: hidden;
      margin-bottom: 0 !important;
      max-height: 100% !important;
    }
  }
  //.menu_content {
  //  padding-left: 10px !important;
  //}
}


.overlay {
  position: absolute;
  top: 66px;
  left: 0;
  width: 100vw;
  height: calc(100dvh - 66px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  cursor: pointer;
}

.burger_menu_wrapper {
  cursor: pointer;
  height: 14px;
  display: flex;
  align-items: center;

  .burger_menu_button {
    width: 20px;
    height: 2px;
    border-radius: 10px;
    position: relative;
    background-color: $dark;
    margin-right: 10px;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out, top 0.3s ease-in-out;

    &.burger--active {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
        top: 0;
      }

      &::after {
        transform: rotate(-45deg);
        top: -2px;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: $dark;
      bottom: 6px;
      display: block;
      position: relative;
      border-radius: inherit;
      transition: inherit;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: $dark;
      top: 4px;
      display: block;
      position: relative;
      border-radius: inherit;
      transition: inherit;
    }
  }
}


.limiter {
  position: absolute;
  margin: 0 auto;
}


.menu {
  position: absolute;
  top: 60px;
  left: 0;
  height: 100dvh;
  background-color: white;
  z-index: 1;
  transition: width 0.2s linear;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 0;
  overflow: hidden;
  box-sizing: border-box;

  .content {
    padding-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .language_switcher {
      padding: 12px 60px;
      width: 100%;
    }

    .content_hover {
      cursor: pointer;
      width: 100%;
      padding: 20px 60px;
      text-align: center;
      white-space: nowrap;


      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

}

.content_section {
  position: absolute;
  height: calc(100dvh - 66px);
  top: 66px;
  background-color: white;
  transition: max-width 0.25s linear;

  .menu_content {
    padding: 40px;

    .row {
      gap: 60px;
      margin-bottom: 40px;
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .column_title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
        color: rgba($dark, 0.7);

      }

      .link {
        text-wrap: none;
        color: $dark;
      }

      .categories_demonstration {
        text-align: center;
        width: 100%;
      }
    }

    .image_wrapper {
      text-align: center;
      color: rgba($dark, 0.7);
      font-size: 14px;

      .image {
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .categories_demonstration {
      display: grid;
      gap: 10px;
      grid-template-columns: 230px 230px;
      grid-template-rows: 230px 230px;

      .image_wrapper {
        display: flex;
        flex-direction: column;

        .image {
          flex-grow: 1;
        }
      }

      .long {
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }

    &.mirror_style {
      .categories_demonstration {
        .long {
          grid-column-start: 2;
          grid-column-end: 3;
        }
      }
    }

    .long_horizontal {
      grid-column-start: 1 !important;
      grid-column-end: 3 !important;
    }

    &.bradns_style {
      .brands {
        display: flex;
        flex-direction: column;
        max-height: 350px;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-bottom: 40px;
      }
    }
  }

}
</style>
