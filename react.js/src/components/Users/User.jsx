import React from 'react';
import userPhoto from '../../assets/images/blue-butterfly.jpg';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    let u = user;
    return (
        <div>
            <span>
                <div className={styles.userPhoto}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)}
                            onClick={() => { unfollow(true, u.id); }} className={styles.followed}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)}
                            onClick={() => { follow(true, u.id) }} className={styles.followed}>
                            Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)

}
export default User;