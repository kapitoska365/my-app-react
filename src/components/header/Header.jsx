import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <img src="https://img.icons8.com/ios/24/000000/adam-sandler.png"/>
            </div>
        </header>
    );
}

export default Header;