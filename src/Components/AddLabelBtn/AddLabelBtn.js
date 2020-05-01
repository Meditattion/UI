import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../Actions/index'

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



const AddLabelBtn = (props) => {
    const currentLabelCountID = useSelector(state => state.LabelsCounterID);
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