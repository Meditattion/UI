import React from 'react'

const CommonSearch = (props) => {
    return (
        <div className="common-search">
            <img alt="" src={process.env.PUBLIC_URL + "Images/searchS.svg"}></img>
            <input type="text" placeholder="Search a label"></input>
            <img className="common-search-delete" alt="" src={process.env.PUBLIC_URL + "Images/cancelS.svg"}></img>
        </div>
    )
}

export default CommonSearch;