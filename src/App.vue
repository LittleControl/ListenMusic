<template>
  <div id="app">
    <router-view></router-view>
    <PlayerMini />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide";
import PlayerMini from "./components/PlayerMini";
export default {
  components: {
    FooterGuide,
    PlayerMini
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>