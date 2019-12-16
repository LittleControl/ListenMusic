<template>
  <div class="main_body">
    <div class="logo">
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 5px' }">正在播放</van-divider>
      <div class="img_cir Rotation">
        <img src="/img/player/lironghao.jpg" />
      </div>
    </div>
    <div class="lyric">
      <div class="item">第一行歌词</div>
      <div class="item">第二行歌词</div>
      <div class="item">第三行歌词</div>
      <div class="item">第四行歌词</div>
      <div class="item">第五行歌词</div>
      <div class="item">第六行歌词</div>
      <div class="item">第七行歌词</div>
      <div class="item">第八行歌词</div>
      <div class="item">第九行歌词</div>
      <div class="item">第十行歌词</div>
      <div class="item">第十一行歌词</div>
    </div>
    <div class="progress-bar">
      <van-slider v-model="progress" bar-height="4px" active-color="#ee0a24" />
      <div class="progress-num">3:20/4:50</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";
import { Slider } from "vant";

Vue.use(Slider);
Vue.use(Divider);
export default {
  data() {
    return {
      progress: 15
    };
  }
};
</script>

<style lang="scss">
.main_body {
  width: 100%;
  height: 100%;
  background-color: azure;
  overflow: hidden;
  .logo {
    width: 100%;
    // height: 40%;
    .img_cir {
      height: 300px;
      width: 300px;
      margin: auto;
      overflow: hidden;
      text-align: center;
      border-radius: 50% 50%;
    }
    margin-bottom: 10px;
  }
  .lyric {
    width: 100%;
    height: 50%;
    overflow: auto;
    background-color: #bfa;
    .item {
      width: 98%;
      padding-left: 2%;
      overflow: auto;
      height: 4em;
      &:first-of-type {
        margin-top: 10px;
      }
    }
  }
  .progress-bar {
    width: 100%;
    height: 30px;
    position: fixed;
    bottom: 50px;
    background-color: pink;
    .progress-num {
      text-align: center;
      line-height: 2em;
    }
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.Rotation {
  transform: rotate(360deg);
  animation: rotation 10s linear infinite;
}

.player {
  // 隐藏底部的控制播放的东西
  display: none;
}
</style>