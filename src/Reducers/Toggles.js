const initialState = {
  imagesVisible: true,
  labelsVisible: true
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

    default:
      return state
  }
}

export default Toggles