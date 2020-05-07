import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
        <div>
            <div className={style.main_img_1}>
                <img className={style.header__profile_img} src="https://budapestpanoramacentral.com/sites/default/files/inline-images/s1_1.jpg" alt=""/>
            </div>
            <div className={style.main_img_2}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/>
            </div>
        </div>
    );
}

export default ProfileInfo;