import {ADD_LABEL,DELETE_LABEL,TOGGLE_MENU} from '../Constatns/index'


const actions={
  toggleMenu : menu => ({
    type: TOGGLE_MENU,
    menu
  }),
  addLabel:label=>({
    type:ADD_LABEL,
    payload:label
  }),
  deleteLabel:labelKey=>({
    type:DELETE_LABEL,
    payload:labelKey
  })
}

  export default actions;