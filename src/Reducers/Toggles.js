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
      switch (action.tool) {
        case 'classification':
          state.classificationLabelsIsVisible = !state.classificationLabelsIsVisible;
          break;
        case 'boundingBox':
          state.boundingBoxLabelsIsVisible = !state.boundingBoxLabelsIsVisible;
          break;
        case 'polygon':
          state.polygonLabelsIsVisible = !state.polygonLabelsIsVisible;
          break;
        default:
      }
      return state;

    default:
      return state
  }
}

export default Toggles