import React, { useState, useEffect } from 'react'
import ImageItem from '../ImageItem/ImageItem'
import { useDropzone } from 'react-dropzone';

const ImagesContainer = (props) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {

            setFiles(files.concat(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
            );
        }
    });

    const thumbs = files.map(file => (
        <ImageItem key={file.name} name={file.name} source={file.preview} completed="false"></ImageItem>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        console.log("the files:", files)
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    return (
        <div className="main-images-container">
            <div {...getRootProps({ className: 'main-images-dropZone' })}>
                <input {...getInputProps()} />
                {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                <span>Add new image/json</span>
                <img alt="" src={process.env.PUBLIC_URL + "Images/addPhotoS.svg"}></img>

            </div>
            <div>
                {thumbs}
            </div>
            {/* <ImageItem source="Images/bounding boxes/9691.png" completed="true"></ImageItem>
        <ImageItem source="Images/bounding boxes/9941.png" completed="true"></ImageItem>
        <ImageItem source="Images/bounding boxes/11387.png" completed="false"></ImageItem>
        <ImageItem source="Images/bounding boxes/34967.png" completed="false"></ImageItem> */}

        </div>
    )
}

export default ImagesContainer;