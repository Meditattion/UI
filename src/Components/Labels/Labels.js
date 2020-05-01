import React from 'react'
import { useSelector } from 'react-redux'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'



const Labels = (props) => {
    const overAllState=useSelector(state=>state);
    console.log("redux state:",overAllState);
    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);
    const labelsContainer = useSelector(state => state.Labels.container);
    console.log("labelsContainer",labelsContainer);
    const labelsToDisplay = [];

    labelsContainer.forEach(label => {
        labelsToDisplay.push(
            <LabelItem key={label.key} text={label.text}></LabelItem>
        )
    });

    return (
        <div className={labelsIsVisible ? 'main-labels' : 'main-labels hide'}>
            <CommonHeader></CommonHeader>
            <CommonTitle text="Labels"></CommonTitle>
            <CommonSearch></CommonSearch>
            <LabelsContainer></LabelsContainer>
            <AddLabelBtn></AddLabelBtn>
            <LabelsContainer>
                {labelsToDisplay}
            </LabelsContainer>
        </div>
    )



    // <div className="main-labels">



}

export default Labels;
