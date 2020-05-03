import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ImageItem from '../ImageItem/ImageItem'
import { useDropzone } from 'react-dropzone';
import actions from '../../Actions'
import AddFileBtn from '../AddFileBtn/AddFileBtn'

const ImagesContainer = (props) => {
    let dispatch = useDispatch();
    const currentSelector = useSelector(state => state.Tools.currentSelector);
    const loadedFiles = useSelector(state => state.Tools[currentSelector].files);
    const loadedLabels = useSelector(state => state.Tools[currentSelector].labels);
    let selectorLabels;
    if (loadedLabels.length > 0) {
        fetch(loadedLabels[0].preview)
            .then(res => res.json())
            .then(
                result => { selectorLabels = result; console.log("selectorLabels:", selectorLabels) }
            );
    }
    console.log("loaded Files", loadedFiles);
    console.log("loaded Labels", loadedLabels);



    // const [files,setFiles]=useState(useSelector(state=>state.Tools[currentSelector].files));

    // const getFiles=()=>useSelector(state => state.Tools[currentSelector].files,[]);


    const thumbs = loadedFiles.filter(file => file.type.indexOf("image") >= 0).map(file => (
        <ImageItem key={file.name} name={file.name} source={file.preview} completed="false"></ImageItem>
    ));

    // useEffect(() => () => {
    //     // Make sure to revoke the data uris to avoid memory leaks
    //     console.log("the files:", files);
    //     files.forEach(file => URL.revokeObjectURL(file.preview));
    // }, [files, dispatch]);
    return (
        <div className="main-images-container">
            <div style={{position:"sticky",top:0,backgroundColor:"white",zIndex:10}}>
            <AddFileBtn index="0" accept="image/*" text="Add new image"></AddFileBtn>
            <AddFileBtn index="1" accept=".json" text="Add new json"></AddFileBtn>
            </div>

            <div>
                {thumbs}
            </div>
        </div>
    )
}

export default ImagesContainer;