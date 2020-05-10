const initState = {
    container: [{ text: "first item", key: 0 }],
    searchQuery: '',
    dummyNewLabel: false,
    newCanvasLabel:false,
    canvasLabelCurds:{top:60,left:0}
};


const Labels = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NEW_DUMMY_LABEL':
            return Object.assign({}, state, {
                dummyNewLabel: true
            });
        case 'CLOSE_DUMMY_LABEL':
            return Object.assign({}, state, {
                dummyNewLabel: false
            });

        case 'ADD_NEW_CANVAS_LABEL':
            return Object.assign({}, state, {
                newCanvasLabel: true
            });
        case 'CLOSE_CANVAS_LABEL':
            return Object.assign({}, state, {
                newCanvasLabel: false
            });
        case 'ADD_LABEL':
            return Object.assign({}, state, {
                container: state.container.concat(action.payload),
                [action.source]: false
            });
        case 'DELETE_LABEL':
            let labelPosition = state.container.findIndex((label) => label.key === action.payload);
            let leftLabelContainer = state.container.slice(0, labelPosition);
            let rightLabelContainer = state.container.slice(labelPosition + 1);

            return Object.assign({}, {
                container: leftLabelContainer.concat(rightLabelContainer),
                searchQuery: '',
                dummyNewLabel: state.dummyNewLabel
            });
        case 'SEARCH_LABEL':
            return Object.assign({}, state, {
                searchQuery: action.payload
            });
        case 'CANVAS_LABELS_CURDS':
            return Object.assign({},state,{canvasLabelCurds:{top:action.top,left:action.left}})
        default:
            return state
    }
}

export default Labels