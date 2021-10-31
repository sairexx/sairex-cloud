import React from 'react'
import './Uploader.css'

const UploadFile = ({file}) => {
    return (
        <div className = 'upload-file'>
            <div className="upload-file__header">
                <div className="upload-file__name">{file.name}</div>
                <button className="upload-file__remove">x</button>
            </div>
            <div className="upload-file__progress-bar">
                <div className="upload-file__upload-bar"></div>
                <div className="uplaod-file__percent">{file.progress}%</div>
            </div>
        </div>
    )
}

export default UploadFile