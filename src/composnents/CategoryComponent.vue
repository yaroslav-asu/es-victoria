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
  bottom: 10px;
  text-align: center;

  position: absolute;
  left: 10px;
  padding: 20px;
  width: calc(100% - 20px);
  color: rgba(black, 0.8);
  background-color: rgba(white, 0.5);
  backdrop-filter: blur(8px);
  font-size: 16px;
  font-weight: 700;

}
</style>
