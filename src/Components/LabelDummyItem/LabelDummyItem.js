import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import actions from '../../Actions'


const LabelDummyItem = (props) => {
    let dispatch = useDispatch();
    const newDummyLabelIsVisible=useSelector(state=>state.Labels.dummyNewLabel);

    return (
        <div className="main-labels-item" style={{backgroundColor:props.bgColor,
                                                    display:newDummyLabelIsVisible?'grid':'none' }}>
            <div className="main-labels-item-blank" >&nbsp;</div>
            <div style={{ display: "flex", flexDirection: "row" ,paddingLeft:"5px",alignItems:"center",height:"100%"}}>
                {/* <span>{props.text}</span> */}
                <input type="text" placeholder="Enter label's name" ></input>
                <img alt="" src={process.env.PUBLIC_URL + "/Images/complete.png"} style={{cursor:"pointer"}}></img>

                <img alt="" src={process.env.PUBLIC_URL + "Images/trashS.svg"}
                    onClick={() => dispatch(actions.closeDummyLabel())}></img>
            </div>
        </div>
    )
}

export default LabelDummyItem;
