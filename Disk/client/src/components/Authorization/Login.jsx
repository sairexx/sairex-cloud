import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../Utils/Input'
import { login } from '../actions/User'

import "./Authorization.css"


const Login = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const dispatch = useDispatch()
    return (
        <div className = "Authorization">
            <div className="Authorization__header">Авторизация</div>
            <Input value = {email} setValue = {setEmail} type = "text" placeholder = "Введите Email"/>
            <Input value = {password} setValue = {setPassword} type = "password" placeholder = "Введите Пароль"/>
            <button className="Authorization__btn" onClick = {() => dispatch(login(email, password))} >Войти</button>
        </div>
    )
}

export default Login