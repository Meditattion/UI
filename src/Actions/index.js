import { ADD_LABEL, DELETE_LABEL, TOGGLE_MENU } from '../Constatns/index'


const actions = {
  toggleMenu: menu => ({
    type: TOGGLE_MENU,
    menu
  }),
  toggleCustomLabelContainer:tool=>({
    type:"TOGGLE_LABEL_CONTAINER",
    tool
  }),
  openLabelsContainer:tool=>({
    type:"OPEN_LABELS_CONTAINER",
    tool
  }),
  addDummyLabel: () => ({
    type: 'ADD_NEW_DUMMY_LABEL'
  }),
  closeDummyLabel: () => ({
    type: 'CLOSE_DUMMY_LABEL'
  })
  ,
  addCanvasLabel: (id) => ({
    type: 'ADD_NEW_CANVAS_LABEL',
    id
  }),
  closeCanvasLabel: () => ({
    type: 'CLOSE_CANVAS_LABEL'
  })
  ,
  addLabel: (label,imageID) => ({
    type: ADD_LABEL,
    label,
    imageID
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
  }),
  setCanvasLabelCurds:(top,left)=>({
    type:'CANVAS_LABELS_CURDS',
    top,
    left
  }),
  addPendingLabel:(label,imageID)=>({
    type:'ADD_PENDING_LABEL',
    label,
    imageID
  }),
  removeLabel:(imageID,id)=>({
    type:'REMOVE_LABEL',
    imageID,
    id
  }),
  removePendingLabel:(imageID,id)=>({
    type:'REMOVE_PENDING_LABEL',
    imageID,
    id
  })
}

export default actions;