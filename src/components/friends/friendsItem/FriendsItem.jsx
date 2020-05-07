import React from "react";
import style from "./FriendsItem.module.css";
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;
    return(
        <div>
            <div className={style.friends__list}>
                <img className={style.friends__list_ava} src={props.ava} alt=""/>
                <NavLink to={path}>{props.friends}</NavLink>
            </div>
        </div>
    );
}

export default FriendsItem;