import React from 'react'


const ToolBarItem = (props) => {
    return (
        <div className={props.flip?"main-toolbar-tool flipHorizontal":"main-toolbar-tool"}>
            <img alt="" src={process.env.PUBLIC_URL + `Images/${props.type}`}></img>
        </div>
    )
}

export default ToolBarItem;
