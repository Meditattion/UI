import React from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../Actions'





const LabelItem = (props) => {
    let dispatch = useDispatch();

    return (
        <div className="main-labels-item"
             style={{backgroundColor:props.currentHover===props.keyID?props.bgColor.onHover:props.bgColor.regular}}>
            <div className="main-labels-item-blank" >&nbsp;</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <span>{props.text}</span>
                <img alt="" src={process.env.PUBLIC_URL + "Images/trashS.svg"}
    onClick={() => {
        console.log(`props.currentImage:${props.currentImage},props.serial:${props.serial}`)
        dispatch(actions.removeLabel(props.currentImage, props.serial,props.tool));
    }}/>
            </div>
        </div>
    )
}

export default LabelItem;
