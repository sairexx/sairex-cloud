import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'
const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        
        
       <div className="container">
            <div className = "navbar">
                {/* <img src={Logo} alt="" className = "navbar__logo"/> */}
                <div className = "navbar__header">CYREXCLOUD</div>
                {!isAuth && <div className = "navbar__login"> <NavLink to = "/login" className = "navbar__log-navlink">Войти</NavLink></div>}
                {!isAuth && <div className = "navbar__registration"><NavLink to = "/registration" className = "navbar__reg-navlink">Регистрация</NavLink></div>}
                {isAuth && <div className = "navbar__login" onClick = {() => dispatch(logout()) }>Выход</div>}
            </div>  
       </div>
       
    )
}

export default Navbar