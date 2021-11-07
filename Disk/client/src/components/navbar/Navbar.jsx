import React from 'react'
import './Navbar.css'
import avatarLogo from'../../assets/img/avatar.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'
import { API_URL } from '../../config'


const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    return (
        
        
       <div className="container">
            <div className = "navbar">
                <div className = "navbar__header">CCLOUD</div>
                {!isAuth && <div className = "navbar__login"> <NavLink to = "/login" className = "navbar__log-navlink">Войти</NavLink></div>}
                {!isAuth && <div className = "navbar__registration"><NavLink to = "/registration" className = "navbar__reg-navlink">Регистрация</NavLink></div>}
                {isAuth && <div className = "navbar__login" onClick = {() => dispatch(logout()) }>Выход</div>}
                 {isAuth && <NavLink to='/profile'>
                    <img className="navbar__avatar" src={avatar} alt=""/>
                </NavLink>} 
            </div>  
       </div>
       
    )
}

export default Navbar