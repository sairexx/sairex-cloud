import React from 'react'
import UploadFile from './UploadFile'
import './Uploader.css'

const Uploader = () => {
    const files = [{id:1, name: "file",progress: 0},{id:1, name: "file",progress: 0},{id:2, name: "file",progress: 0},]
    return (
        <div className = 'uploader'>
             <div className="uploader__header">
                 <div className="uploader__title">Загрузки</div>
                <button className="uploader__close"></button>
             </div>
            {files.map(file =>

            <UploadFile key = {file.id} file = {file}/>
            
            )}
        </div>
    )
}

export default Uploader