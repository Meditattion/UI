import React from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../Actions/index'





const AddLabelBtn = (props) => {
    // console.log("currentID:",currentLabelCountID);
    const dispatch = useDispatch();
    return (
        <div className="main-labels-add-btn" onClick={() => {

            dispatch(actions.addDummyLabel())

            // dispatch(actions.addLabel([{
            //     text: 'first real', key: currentLabelCountID,
            //     bgColor: getRandomColor()
            // }]))
        }

        }>
            <span>Add new label</span>
            <img alt="" src={process.env.PUBLIC_URL + "Images/plusS.svg"}></img>
        </div>
    )
}

export default AddLabelBtn;