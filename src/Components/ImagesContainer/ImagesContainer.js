import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ImageItem from '../ImageItem/ImageItem'
import { useDropzone } from 'react-dropzone';
import actions from '../../Actions'
import AddFileBtn from '../AddFileBtn/AddFileBtn'

const ImagesContainer = (props) => {
    let dispatch = useDispatch();
    let currentSelector = useSelector(state => state.Tools.currentSelector);
    let loadedImages = useSelector(state => state.Images.container);
    let loadedLabels = useSelector(state => state.Tools[currentSelector].labels);
    let selectorLabels;


    const [images,setImages]=useState(loadedImages?loadedImages:null);
    useEffect(()=>{
        console.log("loaded Images", loadedImages);
        setImages(loadedImages);
    },[loadedImages]);

    const [labels,setLabels]=useState(loadedLabels?loadedLabels:null);
    useEffect(()=>{
        console.log("loaded Labels", loadedLabels);
        if (loadedLabels.length > 0) {
            fetch(loadedLabels[0].preview)
                .then(res => res.json())
                .then(
                    result => { selectorLabels = result; console.log("selectorLabels:", selectorLabels) }
                );
        }
        setLabels(loadedLabels);
    },[loadedLabels]);





    // const [files,setFiles]=useState(useSelector(state=>state.Tools[currentSelector].files));

    // const getFiles=()=>useSelector(state => state.Tools[currentSelector].files,[]);


    const thumbs = images.filter(image => image.type.indexOf("image") >= 0).map((image,imageIndex) => (
        <ImageItem key={imageIndex+image.name} name={image.name} source={image.preview} completed="false"></ImageItem>
    ));

    return (
        <div className="main-images-container">
            <div style={{position:"sticky",top:0,backgroundColor:"white",zIndex:10}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <AddFileBtn index="0" accept="image/*" text="Add new image"></AddFileBtn>
                    <AddFileBtn index="1" accept={currentSelector==="polygon" ? ".png" :".json"}
                                text={currentSelector==="polygon"?"Add new mask" :"Add new json"}></AddFileBtn>
                </div>

            </div>
            <div>
                {thumbs}
            </div>
        </div>
    )
}

export default ImagesContainer;