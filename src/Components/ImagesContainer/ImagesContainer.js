import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ImageItem from '../ImageItem/ImageItem'
import { useDropzone } from 'react-dropzone';
import actions from '../../Actions'
import AddFileBtn from '../AddFileBtn/AddFileBtn'

const ImagesContainer = (props) => {
    let dispatch = useDispatch();
    const currentSelector=useSelector(state=>state.Tools.currentSelector);
    const loadedFiles=useSelector(state=>state.Tools[currentSelector].files);
    const [files, setFiles] = useState(loadedFiles);
    console.log("loaded files:",loadedFiles);
    // const [labels, setLabels] = useState([]);
    // const { getRootProps, getInputProps } = useDropzone({
    //     accept: 'image/*',
    //     onDrop: acceptedFiles => {

    //         setFiles(files.concat(
    //             acceptedFiles.map(file => Object.assign(file, {
    //                 preview: URL.createObjectURL(file)
    //             }))));
    //     }
    // });


    // const thumbs = files.filter(file => file.type.indexOf("image") >= 0).map(file => (
    //     <ImageItem key={file.name} name={file.name} source={file.preview} completed="false"></ImageItem>
    // ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        console.log("the files:", files);
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files,loadedFiles, dispatch]);
    return (
        <div className="main-images-container">
            <AddFileBtn></AddFileBtn>
{/* 
            <div>
                {thumbs}
            </div> */}

        </div>
    )
}

export default ImagesContainer;