import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from './../../../utils/validators/validators';
import {Textarea} from './../../../components/common/FormsControls/FormsControls';

const MyPost = React.memo(props => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
       props.addPost (values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts :</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.MyPost}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newPostText" component={Textarea} placeholder="react.js"
                    validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button className={s.addPost}>Add post</button>
                </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

export default MyPost;