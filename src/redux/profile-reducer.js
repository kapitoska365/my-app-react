const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
    postData: [
        {id: 1, message: "Hi, fucking asome", likesCount: 24},
        {id: 2, message: "It's a lot of humor", likesCount: 57}
    ],
    newPost: "I am new post"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {id: state.postData.length + 1, message: state.newPost, likesCount: 0}],
                newPost: ""
            };
            break;

        case UPDATE_POST:
            let text = action.text;
            return {
                ...state,
                newPost: text
            };
            break;

        default:
            return state;
            break;
    }
}

export const addPost = () => {
    return {type: ADD_POST}
}

export const updateNewPostText = (text) => {
    return {type: UPDATE_POST, text: text}
}

export default profileReducer;