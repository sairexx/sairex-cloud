import React from 'react'
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import { deleteFile, downloadFile } from '../../../actions/File'

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector( state => state.files.currentDir)
    const FileView = useSelector(state => state.files.view)

    //открытие папки
    function openDirHandler(file){
        if(file.type === 'dir'){    
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }    
    }

    //кнопка скачивания
    function downloadClickHandler(e){
        e.stopPropagation()
        downloadFile(file)
    }
    function deleteClickHandler(e){e.stopPropagation()
        dispatch(deleteFile(file))}
        

    //конвертатация размера
    function formatSizeUnits(size){
        if      (size>=1073741824) {size=(size/1073741824).toFixed(1)+' GB';}
        else if (size>=1048576)    {size=(size/1048576).toFixed(1)+' MB';}
        else if (size>=1024)       {size=(size/1024).toFixed(1)+' KB';}
        else if (size>1)           {size=size+' bytes';}
        else if (size==1)          {size=size+' byte';}
        else                            {file.size='0 byte';}
        return size;
  }

    if(FileView === 'list'){
        return (
        <div className = 'file' onClick = {() => openDirHandler(file)}>
            <img src = {file.type === 'dir' ? dirLogo : fileLogo} alt="" className = 'file__img' />
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0,10)}</div>
            <div className="file__size">{formatSizeUnits(file.size)}</div>
            {file.type !== 'dir' &&  <button onClick = {(e) => downloadClickHandler(e)} className="file__btn file__download">Загрузить</button>}
            <button onClick = {(e) => deleteClickHandler(e)} className="file__btn file__delete">удалить</button>
              
        </div>
    )}

    if(FileView === 'tiles'){
        return (
        <div className = 'file-tiles' onClick = {() => openDirHandler(file)}>
            <img src = {file.type === 'dir' ? dirLogo : fileLogo} alt="" className = 'file-tiles__img' />
            <div className="file-tiles__name">{file.name}</div>
            <div className="file-tiles__btns">
                {file.type !== 'dir' &&  <button onClick = {(e) => downloadClickHandler(e)} className="file__btn file__download">Загрузить</button>}
                <button onClick = {(e) => deleteClickHandler(e)} className="file__btn file__delete">удалить</button>
            </div>
              
        </div>
    )}
    
}

export default File