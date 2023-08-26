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
      default: ''
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

.image_content {
  color: $dark;
  background-color: rgba(white, 0.8);
  bottom: 10px;
  width: calc(100% - 20px);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
