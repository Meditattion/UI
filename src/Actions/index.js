import {ADD_LABEL,DELETE_LABEL,TOGGLE_MENU} from '../Constatns/index'


const actions={
  toggleMenu : menu => ({
    type: TOGGLE_MENU,
    menu
  }),
  addDummyLabel:()=>({
    type:'ADD_NEW_DUMMY_LABEL'
  }),
  closeDummyLabel:()=>({
    type:'CLOSE_DUMMY_LABEL'
  })
  ,
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