const initialState = {
  imagesVisible: true,
  labelsVisible: true,
  classificationLabelsIsVisible:true,
  boundingBoxLabelsIsVisible:false,
  polygonLabelsIsVisible:false,
}

const Toggles = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      switch (action.menu) {
        case 'images':
          state.imagesVisible = !state.imagesVisible;
          break;
        case 'labels':
          state.labelsVisible = !state.labelsVisible;
          break;
        default:
      }
      return state;

    case 'TOGGLE_LABEL_CONTAINER':
       state[action.tool]=!state[action.tool];
      return state;

    case 'OPEN_LABELS_CONTAINER':
      return Object.assign({},state,
        {classificationLabelsIsVisible:false,
                  boundingBoxLabelsIsVisible:false,
                  polygonLabelsIsVisible:false},
        {[action.tool]:true}
        )
    default:
      return state
  }
}

export default Toggles