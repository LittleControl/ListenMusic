<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
      handler: function(to, from) {
        let path = to.path.slice(1);
        let player = document.getElementsByClassName("player")[0];
        if (path == "player") {
          player.style.display = "none";
        } else {
          player.style.display = "flex";
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