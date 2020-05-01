import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

const ImagesContainer = (props) => {
    return (
        <div className="main-images-container">
        <ImageItem source="Images/dummy.jpg" completed="true"></ImageItem>
        <ImageItem source="Images/dummy.jpg" completed="true"></ImageItem>
        <ImageItem source="Images/dummy.jpg" completed="false"></ImageItem>
        <ImageItem source="Images/dummy.jpg" completed="false"></ImageItem>
        <ImageItem source="Images/dummy.jpg" completed="false"></ImageItem>
    </div>
    )
}

export default ImagesContainer;