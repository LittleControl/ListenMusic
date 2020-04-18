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
        <li
          v-for="(item, index) in song.lyrics"
          :key="index"
          :class="{current_lyric: playedTime >= item.time && playedTime < item.next}"
        >{{item.content}}</li>
      </ul>
    </div>
    <div class="progress-bar">
      <van-slider v-model="progress" bar-height="4px" active-color="#ee0a24" />
      <div class="progress-num">{{current_length}}</div>
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
  computed: {
    song() {
      if (this.$store.state.currentSong) {
        console.log(this.$store.state.currentSong);
        return this.$store.state.currentSong;
      } else {
        return {
          singer: "LittleControl",
          name: "Listen Music",
          lyrics: [
            {
              time: 0,
              content: "Find your real Life",
              next: 0
            }
          ],
          singerImg: "/img/player/lironghao.jpg",
          time_length: 0
        };
      }
    },
    current_length() {
      let current = this.$store.state.playedTime;
      let sum = this.$store.getters.time_length;
      return current + "    || " + sum;
    },
    progress: {
      get() {
        let current = this.$store.state.playedTime;
        let all = this.$store.getters.time_length;
        return (current / all) * 100;
      },
      set(newProgress) {
        newProgress = (this.$store.getters.time_length * newProgress) / 100;
        this.$store.dispatch("toCurentTime", newProgress);
      }
    },
    playedTime() {
      return this.$store.state.playedTime;
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
      .current_lyric {
        font-weight: bold;
        font-size: 26px;
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
  // display: none
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