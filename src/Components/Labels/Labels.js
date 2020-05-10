import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'
import LabelDummyItem from '../LabelDummyItem/LabelDummyItem'
// import actions from '../../Actions'

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Labels = (props) => {
    let dispatch = useDispatch();
    // const overAllState=useSelector(state=>state);
    // console.log("redux state:",overAllState);
    const [labels, setLabels] = useState({});
    const [loaded, setLoaded] = useState(false);
    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);
    // const labelsContainer = useSelector(state => state.Labels.container);
    const currentSelector = useSelector(state => state.Tools.currentSelector);
    console.log("currentSelector", currentSelector);
    const currentImage = useSelector(state => state.Tools[currentSelector].currentImage);
    console.log("currentImage", currentImage);
    const searchQuery = useSelector(state => state.Labels.searchQuery);
    const loadedLabels = useSelector(state => state.Tools[currentSelector].labels);
    console.log("loadedLabels", loadedLabels);


    if (loadedLabels.length > 0 && !loaded) {
        fetch(loadedLabels[0].preview)
            .then(res => res.json())
            .then(
                result => { setLabels(Object.assign({}, labels, result));setLoaded(true); console.log("selectorLabels:", labels) }
            );
    }

    // useEffect(() => {
    //     if (loadedLabels.length > 0) {
    //         fetch(loadedLabels[0].preview)
    //             .then(res => res.json())
    //             .then(
    //                 result => { setLabels(Object.assign({}, labels, result)); console.log("selectorLabels:", labels) }
    //             );
    //     }else{
    //         setRendered(!rendered);
    //     }
    // },[rendered]);

    // console.log("")
    // console.log("labelsContainer",labelsContainer);
    const labelsToDisplay = [

    ];


    if (currentImage != '' && Object.keys(labels).length > 0 && labels[currentImage]) {
        labels[currentImage].forEach(label => {
            console.log("label:", label);
            if (label.indexOf(searchQuery) >= 0) {
                labelsToDisplay.unshift(
                    <LabelItem key={label} serial={label} text={label}
                               bgColor={getRandomColor()} ></LabelItem>
                )
            }

        });
        // labelsContainer.forEach(label => {
        //     if(label.text.indexOf(searchQuery)>=0){
        //         labelsToDisplay.unshift(
        //             <LabelItem key={label.key} serial={label.key} text={label.text}
        //                             bgColor={label.bgColor} ></LabelItem>
        //         )
        //     }

        // });
    }


    labelsToDisplay.unshift(
        <LabelDummyItem key="-1"></LabelDummyItem>
    );

    return (
        <div className={labelsIsVisible ? 'main-labels' : 'main-labels hide'}>
            <CommonHeader></CommonHeader>
            <CommonTitle text="Labels"></CommonTitle>
            <CommonSearch></CommonSearch>
            <AddLabelBtn></AddLabelBtn>
            <LabelsContainer>
                {labelsToDisplay}
            </LabelsContainer>
        </div>
    )

    // <div className="main-labels">



}

export default Labels;
