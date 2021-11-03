import React, { useState } from 'react'
import './Popup.css'
import Input from '../../Utils/Input'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupDisplay } from '../../reducers/fileReducer'
import { createDir } from '../actions/File'

const Popup = () => {

    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
    }

    return (
        <div className = "popup" onClick = {() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay }}>
            <div className="popup__content" onClick = {(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <div className="popup__btn"><button onClick ={() => dispatch(setPopupDisplay('none'))} className="popup__close"></button></div>
                </div>

                <Input type = "text" placeholder = "Введите название папки" value = {dirName} setValue = {setDirName}/>
                
                <button className="popup__create" onClick = {() => {createHandler();dispatch(setPopupDisplay('none'));setDirName('')}}>создать</button>
            </div>
        </div>
    )
}
 
export default Popup