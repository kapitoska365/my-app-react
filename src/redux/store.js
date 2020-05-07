import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hi, fucking asome", likesCount: 24},
                {id: 2, message: "It's a lot of humor", likesCount: 57}
            ],
            newPost: "I am new post"
        },
        messagesPage:{
            messagesData: [
                {id: 1, message: "Ola"},
                {id: 2, message: "Buna Ziua"},
                {id: 3, message: "Hello"}
            ],
            dialogsData: [
                {id: 1, name: "Putin", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg0xts6ni7PLCTMn2aTeTBnlvrL1nbUSfg9Y_qNS2vW62at1rv&usqp=CAU"},
                {id: 2, name: "Trump", avatar: "https://cdn.dribbble.com/users/1210339/screenshots/2909973/trump2_dribbble.jpg"},
                {id: 3, name: "Dodon", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSla7pOCzstVHKtrozQ3z1eCOZG458dVoae5DZOOgYQtDVnNY6q&usqp=CAU"}
            ],
            newMessage: 'hello I am new message'
        },
        siteBar:{
            friends:[
                {id: 1, name: "Putin", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg0xts6ni7PLCTMn2aTeTBnlvrL1nbUSfg9Y_qNS2vW62at1rv&usqp=CAU"},
                {id: 2, name: "Trump", avatar: "https://cdn.dribbble.com/users/1210339/screenshots/2909973/trump2_dribbble.jpg"},
                {id: 3, name: "Dodon", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSla7pOCzstVHKtrozQ3z1eCOZG458dVoae5DZOOgYQtDVnNY6q&usqp=CAU"}
            ]
        }
    },
    _rerenderEntireTree() {
        console.log("Page was rerendered");
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    /*_addPost() {
        let newPost = {
            id: this._state.profilePage.postData.length + 1,
            message: this._state.profilePage.newPost,
            likesCount: 0
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPost = '';
        this._rerenderEntireTree(this._state);
    },
    _updatePost(text) {
        this._state.profilePage.newPost = text;
        this._rerenderEntireTree(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: this._state.messagesPage.messagesData.length + 1,
            message: this._state.messagesPage.newMessage
        }

        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessage = '';
        this._rerenderEntireTree(this._state);
    },
    _updateMessage(message) {
        this._state.messagesPage.newMessage = message;
        this._rerenderEntireTree(this._state);
    },*/

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._rerenderEntireTree(this._state);
    }
}


export default store;
window.store = store;