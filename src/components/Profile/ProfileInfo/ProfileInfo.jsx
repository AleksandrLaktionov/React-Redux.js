import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/* <img src='https://st.depositphotos.com/1653005/3084/i/950/depositphotos_30840689-stock-photo-modern-building.jpg' alt=''/> */}
                {/* <img src='https://krot.info/uploads/posts/2020-01/thumbs/1579563415_3-p-foni-s-molniyami-6.jpg' alt=''/> */}
            </div>
            <div className= {s.userPhoto}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}
export default ProfileInfo;