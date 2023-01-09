<template>
  <Carousel
    id="gallery"
    :items-to-show="1"
    :wrap-around="false"
    v-model="currentSlide"
  >
    <Slide v-for="img in imgs" :key="img">
      <div class="carousel__item">
        <div class="item-option">
          <v-btn icon="mdi-share-variant" color="main"></v-btn>
          <v-btn icon="mdi-heart" color="main"></v-btn>
        </div>
        <img :src="img.url" alt="" />
      </div>
    </Slide>
  </Carousel>
  <Carousel
    id="thumbnails"
    :items-to-show="5"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="img in imgs" :key="img">
      <div class="carousel__item" @click="slideTo(img.id - 1)">
        <img :src="img.url" alt="" />
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data: () => ({
    currentSlide: 0,
    imgs: [
      { id: 1, url: require("../../assets/product.png") },
      { id: 2, url: require("../../assets/product.png") },
      { id: 3, url: require("../../assets/product.png") },
    ],
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>

<style lang="scss">
$mainColor2: #807f7f;
$mainColor: #1ec2a8;

.carousel__item {
  height: 400px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 5px;
  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
  }
}

#thumbnails .carousel__item {
  height: 100px;
  cursor: pointer;
}
.carousel__prev,
.carousel__next {
  background-color: #fff !important;
  border: 1px solid $mainColor !important;
  color: $mainColor !important;
  border-radius: 5px !important;
}
.item-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
