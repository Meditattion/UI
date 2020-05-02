import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

const ImagesContainer = (props) => {
    return (
        <div className="main-images-container">
        <ImageItem source="Images/bounding boxes/9691.png" completed="true"></ImageItem>
        <ImageItem source="Images/bounding boxes/9941.png" completed="true"></ImageItem>
        <ImageItem source="Images/bounding boxes/11387.png" completed="false"></ImageItem>
        <ImageItem source="Images/bounding boxes/34967.png" completed="false"></ImageItem>
    </div>
    )
}

export default ImagesContainer;