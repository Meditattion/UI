import React from 'react'
import {useDispatch} from 'react-redux'
import actions from '../../Actions'


const LabelItem = (props) => {
    let dispatch=useDispatch();
    return (
        <div className="main-labels-item">
            <div className="main-labels-item-blank" >&nbsp;</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{props.text}</span>
                <img alt="" src={process.env.PUBLIC_URL + "Images/trashS.svg"} 
                onClick={()=>dispatch(actions.deleteLabel(props.serial))}></img>
            </div>
        </div>
    )
}

export default LabelItem;
