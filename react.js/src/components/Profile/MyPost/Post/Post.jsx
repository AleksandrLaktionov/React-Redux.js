import React from 'react';
import s from './Post.module.css';
const Post = (props) => {

        return (
            <div className={s.Post} >
                <img src='https://img2.freepng.ru/20171128/22b/blue-butterfly-png-clip-art-5a1cf7c97ff329.4428226815118478815241.jpg' alt=""/>
                    {props.message}
                    <div><span>like</span></div>

            </div>
        );}
export default Post;