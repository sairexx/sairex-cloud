import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getFiles } from '../actions/File'
import "./Disk.css"
import FileList from './FileList/FileList'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    useEffect(() => {
        dispatch(getFiles(currentDir))
    },[currentDir])
    return (
        <div className = 'disk'>
            <div className="disk__btns">
                <button className = 'disk__back'></button>
                <button className = 'disk__create'></button>  
            </div>
            <FileList/>
             Disk

        </div>
    )
}

export default Disk