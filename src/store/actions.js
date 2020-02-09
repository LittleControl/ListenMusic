export default {
    playSong({ commit, state }, song) {
        if (state.currentSong == null || state.currentSong.name != song.name) {
            let playingSong = new Audio(song.songSrc)
            function s2m(len) {
                let m = parseInt(len / 60);
                let s = len % 60;
                if (s < 10) {
                    s = "0" + s;
                }
                if (m == 0) {
                    m = "00";
                }
                return m + ":" + s;
            }
            commit('INIT_SONG', {
                playingSong,
                name: song.name,
                isPlaying: false,
                singer: song.singer,
                comments: song.comments,
                singerImg: song.singerImg,
                songSrc: song.songSrc,
                lyrics: song.lyrics,
                length: song.time_length,
                time_length: s2m(song.time_length),
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
