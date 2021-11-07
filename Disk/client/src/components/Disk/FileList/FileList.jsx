import React from 'react'
import { useSelector } from 'react-redux'
import './FileList.css'
import File from "./file/File"
import {CSSTransition, TransitionGroup } from 'react-transition-group'

const FileList = () => {

    const files = useSelector(state => state.files.files)
    const FileView = useSelector(state => state.files.view)
    
    if(files.length === 0){
        return (
            <div className="loader">файлы не найдены</div>
        )
    }

    if(FileView === 'tiles'){
        return (
            <div className = 'filetiles'>
                    {files.map(file => 
                          <File key = {file._id}  file={file}/>
                    )}  
            </div>
        )
    }


    if(FileView === 'list'){
        return (
            <TransitionGroup>
            <CSSTransition>
                
                    <div className = 'filelist'>
                        <div className="filelist_header">
                            <div className="filelist__name">Название</div>
                            <div className="filelist__date">Дата</div>
                            <div className="filelist__size">Размер</div>
                        </div>
                        
                            {files.map(file => 
                                <CSSTransition key={file._id} timeout = {1000} classNames={'file'} exit={false}>
                                <File  file={file}/>
                            </CSSTransition>
                            )}
                    
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
    
}

export default FileList