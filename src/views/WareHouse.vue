<template>
  <div class="warehouse">
    <form action="/">
      <van-search placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="icons">
      <div class="single_icon">
        <div class="icon_img">
          <img src="/img/warehouse/singer.png" />
        </div>
        <div class="icon_text">歌手</div>
      </div>
      <div class="single_icon">
        <div class="icon_img">
          <img src="/img/warehouse/board.png" />
        </div>
        <div class="icon_text">排行榜</div>
      </div>
      <div class="single_icon">
        <div class="icon_img">
          <img src="/img/warehouse/recommend.png" />
        </div>
        <div class="icon_text">为你推荐</div>
      </div>
      <div class="single_icon">
        <div class="icon_img">
          <img src="/img/warehouse/sort.png" />
        </div>
        <div class="icon_text">分类</div>
      </div>
    </div>
    <div class="recommend">
      <div class="item" v-for="(item, index) in songs" :key="index">
        <div class="avatar">
          <img :src="item.singerImg" />
        </div>
        <div class="content">
          <h3 @click="playSong(item)">{{item.name}}</h3>
          <div class="row">{{item.singer}}</div>
          <div class="row">{{item.comments}}</div>
        </div>
      </div>
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

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      images: ["/img/app/2.jpg", "/img/app/3.jpg"]
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    playSong(song) {
      this.$store.dispatch("playSong", song);
    }
  },
  computed: {
    ...mapGetters(["playImg", "songs"])
  }
};
</script>

<style lang="scss">
.warehouse {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.icons {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .single_icon {
    width: 25%;
    text-align: center;
    .icon_img {
      width: 100%;
      img {
        width: 50%;
      }
    }
  }
  padding: 20px 0 20px 0;
}
.recommend {
  width: 100%;
  .item {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    padding: 0 16px;
    &:first-of-type {
      margin-top: 10px;
    }
    .avatar {
      border-radius: 100%;
      flex-shrink: 0;
      margin-right: 16px;
      img {
        width: 50px;
        height: 50px;
      }
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
        margin-top: 17px;
        height: 16px;
      }
    }
  }
}
</style>