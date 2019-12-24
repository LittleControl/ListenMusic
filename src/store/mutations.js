export default {
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
}
