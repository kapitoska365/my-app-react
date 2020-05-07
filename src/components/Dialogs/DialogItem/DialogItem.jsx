import React from "react";
import style from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return(
        <div className={style.dialog + ' ' + style.active}>
            <img className={style.img_ava} src={props.avatar} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;