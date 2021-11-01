import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../../reducers/uploadReducer'
import './Uploader.css'

const UploadFile = ({file}) => {
    const dispatch = useDispatch()
    return (
        <div className = 'upload-file'>
            <div className="upload-file__header">
                <div className="upload-file__name">{file.name}</div>
                <button className="upload-file__remove" onClick = {() => dispatch(removeUploadFile(file.id))}>x</button>
            </div>
            <div className="upload-file__progress-bar">
                <div className="upload-file__upload-bar" style = {{width: file.progress + '%'}}></div>
                <div className="uplaod-file__percent">{file.progress}%</div>
            </div>
        </div>
    )
}

export default UploadFile