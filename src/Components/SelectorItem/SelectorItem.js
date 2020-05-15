import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../Actions/index'


const SelectorItem = (props) => {
    const dispatch = useDispatch();
    const currentSelector = useSelector(state => state.Tools.currentSelector);
    return (
        <a data-tip data-for={props.selector}>
        <div className={props.isSelected?"main-toolbar-selectors-selector selectorIsClicked":"main-toolbar-selectors-selector"}
        onClick={() => {
            if (currentSelector !== props.selector)
                dispatch(actions.selectorChange(currentSelector, props.selector))
        }}>
            <img alt="" src={process.env.PUBLIC_URL + `Images/${props.type}`}></img>
        </div>
        </a>
    )
}

export default SelectorItem;
