import React from 'react';
import s from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
        return (
            <header className={s.header}>
            <img src='https://img2.freepng.ru/20171128/22b/blue-butterfly-png-clip-art-5a1cf7c97ff329.4428226815118478815241.jpg' alt=""/>
            <div className={s.loginBlock}>
                { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                :   <NavLink to={'/login'}>
                    login
                    </NavLink>
}
            </div>

            </header>
        );}
export default Header;