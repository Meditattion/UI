const initialState = {
    currentSelector: "classification",
    boundingBox: {
        isSelected: false,
        labels: []
    },
    polygon: {
        isSelected: false,
        labels: []
    },
    classification: {
        isSelected: true,
        labels: {}
    }
}

const Tools = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_LABELS":
            return Object.assign({}, state, {
                [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                    { labels: Object.assign({},state[state.currentSelector].labels,action.labels) })
            });


        case "SELECTOR_CHANGE":
            return Object.assign({}, state, {
                currentSelector: action.newSelector,
                [action.newSelector]: Object.assign({}, state[action.newSelector], { isSelected: true }),
                [action.oldSelector]: Object.assign({}, state[action.oldSelector], { isSelected: false })
            });
        default:
            return state
    }
}

export default Tools