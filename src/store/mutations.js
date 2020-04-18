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
        clearInterval(state.timer)
        state.currentSong.isPlaying = false
        state.miniPlayImg = '/img/warehouse/play.png'
    },
    PLAY_SONG(state) {
        state.currentSong.playingSong.play()
        state.timer = setInterval(function () {
            state.playedTime++
        }, 1000)
        state.currentSong.isPlaying = true
        state.miniPlayImg = '/img/warehouse/pause.png'
    },
    TOCURENTTIME(state, newProgress) {
        state.currentSong.playingSong.currentTime = newProgress
        state.playedTime = Math.round(newProgress)
    }
}
