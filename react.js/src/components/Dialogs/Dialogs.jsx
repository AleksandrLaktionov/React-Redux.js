import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from './../../utils/validators/validators';
import {Textarea} from './../../components/common/FormsControls/FormsControls'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogElements = state.dialogs
        .map(d => <DialogItem name={d.name} key ={d.id} id={d.id}/>);
    let messagesElements = state.messages 
        .map(m => <Message message={m.message} key ={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    );
}

const maxLength60 = maxLengthCreator(60)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                    validate={[required, maxLength60]}/>
                </div>
                
                <div>
                    <button  className={s.send}>Send</button>
                </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;