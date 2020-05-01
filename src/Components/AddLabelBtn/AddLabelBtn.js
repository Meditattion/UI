import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../Actions/index'

const AddLabelBtn = (props) => {
    const currentLabelCountID=useSelector(state=>state.LabelsCounterID);
    // console.log("currentID:",currentLabelCountID);
    const dispatch = useDispatch();
    return (
        <div className="main-labels-add-btn" onClick={() => {
            dispatch(actions.addLabel([{ text: 'first real',key:currentLabelCountID }]))
        }

        }>
            <span>Add new label</span>
            <img alt="" src={process.env.PUBLIC_URL + "Images/plusS.svg"}></img>
        </div>
    )
}

export default AddLabelBtn;