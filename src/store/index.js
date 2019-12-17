import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
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
    },
    displayMiniPlayer(value) {
      let player = document.getElementsByClassName("player")[0];
      if (value) {
        player.style.display = "box";
      } else {
        player.style.display = "none";
      }
    }
  },
  modules: {
  }
})
