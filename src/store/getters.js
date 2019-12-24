import warehouse from '../api/warehouse'

export default {
    playImg: state => {
        return state.miniPlayImg
    },
    songs() {
        function getSongs(arr) {
            let one = Math.floor(Math.random() * arr.length)
            let two = Math.floor(Math.random() * arr.length)
            let three = Math.floor(Math.random() * arr.length)
            return [arr[one], arr[two], arr[three]]
        }
        return getSongs(warehouse.getSongs)
    }
}
