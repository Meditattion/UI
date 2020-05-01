const initState = {
    container:[{text:"first item",key:0}]
};


const Labels = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            return Object.assign({}, state, {
                container: state.container.concat(action.payload)
            });
        case 'DELETE_LABEL':
            let labelPosition=state.container.findIndex((label)=> label.key==action.payload);
            let leftLabelContainer=state.container.slice(0,labelPosition);
            let rightLabelContainer=state.container.slice(labelPosition+1);
            
            return Object.assign({},{
                container: leftLabelContainer.concat(rightLabelContainer)
            });
        default:
            return state
    }
}

export default Labels