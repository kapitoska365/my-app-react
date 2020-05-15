import React from "react";
import {addPost, updateNewPostText} from "./../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => {
//         let action = addPostActionCreator();
//         props.store.dispatch(action);
//     }
//
//     let onPostChange = (text) => {
//         let action = updatePostActionCreator(text);
//         props.store.dispatch(action);
//     }
//
//
//     return(
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.postData}
//                  newPostText={state.profilePage.newPost}/>
//     );
// }

let mapStateToProps = (state) => {
       return {
           posts: state.profilePage.postData,
           newPostText: state.profilePage.newPost
       }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             dispatch(updatePostActionCreator(text));
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);

export default MyPostsContainer;