import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommonHeader from '../CommonHeader/CommonHeader'
import ToolBarItem from '../ToolBarItem/ToolBarItem'
import Selectors from '../Selectors/Selectors'
import SelectorItem from '../SelectorItem/SelectorItem'
import actions from '../../Actions/index'

const Canvas = () => {

    const dispatch = useDispatch();

    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);
    const imagesIsVisible = useSelector(state => state.Toggles.imagesVisible);
    const boundingBoxIsSelected = useSelector(state => state.Tools.boundingBox.isSelected);
    const polygonIsSelected = useSelector(state => state.Tools.polygon.isSelected);
    const classificationIsSelected = useSelector(state => state.Tools.classification.isSelected);
    const currentSelector = useSelector(state => state.Tools.currentSelector);

    console.log("currentSelector:",currentSelector);
    console.log("bound is sel",boundingBoxIsSelected);
    console.log("pol is sel",polygonIsSelected);
    console.log("classification is sel",classificationIsSelected);

    // useEffect(() => {
    //     dispatch(toggleMenu(user))
    //   }, [])

    

    return (
        <div className="main-canvas">
            <CommonHeader>
                <div className="main-toolbar">
                    <ToolBarItem flip="true" type="redo.svg" ></ToolBarItem>
                    <ToolBarItem type="redo.svg"></ToolBarItem>
                    <ToolBarItem type="zoomIn.svg"></ToolBarItem>
                    <ToolBarItem flip="true" type="zoomOut.svg"></ToolBarItem>
                    <ToolBarItem type="hand.svg"></ToolBarItem>
                    <ToolBarItem type="cursor.svg"></ToolBarItem>
                    <Selectors>
                        <SelectorItem selector="boundingBox"
                            isSelected={boundingBoxIsSelected} type="bounding-box.svg"></SelectorItem>
                        <SelectorItem selector="polygon"

                            isSelected={polygonIsSelected} type="polygon.svg"></SelectorItem>
                        <SelectorItem selector="classification" 

                            isSelected={classificationIsSelected} type="pin.svg"></SelectorItem>
                    </Selectors>
                </div>
            </CommonHeader>
            <button className={labelsIsVisible ? "toggle-labels flipHorizontal" : "toggle-labels "} onClick={() => dispatch(actions.toggleMenu('labels'))}>
                &#9658;
          </button>
            <button className={imagesIsVisible ? "toggle-images " : "toggle-images flipHorizontal"} onClick={() => dispatch(actions.toggleMenu('images'))}>
                &#9658;
          </button>
        </div>
    )
}

export default Canvas;
