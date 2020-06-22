import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import actions from '../../Actions/index'


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    let randR=o(r()*s);
    let randG=o(r()*s);
    let randB=o(r()*s);
    return {
        regular:`rgba(${randR},${randG},${randB},0.5)`,
        onHover:`rgba(${randR},${randG},${randB},1)`
    };

}


const AddLabelBtn = (props) => {
    // console.log("currentID:",currentLabelCountID);
    const dispatch = useDispatch();
    const classificationLabelsId=useSelector((state)=>state.Labels.currentNewLabelID);
    const currentImage = useSelector((state) => state.Images.currentImage);
    return (
        <div className="main-labels-add-btn"
             onClick={()=>{
                 dispatch(actions.addPendingLabel({
                         id:classificationLabelsId,
                     color:random_rgba()
                     },
                     currentImage,"classification"));
                 dispatch(actions.increaseLabelsId());
             }}>
            <span>Add new classification</span>
            <img alt="" src={process.env.PUBLIC_URL + "Images/plusS.svg"}></img>
        </div>
    )
}

export default AddLabelBtn;