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
  },
  watch: {
    $route: {
      handler: function() {
        let path = this.$route.path.slice(1);
        let player = document.getElementsByClassName("player")[0];
        if (path == "player") {
          player.style.display = "none";
        } else {
          player.style.display = "box";
        }
      },
      deep: true
    }
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