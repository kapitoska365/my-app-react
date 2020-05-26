import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <img src="https://img.icons8.com/ios/24/000000/adam-sandler.png"/>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth ? <span style={{color: "white"}}>{props.login}</span> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;