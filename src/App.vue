<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="375" height="200" />
      </van-swipe-item>
    </van-swipe>
    <FooterGuide />
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";

Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);

import FooterGuide from "./views/FooterGuide";
export default {
  data() {
    return {
      images: ["/img/app/2.jpg", "/img/app/3.jpg"]
    };
  },
  components: {
    FooterGuide
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>