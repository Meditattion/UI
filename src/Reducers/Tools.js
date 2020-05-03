const initialState = {
    currentSelector: "classification",
    boundingBox: {
        isSelected: false,
        currentImage:"",
        files: [],
        labels: []
    },
    polygon: {
        isSelected: false,
        currentImage:"",
        files: [],
        labels: []
    },
    classification: {
        isSelected: true,
        currentImage:"",
        files: [],
        labels: []
    }
}

const Tools = (state = initialState, action) => {
    switch (action.type) {

        case "IMAGE_CHANGE":
            return Object.assign({}, state, {
                [state.currentSelector]: Object.assign({}, state[state.currentSelector], { currentImage:action.imageName }),
            });

        case "SELECTOR_CHANGE":
            return Object.assign({}, state, {
                currentSelector: action.newSelector,
                [action.newSelector]: Object.assign({}, state[action.newSelector], { isSelected: true }),
                [action.oldSelector]: Object.assign({}, state[action.oldSelector], { isSelected: false })
            });

        case "LOAD_FILES":
            return Object.assign({}, state, {
                [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                    { files: state[state.currentSelector].files.concat(action.files) })
            });
        case "LOAD_LABELS":
            return Object.assign({}, state, {
                [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                    { labels: state[state.currentSelector].labels.concat(action.labels) })
            });
        default:
            return state
    }
}

export default Tools