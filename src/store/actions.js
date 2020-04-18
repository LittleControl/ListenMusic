export default {
    playSong({ commit, state }, song) {
        if (state.currentSong == null || state.currentSong.name != song.name) {
            let playingSong = new Audio(song.songSrc)
            commit('INIT_SONG', {
                playingSong,
                name: song.name,
                isPlaying: false,
                singer: song.singer,
                comments: song.comments,
                singerImg: song.singerImg,
                songSrc: song.songSrc,
                lyrics: song.lyrics,
                time_length: song.time_length,
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
    toCurentTime({ commit, state }, newProgress) {
        if (state.currentSong == null) {
            return
        }
        commit('TOCURENTTIME', newProgress)
    }
}
