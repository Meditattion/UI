import {ADD_LABEL,TOGGLE_MENU} from '../Constatns/index'


const actions={
  toggleMenu : menu => ({
    type: TOGGLE_MENU,
    menu
  }),
  addLabel:label=>({
    type:ADD_LABEL,
    payload:label
  })
}

  export default actions;