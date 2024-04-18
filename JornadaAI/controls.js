export default {
    jump : new KeyboardEvent('keydwon', {key: 'Space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}