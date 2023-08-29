<template>
  <q-img class="category" :src="image" :ratio="ratio" fit="cover" :position="position" :img-style="imgStyle">
    <div class="image_content">
      <p class="title">{{ title }}</p>
    </div>
  </q-img>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CategoryComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    ratio: {
      type: Number,
      default: 0
    },
    position: {
      type: String,
      default: ''
    },
    imgStyle: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
.category {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(white, 0.2);
    z-index: 10;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    &::before {
      opacity: 1;
    }
  }
}

.image_content {
  bottom: 10px;
  text-align: center;
  position: absolute;
  left: 10px;
  padding: 20px;
  width: calc(100% - 20px);
  color: rgba(black, 0.8);
  background-color: rgba(white, 0.3);
  backdrop-filter: blur(8px);
  font-size: 16px;
  font-weight: 700;
  z-index: 11;
}

@media (max-width: 600px) {
  .image_content {
    backdrop-filter: none !important;
    background-color: rgba(white, 0.7) !important;
  }
}
</style>
