import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
// import myTreck from "../../Music/Audio/zvuk-najatiya-knopki-na-kompyuternoy-myishke-12969.mp3";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Messages</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
            <div><NavLink to="/users">Users</NavLink></div>
        </nav>
    );
}
export default Navbar;