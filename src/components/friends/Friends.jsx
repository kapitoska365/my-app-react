import React from "react";
import style from "./Friends.module.css";
import FriendsItem from "./friendsItem/FriendsItem";

const Friends = (props) => {
    let friends = props.friends.siteBar.map(obj => <FriendsItem friends={obj.name} id={obj.id} ava={obj.avatar}/>);
    return(
        <div className="siteBar">
            <div className="siteBar__list">
                {friends}
            </div>
        </div>
    );
}

export default Friends;