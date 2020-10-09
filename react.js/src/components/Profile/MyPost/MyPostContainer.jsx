import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from './MyPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.NewPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;