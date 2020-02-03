import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  currentSong: null,
  miniPlayImg: '/img/warehouse/play.png',
  playedTime: 0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  },
})
