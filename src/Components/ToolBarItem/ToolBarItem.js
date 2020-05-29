import React from 'react'
import ReactTooltip from "react-tooltip";



const ToolBarItem = (props) => {
    return (
        <>
            <a data-tip data-for={props.tool}>
        <div className={props.flip?"main-toolbar-tool flipHorizontal":"main-toolbar-tool"}
        onClick={props.onClick}>
            <img alt="" src={process.env.PUBLIC_URL + `Images/${props.type}`}></img>
        </div>
            </a>
            <ReactTooltip id={props.tool} type='light' effect='solid' place="bottom" delayShow={750}>
                <span><b>{props.tooltip}</b></span>
            </ReactTooltip>
            </>
    )
}

export default ToolBarItem;
