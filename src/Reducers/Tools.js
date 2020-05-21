import {ADD_LABEL} from "../Constatns";

const initialState = {
    currentSelector: "classification",
    boundingBox: {
        isSelected: false,
        labels: {},
        userLabels:{},
        pendingLabels:{}
    },
    polygon: {
        isSelected: false,
        labels: {},
        userLabels:{},
        pendingLabels:{}
    },
    classification: {
        isSelected: true,
        labels: {},
        userLabels:{},
    }
}

const Tools = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_LABELS":
            let newUserLabels={};
            for(let image in action.labels){
                if(!(image in state[state.currentSelector].userLabels)){
                    newUserLabels[image]=[];
                }
            }
            return Object.assign({}, state, {
                [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                    { labels: Object.assign({},state[state.currentSelector].labels,action.labels),
                                userLabels:Object.assign({},state[state.currentSelector].userLabels,newUserLabels)})
            });


        case "SELECTOR_CHANGE":
            return Object.assign({}, state, {
                currentSelector: action.newSelector,
                [action.newSelector]: Object.assign({}, state[action.newSelector], { isSelected: true }),
                [action.oldSelector]: Object.assign({}, state[action.oldSelector], { isSelected: false })
            });

        case ADD_LABEL:
            if(!(action.imageID in state[state.currentSelector].userLabels)){
                return Object.assign({}, state, {
                    [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                        { userLabels: Object.assign({},state[state.currentSelector].userLabels,
                                {[action.imageID]:[action.label]}) })
                });
            }else{
                return Object.assign({}, state, {
                    [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                        { userLabels: Object.assign({},state[state.currentSelector].userLabels,
                                {[action.imageID]:state[state.currentSelector].userLabels[action.imageID].concat([action.label])}) })
                });
            }

        case "ADD_PENDING_LABEL":
            if(!(action.imageID in state[state.currentSelector].pendingLabels)){
                return Object.assign({}, state, {
                    [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                        { pendingLabels: Object.assign({},state[state.currentSelector].pendingLabels,
                                {[action.imageID]:[action.label]}) })
                });
            }else{
                return Object.assign({}, state, {
                    [state.currentSelector]: Object.assign({}, state[state.currentSelector],
                        { pendingLabels: Object.assign({},state[state.currentSelector].pendingLabels,
                                {[action.imageID]:state[state.currentSelector].pendingLabels[action.imageID].concat([action.label])}) })
                });
            }


        default:
            return state
    }
}

export default Tools