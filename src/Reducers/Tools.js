const initialState = {
    currentSelector: "classification",
    boundingBox: {
        isSelected: false,
        files: [],
        labels: []
    },
    polygon: {
        isSelected: false,
        files: [],
        labels: []
    },
    classification: {
        isSelected: true,
        files: [],
        labels: []
    }
}

const Tools = (state = initialState, action) => {
    switch (action.type) {
        case "SELECTOR_CHANGE":
            return Object.assign({}, state, {
                currentSelector: action.newSelector,
                [action.newSelector]: Object.assign({}, state[action.newSelector], { isSelected: true }),
                [action.oldSelector]: Object.assign({}, state[action.oldSelector], { isSelected: false })
            });

        case "LOAD_FILES":
            return Object.assign({}, state, {
                [action.selector]: Object.assign({}, state[state.currentSelector],
                    { files: state[state.currentSelector].files.concat(action.files) })
            });
        case "LOAD_LABELS":
            return Object.assign({}, state, {
                [action.selector]: Object.assign({}, state[state.currentSelector],
                    { labels: state[state.currentSelector].labels.concat(action.labels) })
            });
        default:
            return state
    }
}

export default Tools