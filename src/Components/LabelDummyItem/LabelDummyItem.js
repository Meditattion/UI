import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../Actions'

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


const LabelDummyItem = (props) => {
    const [newLabelName, setNewLabelName] = useState('');
    const [bgColor, setbgColor] = useState(getRandomColor);
    let dispatch = useDispatch();
    const currentLabelCountID = useSelector(state => state.LabelsCounterID);
    const newDummyLabelIsVisible = useSelector(state => state.Labels.dummyNewLabel);
    const currentImage = useSelector(state => state.Images.currentImage);

    return (
        <div className="main-labels-item" style={{
            backgroundColor: bgColor,
            display: newDummyLabelIsVisible ? 'grid' : 'none'
        }}>
            <div className="main-labels-item-blank" >&nbsp;</div>
            <div style={{ display: "flex", flexDirection: "row", paddingLeft: "5px", alignItems: "center", height: "100%" }}>
                <input type="text" placeholder="Enter label's name"
                    value={newLabelName} onChange={e => setNewLabelName(e.target.value)} ></input>
                <img alt="" src={process.env.PUBLIC_URL + "/Images/complete.png"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        let labelToAdd;
                        switch (props.tool) {
                            case "classification":
                                labelToAdd={
                                    text:newLabelName,
                                    id:props.keyID,
                                    bgColor: bgColor};
                                break;
                            case "boundingBox":
                                labelToAdd={
                                    text: newLabelName,
                                    id:props.keyID==="-1"? currentLabelCountID:props.keyID,
                                    bgColor: bgColor,
                                    top_left:props.topLeft,
                                    width:props.width,
                                    height:props.height,
                                    rect:props.rect
                                };
                                break;
                            case "polygon":
                                labelToAdd={
                                    id:props.keyID==="-1"? currentLabelCountID:props.keyID,
                                    text:newLabelName,
                                    vertices:props.vertices,
                                    bgColor: bgColor
                                };
                                break;

                        }

                        dispatch(actions.removePendingLabel(props.currentImage,props.keyID,props.tool));
                        dispatch(actions.addLabel(labelToAdd,currentImage,props.tool));
                        setNewLabelName('');
                        setbgColor(getRandomColor);
                    }}></img>

                <img alt="" src={process.env.PUBLIC_URL + "Images/trashS.svg"}
                    onClick={() => {
                        // dispatch(actions.closeDummyLabel());
                        dispatch(actions.removePendingLabel(props.currentImage,props.keyID,props.tool));
                        setNewLabelName('');
                        setbgColor(getRandomColor);
                    }}></img>
            </div>
        </div>
    )
}

export default LabelDummyItem;
