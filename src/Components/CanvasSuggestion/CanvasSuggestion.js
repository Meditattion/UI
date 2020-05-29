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


const CanvasSuggestion = (props) => {
    const [newLabelName, setNewLabelName] = useState('');
    const [bgColor, setbgColor] = useState(getRandomColor);
    let dispatch = useDispatch();
    const currentLabelCountID = useSelector(state => state.LabelsCounterID);
    const newCanvasCurds=useSelector(state=>state.Labels.canvasLabelCurds);

    return (
        <div className="main-canvas-suggestion shadowCenter" style={{
            position:"absolute",
            borderRadius:"5px",
            borderBottom:"none",
            zIndex:"100",
            top:props.top,
            left:props.left,

        }}>
            <img alt="" src={process.env.PUBLIC_URL + "/Images/complete.png"}
                 style={{ cursor: "pointer" }}
                 onClick={() => {
                     // dispatch(actions.addLabel({ text: newLabelName, key: currentLabelCountID, bgColor: bgColor },"newCanvasLabel"))
                     // setNewLabelName('');
                     // setbgColor(getRandomColor);
                     props.setLabels(oldState=>Object.assign({},{labelPolygons:oldState.labelPolygons},
                         {labelRects:oldState.labelRects.map(label=>{
                             let dummy;
                             if(label.id===props.id){
                                 dummy=label;
                                 dummy.isSuggestion=false;
                                 return dummy;
                             }else{
                                 return label;
                             }

                             })}))
                 }}></img>

            <img alt="" src={process.env.PUBLIC_URL + "Images/trashS.svg"}
                 onClick={() => {
                     switch (props.tool){
                         case "boundingBox":
                             props.setBoundigBoxSuggestions(oldState=>Object.assign({},oldState,
                                 {[props.currentImage]:oldState[props.currentImage].filter(label=>label.id!==props.id)}));
                             // props.setLabels(oldState=>Object.assign({},oldState,
                             //     {labelRects:oldState.labelRects.filter(label=>label.id!==props.id)}));
                             break;
                         default:
                             break;

                     }
                 }}></img>
        </div>
    )
}

export default CanvasSuggestion;
