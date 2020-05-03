import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone';
import actions from '../../Actions/index'





const AddFileBtn = (props) => {
    // console.log("currentID:",currentLabelCountID);
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {

            setFiles(files.concat(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))));
        }
    });

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
        dispatch(actions.loadFiles(files));
        console.log("the files:", files);
    }, [files, dispatch]);
    return (
        <div {...getRootProps({ className: 'main-images-dropZone' })}>
            <input {...getInputProps()} />
            {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
            <span>Add new image</span>
            <img alt="" src={process.env.PUBLIC_URL + "Images/addPhotoS.svg"}></img>

        </div>
    )
}

export default AddFileBtn;