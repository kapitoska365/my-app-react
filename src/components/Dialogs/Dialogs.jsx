import React from "react";
import style from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) =>{

    let messagesElements = props.messages.messagesData.map(obj => <Message message={obj.message} key={obj.id} id={obj.id}/>);
    let dialogsElements = props.messages.dialogsData.map(obj => <DialogItem name={obj.name} key={obj.id} id={obj.id} avatar={obj.avatar}/>);

    let newMessageText = props.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }

    let onChange = (e) => {
        let message = e.target.value;
        props.onChange(message);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems} >
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
                <div>
                    <textarea value={newMessageText}
                              onChange={onChange}
                              placeholder="Enter your message"/>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;