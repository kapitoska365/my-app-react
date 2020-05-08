import React from "react";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    let friends = props.friends.siteBar.map(obj => (
        <NavLink to={"/friends/" + obj.id} key={obj.id}>
            <img className={style.img__avatar} src={obj.avatar} alt=""/>
            {obj.name}
        </NavLink>));
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.nav__link}><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></li>
                <li className={style.nav__link}><NavLink to="/dialog" activeClassName={style.active}>Messages</NavLink></li>
                <li className={style.nav__link}><NavLink to="/news" activeClassName={style.active}>News</NavLink></li>
                <li className={style.nav__link}><NavLink to="/music" activeClassName={style.active}>Music</NavLink></li>
                <li className={style.nav__link}><NavLink to="/users" activeClassName={style.active}>Users</NavLink></li>

                <li className={style.nav__link + " " + style.nav__link_settings}><NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></li>

                <li className={style.nav__link + " " + style.nav__link_friends}>
                    <NavLink to="/friends" activeClassName={style.active}>
                        Friends
                    </NavLink>
                    <div>
                        {friends}
                    </div>
                </li>
            </ul>
        </nav>
    );
}


export default Nav;