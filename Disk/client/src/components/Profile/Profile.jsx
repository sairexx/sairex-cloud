import React from 'react'
import './Profile.css'
import exitLogo from '../../assets/img/exit.svg'
import editAvatar from '../../assets/img/load_avatar.svg'

const Profile = () => {
    return (
        <div className = 'Profile'>
            <div className="avatar__block">
                    <div className = "avatar__image"></div>
                    <img src = {editAvatar} alt = "" className = "edit__avatar"></img>                    
                    <div className = "Login">Ваш EMAIL:T1@mail.ru</div>
                    <div className = "Password">Ваш Password:*********</div>
                    <img src = {exitLogo} alt = "" className = "exit__logo"></img>
            </div>
        </div>
    )
}

export default Profile