import { combineReducers } from 'redux'
import Toggles from './Toggles'
import Labels from './Labels'
import LabelsCounterID from './LabelsCounterID'
// import visibilityFilter from './visibilityFilter'

export default combineReducers({
  Labels,LabelsCounterID,Toggles
})