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


const CustomLabelsContainer = (props) => {
    const [newLabelName, setNewLabelName] = useState('');
    const [bgColor, setbgColor] = useState(getRandomColor);
    let dispatch = useDispatch();
    const currentLabelCountID = useSelector(state => state.LabelsCounterID);
    const newDummyLabelIsVisible = useSelector(state => state.Labels.dummyNewLabel);

    return (
        <>

        <div className="common-labels-container">
            <span >{props.text}</span>
            {props.isOpen && <span style={{position:"absolute",right:"11px",fontSize:"14px"}}>&nbsp;&#x25B2;</span>}
            {!props.isOpen && <span style={{position:"absolute",right:"11px",fontSize:"14px"}}>&nbsp;&#x25BC;</span>}
        </div>
            {props.isOpen && props.children}
            </>
    )
}

export default CustomLabelsContainer;
