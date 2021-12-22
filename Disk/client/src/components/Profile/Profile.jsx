import React from 'react'
import './Profile.css'
import { logout } from '../../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import exitLogo from '../../assets/img/exit.svg'
import { API_URL } from '../../config'
import avatarLogo from'../../assets/img/avatar.svg'
import { uploadAvatar } from '../actions/User'


const Profile = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

    function changeHandler (e){
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }
    return (
        <div className = 'Profile'>
            <div className="avatar__block">
                    <NavLink to="/" className="avatar__backbtn">назад</NavLink>
                    <img className="avatar__image" src={avatar} alt=""/>
                    {/* <img src = {editAvatar} alt = "" className = "edit__avatar"></img> */}
                    {/* <input accept='image/*' onChange={e => changeHandler(e)} type="file" /> */}
                        <div class="file-input">
                            <input type="file" id="file" class="fileavt" accept='image/*' onChange={e => changeHandler(e)} />
                            <label for="file">
                                Select file
                                <p class="file-name"></p>
                             </label>                        
                        </div>
                    <img src = {exitLogo} alt = "" className = "exit__logo" onClick = {() => dispatch(logout()) }></img>
            </div>
        </div>
    )
}

export default Profile