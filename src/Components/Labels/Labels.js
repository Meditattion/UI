import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'
import LabelDummyItem from '../LabelDummyItem/LabelDummyItem'
import actions from '../../Actions'



const Labels = (props) => {
    let dispatch=useDispatch();
    // const overAllState=useSelector(state=>state);
    // console.log("redux state:",overAllState);
    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);
    const labelsContainer = useSelector(state => state.Labels.container);
    const newDummyLabelIsVisible=useSelector(state=>state.Labels.dummyNewLabel);
    // console.log("labelsContainer",labelsContainer);
    const labelsToDisplay = [
        
    ];



    labelsContainer.forEach(label => {
        labelsToDisplay.unshift(
            <LabelItem key={label.key} serial={label.key} text={label.text}
                            bgColor={label.bgColor} ></LabelItem>
        )
    });

    labelsToDisplay.unshift(
        <LabelDummyItem key="-1"></LabelDummyItem>
    );

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
