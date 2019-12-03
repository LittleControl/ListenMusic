<template>
  <div>
    <form action="/">
      <van-search placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="375" height="200" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="4" :clickable="true">
      <van-grid-item>
        <van-image src="/img/warehouse/singer.png" />
        <span>歌手</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/img/warehouse/board.png" />
        <span>排行榜</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/img/warehouse/recommend.png" />
        <span>为你推荐</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/img/warehouse/sort.png" />
        <span>分类</span>
      </van-grid-item>
    </van-grid>
    <div class="content">
      <div class="avatar">
        <img src="/img/warehouse/sort.png" size="32*32" />
      </div>
      <span>Nothing</span>
    </div>
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Search } from "vant";
import { Grid, GridItem } from "vant";
import { Image } from "vant";
import { Skeleton } from "vant";

Vue.use(Skeleton);
Vue.use(Image);
Vue.use(Grid).use(GridItem);
Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      images: ["/img/app/2.jpg", "/img/app/3.jpg"]
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
</script>

<style>
.content {
  padding: 0 16px;
}
.avatar {
  width: 32px;
  height: 32px;
}
</style>