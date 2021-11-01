import React from 'react'
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import deleteLogo from '../../../../assets/img/delete.svg'
import downloadLogo from '../../../../assets/img/download.svg'
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import { deleteFile, downloadFile } from '../../../actions/File'

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector( state => state.files.currentDir)

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
    function formatSizeUnits(){
        if      (file.size>=1073741824) {file.size=(file.size/1073741824).toFixed(2)+' GB';}
        else if (file.size>=1048576)    {file.size=(file.size/1048576).toFixed(2)+' MB';}
        else if (file.size>=1024)       {file.size=(file.size/1024).toFixed(2)+' KB';}
        else if (file.size>1)           {file.size=file.size+' bytes';}
        else if (file.size==1)          {file.size=file.size+' byte';}
        else                            {file.size='0 byte';}
        return file.size;
  }

    return (
        <div className = 'file' onClick = {() => openDirHandler(file)}>
            <img src = {file.type === 'dir' ? dirLogo : fileLogo} alt="" className = 'file__img' />
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0,10)}</div>
            <div className="file__size">{formatSizeUnits()}</div>
            {file.type !== 'dir' &&  <button onClick = {(e) => downloadClickHandler(e)} className="file__btn file__download">Загрузить</button>}
            <button onClick = {(e) => deleteClickHandler(e)} className="file__btn file__delete">удалить</button>
              
        </div>
    )
}

export default File