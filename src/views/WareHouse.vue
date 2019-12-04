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
    <div class="items first_item">
      <div class="avatar">
        <img src="/img/warehouse/singer1.jpg" width="32" height="32" />
      </div>
      <div class="content">
        <h3>突然的自我</h3>
        <div class="row">Nothing</div>
        <div class="row">Nothing</div>
      </div>
    </div>
    <div class="items">
      <div class="avatar">
        <img src="/img/warehouse/singer2.jpg" width="32" height="32" />
      </div>
      <div class="content">
        <h3>The Truth That You Leave</h3>
        <div class="row">Nothing</div>
        <div class="row">Nothing</div>
      </div>
    </div>
    <div class="items">
      <div class="avatar">
        <img src="/img/warehouse/singer3.jpg" width="32" height="32" />
      </div>
      <div class="content">
        <h3>老街</h3>
        <div class="row">Nothing</div>
        <div class="row">Nothing</div>
      </div>
    </div>
    <div class="player">
      <div class="status">正在播放</div>
      <div class="name">Never Say GoodBye</div>
      <div class="control">Control</div>
    </div>
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

<style lang="scss">
.items {
  margin-bottom: 15px;
  display: flex;
  padding: 0 16px;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    flex-shrink: 0;
    margin-right: 16px;
  }
  .content {
    padding-top: 8px;
    width: 100%;
    h3 {
      margin: -5px 0 0 0;
      width: 90%;
      height: 16px;
    }
    .row {
      width: 100%;
      margin-top: 20px;
      height: 16px;
    }
  }
}
.first_item {
  margin-top: 16px;
}
.player {
  background-color: #bfa;
  position: absolute;
  bottom: 51px;
  width: 100%;
  height: 35px;
  line-height: 2em;
  display: flex;
  justify-content: space-around;
  div {
    display: inline-block;
  }
}
</style>