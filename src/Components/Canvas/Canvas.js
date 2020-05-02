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
                        <SelectorItem isSelected={false} type="bounding-box.svg"></SelectorItem>
                        <SelectorItem isSelected={false} type="polygon.svg"></SelectorItem>
                        <SelectorItem isSelected type="pin.svg"></SelectorItem>
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
