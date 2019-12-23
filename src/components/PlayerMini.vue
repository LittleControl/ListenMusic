<template>
  <div class="player">
    <div class="status">正在播放</div>
    <div class="name">{{currentSong}}</div>
    <div class="control" @click="controlPlay">
      <img :src="playImg" width="32" height="32" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["controlPlay"])
  },
  computed: {
    ...mapGetters(["playImg"]),
    currentSong() {
      return this.$store.state.currentSong == null
        ? "Listen Music Relaxedly "
        : this.$store.state.currentSong.name;
    }
  }
};
</script>

<style lang="scss">
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
    flex-basis: 33%;
    text-align: center;
  }
}
</style>