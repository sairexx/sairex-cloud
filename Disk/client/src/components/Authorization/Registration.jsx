import React, { useState } from 'react'
import Input from '../../Utils/Input'
import { registration } from '../actions/User'
import "./Authorization.css"


const Registration = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    return (
        <div className = "Authorization">
            <div className="Authorization__header">Регистрация</div>
            <Input value = {email} setValue = {setEmail} type = "text" placeholder = "Введите Email"/>
            <Input value = {password} setValue = {setPassword} type = "password" placeholder = "Введите Пароль"/>
            <button className="Authorization__btn" onClick = {() => registration(email, password)}>Войти</button>
        </div>
    )
}

export default Registration