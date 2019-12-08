<template>
  <div class="player">
    <div class="status">正在播放</div>
    <div class="name">{{'currentSong'}}</div>
    <div class="control" @click="playSongs('Nigel Silin - Sakura Tears.mp3')">
      <img src="/img/warehouse/pause.png" width="32" height="32" />
    </div>
  </div>
</template>

<script>
export default {};
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
    display: inline-block;
  }
}
</style>