const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: state.newMessage}],
                newMessage: ""
            };
            break;

        case UPDATE_MESSAGE:
            let message = action.message;
            return {
                ...state,
                newMessage: message
            };
            break;

        default:
            return state;
            break;
    }
}

export const addMessage = () => {
    return {type: ADD_MESSAGE}
}

export const onChange = (message) => {
    return {type: UPDATE_MESSAGE, message: message}
}

export default dialogsReducer;