import { ADD_LABEL, DELETE_LABEL, TOGGLE_MENU } from '../Constatns/index'


const actions = {
  toggleMenu: menu => ({
    type: TOGGLE_MENU,
    menu
  }),
  addDummyLabel: () => ({
    type: 'ADD_NEW_DUMMY_LABEL'
  }),
  closeDummyLabel: () => ({
    type: 'CLOSE_DUMMY_LABEL'
  })
  ,
  addCanvasLabel: () => ({
    type: 'ADD_NEW_CANVAS_LABEL'
  }),
  closeCanvasLabel: () => ({
    type: 'CLOSE_CANVAS_LABEL'
  })
  ,
  addLabel: (label,source) => ({
    type: ADD_LABEL,
    payload: label,
    source

  }),
  deleteLabel: labelKey => ({
    type: DELETE_LABEL,
    payload: labelKey
  }),
  searchLabel: query => ({
    type: 'SEARCH_LABEL',
    payload: query
  }),
  selectorChange: (oldSelector, newSelector) => ({
    type: 'SELECTOR_CHANGE',
    oldSelector,
    newSelector
  }),
  loadImages: (images) => ({
    type: 'LOAD_IMAGES',
    images
  }),
  loadLabels: (labels) => ({
    type: 'LOAD_LABELS',
    labels
  }),
  imageChange: (imageName) => ({
    type: 'IMAGE_CHANGE',
    imageName
  })
}

export default actions;