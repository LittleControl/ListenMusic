import warehouse from '../api/warehouse'

export default {
    playImg: state => {
        return state.miniPlayImg
    },
    songs() {
        return warehouse.getSongs
    },
}
