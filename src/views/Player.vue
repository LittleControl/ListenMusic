<template>
  <div class="main_body">
    <div class="logo">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 5px' }"
      >{{song.name+'-'+song.singer}}</van-divider>
      <div class="img_cir Rotation">
        <img :src="song.singerImg" />
      </div>
    </div>
    <div class="lyric">
      <ul>
        <li v-for="(item, index) in song.lyrics" :key="index">{{item.content}}</li>
      </ul>
    </div>
    <div class="progress-bar">
      <van-slider v-model="progress" bar-height="4px" active-color="#ee0a24" />
      <div class="progress-num">{{current_length+'/'+song.length}}</div>
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
  },
  computed: {
    song() {
      if (this.$store.state.currentSong != null) {
        return this.$store.state.currentSong;
      } else {
        return {
          singer: "ListenMusic",
          name: "",
          lyrics: [
            {
              content: "Find your real Life"
            }
          ],
          singerImg: "/img/player/lironghao.jpg",
          length: "00:00"
        };
      }
    }
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
    height: 45%;
    overflow: auto;
    background-color: #bfa;
    ul {
      text-align: center;
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
  // display: none;
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
</style>