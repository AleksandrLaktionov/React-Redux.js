import React from 'react';
import {reduxForm} from "redux-form";
import {Input} from "./../../components/common/FormsControls/FormsControls";
import { required, maxLengthCreator } from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';
import {createField} from './../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField ("Email", "email", Input, [required, maxLength50])}
                {createField ("Password", "password", Input, [required, maxLength50], { type: "password"} )}
                {createField (null,"rememberMe", Input, [], { type: "checkbox"}, "remember me")}
                
            {error && <div className={style.formSummariError}>
                {error}
            </div>}
            <div>
                <button className={style.Login}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);