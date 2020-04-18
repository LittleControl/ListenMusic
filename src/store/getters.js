import warehouse from '../api/warehouse'

export default {
    playImg: state => {
        return state.miniPlayImg
    },
    songs() {
        return warehouse.getSongs
    },
    time_length(state) {
        let time_length = 0
        if (state.currentSong) {
            time_length = state.currentSong.time_length
        }
        return time_length
    }
}
