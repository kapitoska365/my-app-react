import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts.map(obj => <Post message={obj.message} key={obj.id} count={obj.likesCount}/>);

    let newTextPost = props.newPostText;

    let addPost = () => {
        props.addPost();
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }


    return(
        <div className={style.posts}>
            My Posts
            <div>
                <div>
                    <textarea value={newTextPost}
                              onChange={onChange}
                              placeholder="Your post please"/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            { posts }
        </div>
    );
}

export default MyPosts;