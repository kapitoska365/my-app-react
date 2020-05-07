import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



// const DialogsContainer = (props) =>{
//
//     let state = props.store.getState();
//
//     let newMessageText = state.messagesPage.newMessage;
//
//     let addMessage = () => {
//         let action = addMessageActionCreator();
//         props.store.dispatch(action);
//     }
//
//     let onChange = (text) => {
//         let message = text;
//         let action = updateMessageActionCreator(message);
//         props.store.dispatch(action);
//     }
//
//     return(
//         <Dialogs onChange={onChange} addMessage={addMessage} newMessageText={newMessageText} messages={state.messagesPage}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage,
        newMessageText: state.messagesPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChange: (message) => {
            dispatch(updateMessageActionCreator(message));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;