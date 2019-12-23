import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSong: null,
    miniPlayImg: '/img/warehouse/play.png'
  },
  mutations: {
    INIT_SONG(state, song) {
      if (state.currentSong) {
        state.currentSong.playingSong.pause()
        state.currentSong = null
      }
      state.currentSong = song
    },
    PAUSE_SONG(state) {
      state.currentSong.playingSong.pause()
      state.currentSong.isPlaying = false
      state.miniPlayImg = '/img/warehouse/play.png'
    },
    PLAY_SONG(state) {
      state.currentSong.playingSong.play()
      state.currentSong.isPlaying = true
      state.miniPlayImg = '/img/warehouse/pause.png'
    },

  },
  actions: {
    playSong({ commit, state }, song) {
      if (state.currentSong == null || state.currentSong.name != song.name) {
        let playingSong = new Audio('/music/' + song.name)
        commit('INIT_SONG', {
          playingSong,
          name: song.name,
          isPlaying: false
        })
      }
      if (state.currentSong.isPlaying) {
        commit('PAUSE_SONG')
      } else {
        commit('PLAY_SONG')
      }
    },
    controlPlay({ commit, state }) {
      if (state.currentSong == null) {
        return
      }
      if (state.currentSong.isPlaying) {
        commit('PAUSE_SONG')
      } else {
        commit('PLAY_SONG')
      }
    },
  },
  getters: {
    playImg: state => {
      return state.miniPlayImg
    }
  },
  modules: {
  }
})
