import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'
import LabelDummyItem from '../LabelDummyItem/LabelDummyItem'
import CustomLabelsContainer from "../CustomLabelsContainer/CustomLabelsContainer";
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
    const [labels, setLabels] = useState({});
    const [loaded, setLoaded] = useState(false);
    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);
    // const labelsContainer = useSelector(state => state.Labels.container);
    const currentSelector = useSelector(state => state.Tools.currentSelector);
    // console.log("currentSelector", currentSelector);
    // const currentImage = useSelector(state => state.Tools[currentSelector].currentImage);
    const currentImage = useSelector(state => state.Images.currentImage);
    console.log("currentImage", currentImage);
    const searchQuery = useSelector(state => state.Labels.searchQuery);
    const loadedLabels = useSelector(state => state.Tools[currentSelector].labels);
    const userLabels = useSelector(state => state.Tools[currentSelector].userLabels);
    console.log("loadedLabels", loadedLabels);
    console.log("userLabels", userLabels);
    const classificationLabelsIsVisible= useSelector(state => state.Toggles.classificationLabelsIsVisible);
    const boundingBoxLabelsIsVisible= useSelector(state => state.Toggles.boundingBoxLabelsIsVisible);
    const polygonLabelsIsVisible= useSelector(state => state.Toggles.polygonLabelsIsVisible);
    const currentNewLabelID=useSelector(state=>state.Labels.currentNewLabelID);
    const classificationLabels=useSelector(state=>state.Tools.classification.userLabels);
    const boundingBoxLabels=useSelector(state=>state.Tools.boundingBox.userLabels);
    const polygonLabels=useSelector(state=>state.Tools.polygon.userLabels);




    // if (Object.keys(loadedLabels).length > 0 && !loaded) {
    //     fetch(loadedLabels[0].preview)
    //         .then(res => res.json())
    //         .then(
    //             result => { setLabels(Object.assign({}, labels, result));setLoaded(true);
    //             console.log("selectorLabels:", labels) }
    //         );
    // }

    let loadedLabelsToDisplay = [];
    let boundingBoxLabelsToDisplay=[];
    let polygonLabelsToDisplay=[];


    if (currentImage != '' && Object.keys(loadedLabels).length > 0 && loadedLabels[currentImage] &&
                                                                                currentSelector==="classification") {
        loadedLabels[currentImage].forEach(label => {
            console.log("label:", label);
            if (label.indexOf(searchQuery) >= 0) {
                loadedLabelsToDisplay.unshift(
                    <LabelItem key={label} serial={label} text={label}
                               bgColor={getRandomColor()} ></LabelItem>
                )
            }
        });

    }
        loadedLabelsToDisplay.unshift(
            <LabelDummyItem tool={currentSelector} keyID="-1"></LabelDummyItem>
        );

    if(currentImage!=="" && boundingBoxLabels[currentImage]){
        boundingBoxLabels[currentImage].forEach(label => {
            console.log("label:", label);
            if (label.text.indexOf(searchQuery) >= 0) {
                boundingBoxLabelsToDisplay.unshift(
                    <LabelItem key={label} serial={label.key} text={label.text}
                               bgColor={label.bgColor} ></LabelItem>
                )
            }
        });
    }







    return (
        <div className={labelsIsVisible ? 'main-labels' : 'main-labels hide'}>
            <CommonHeader></CommonHeader>
            <CommonTitle text="Labels"></CommonTitle>
            <CommonSearch></CommonSearch>
            {/*<AddLabelBtn></AddLabelBtn>*/}
            <LabelsContainer>
                <CustomLabelsContainer annotator="classification" text="Classification" isOpen={currentImage != '' && classificationLabelsIsVisible}>
                    <AddLabelBtn/>
                    { loadedLabelsToDisplay}
                    {/*<LabelDummyItem key="-1"></LabelDummyItem>*/}
                </CustomLabelsContainer>
                <CustomLabelsContainer annotator="polygon" text="Segmentation" isOpen={currentImage != '' && polygonLabelsIsVisible}>
                    <LabelDummyItem keyID={currentNewLabelID}></LabelDummyItem>
                </CustomLabelsContainer>
                <CustomLabelsContainer annotator="boundingBox" text="Bounding Box" isOpen={currentImage != '' && boundingBoxLabelsIsVisible}>
                    <LabelDummyItem keyID={currentNewLabelID}></LabelDummyItem>
                    {boundingBoxLabelsToDisplay}
                </CustomLabelsContainer>


            </LabelsContainer>
        </div>
    )

    // <div className="main-labels">



}

export default Labels;
