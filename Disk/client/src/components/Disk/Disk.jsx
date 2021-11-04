import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { showLoader } from '../../reducers/appReducer'
import { setCurrentDir, setFileView, setPopupDisplay } from '../../reducers/fileReducer'
import {  createDir, getFiles, searchFile, searchFiles, uploadFile } from '../actions/File'
import "./Disk.css"
import FileList from './FileList/FileList'
import Popup from './Popup'
import Uploader from './Uploader/Uploader'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.app.loader )
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    


    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    },[currentDir,sort ])

    //Скрыть/показать попап 
    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }
    //кнопка назад
    function backClickHandler(){
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }
    //загрузка файлов
    function fileUploadHandler(event){
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }
    //Drag and drop функциии
    function dragEnterHandler(event){
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)

    }
    function dragLeaveHandler(event){
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)

    }
    function dropHandler(event){
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }
    //поиск
    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if(e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value));
            }, 400, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }
    //спинер
    if(loader){
        return(
            <div className = 'disk' onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className="disk__btns">
                <button className = 'disk__back' onClick = {() => backClickHandler()}>Назад</button>
                <button className = 'disk__create' onClick = {() => showPopupHandler()}>Создать папку</button>  
                {/* загрузка файлов */}
                <div className="disk__upload">
                    <label htmlFor="disk__upload-input" className = 'disk__upload-label'>Загрузить файл</label>
                    <input multiple = {true} onChange = {(event) => fileUploadHandler(event)} type="file" id = 'disk__upload-input' className = 'disk__upload-input'/>
                </div>
                {/* поиск*/}
                <input 
                    className = "disk__search-input" 
                    value = {searchName}
                    onChange = {(e) => searchChangeHandler(e)}
                    type = "text"
                    placeholder = "Введите название файла"
                />
                {/* представление файлов */}
                <button className="disk__tiles" onClick = {() => dispatch(setFileView('tiles'))}/>
                <button className="disk__list"  onClick = {() => dispatch(setFileView('list'))}/>
                {/* сортировка */}
                <select value = {sort} onChange ={(e) => setSort(e.target.value)} className = 'disk__select'>
                    <option value = "name">По имени</option>
                    <option value = "type">По типу</option>
                    <option value = "date">По дате</option>
                </select>
            </div>
                <div className="loader">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        )
    }

    return (!dragEnter ?
        // onDragEnter={определяет занесли мы файлы в область или нет} onDragLeave={определяет вышли мы из области или нет} onDragOver={определяет находимся мы в области или нет в даннный момент}
        <div className = 'disk' onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className="disk__btns">
                <button className = 'disk__back' onClick = {() => backClickHandler()}>Назад</button>
                <button className = 'disk__create' onClick = {() => showPopupHandler()}>Создать папку</button>  
                {/* загрузка файлов */}
                <div className="disk__upload">
                    <label htmlFor="disk__upload-input" className = 'disk__upload-label'>Загрузить файл</label>
                    <input multiple = {true} onChange = {(event) => fileUploadHandler(event)} type="file" id = 'disk__upload-input' className = 'disk__upload-input'/>
                </div>
                {/* поиск*/}
                <input 
                    className = "disk__search-input" 
                    value = {searchName}
                    onChange = {(e) => searchChangeHandler(e)}
                    type = "text"
                    placeholder = "Введите название файла"
                />
                {/* представление файлов */}
                <button className="disk__tiles" onClick = {() => dispatch(setFileView('tiles'))}/>
                <button className="disk__list"  onClick = {() => dispatch(setFileView('list'))}/>
                {/* сортировка */}
                <select value = {sort} onChange ={(e) => setSort(e.target.value)} className = 'disk__select'>
                    <option value = "name">По имени</option>
                    <option value = "type">По типу</option>
                    <option value = "date">По дате</option>
                </select>

              

            </div>

            <FileList/>
            <Popup/>
            <Uploader/>
        </div>
        :
        <div className="drop_area" onDrop = {dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
    )
}

export default Disk