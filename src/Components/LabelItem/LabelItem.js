import React from 'react'


const LabelItem = (props) => {
    return (
        <div className="main-labels-item">
            <div className="main-labels-item-blank" >&nbsp;</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{props.text}</span>
                <img alt="" src={process.env.PUBLIC_URL + "Images/trashS.svg"}></img>
            </div>
        </div>
    )
}

export default LabelItem;
