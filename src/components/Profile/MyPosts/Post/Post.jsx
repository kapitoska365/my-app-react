import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={style.items}>
            <div>
                <img src="https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest/top-crop/width/360/height/360?cb=20191020043348" alt=""/>
                <span>{props.message}</span>
            </div>
            <div className={style.like}>
                <span>
                    Like {props.count}
                </span>
            </div>
        </div>
    );
}

export default Post;