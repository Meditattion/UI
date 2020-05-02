import React from 'react'


const SelectorItem = (props) => {
    return (
        <div className={props.isSelected?"main-toolbar-selectors-selector selectorIsClicked":"main-toolbar-selectors-selector"}>
            <img alt="" src={process.env.PUBLIC_URL + `Images/${props.type}`}></img>
        </div>
    )
}

export default SelectorItem;
