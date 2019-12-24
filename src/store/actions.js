export default {
    playSong({ commit, state }, song) {
        if (state.currentSong == null || state.currentSong.name != song.name) {
            let playingSong = new Audio(song.songSrc)
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
}
