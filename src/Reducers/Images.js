const initState = {
    container: []
};


const Images = (state = initState, action) => {
    switch (action.type) {
        case "LOAD_IMAGES":
            return {
                container: state.container.concat(action.images)
            }
        default:
            return state
    }
}

export default Images