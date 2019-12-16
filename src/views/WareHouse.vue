<template>
  <div>
    <form action="/">
      <van-search placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" />
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
    <div class="items">
      <div class="avatar">
        <img src="/img/warehouse/singer1.jpg" width="32" height="32" />
      </div>
      <div class="content">
        <h3 @click="playSongs('Nigel Silin - Sakura Tears.mp3')">突然的自我</h3>
        <div class="row">Author</div>
        <div class="row">Comments</div>
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
      images: ["/img/app/2.jpg", "/img/app/3.jpg"],
      song: null,
      songSrc: "/img/warehouse/play.png"
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    playSongs(name, playSongs) {
      if (this.song == null || this.song.name != name) {
        let currentSong = new Audio("/music/" + name);
        this.song = {
          currentSong,
          name,
          isPlaying: false
        };
      }
      if (this.song.isPlaying) {
        this.song.currentSong.pause();
        this.song.isPlaying = false;
        this.songSrc = "/img/warehouse/play.png";
      } else {
        this.song.currentSong.play();
        this.song.isPlaying = true;
        this.songSrc = "/img/warehouse/pause.png";
      }
    }
  },
  computed: {
    currentSong() {
      if (this.song == null) {
        return "Listen To Music";
      } else {
        return this.song.name.slice(0, -4);
      }
    }
  }
};
</script>

<style lang="scss">
.items {
  margin-bottom: 10px;
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
      margin-top: 17px;
      height: 16px;
    }
  }
}
.first_item {
  margin-top: 16px;
}
.player {
  background-color: rgba(187, 255, 170, 0.5);
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
.van-grid {
  height: 10%;
}
</style>