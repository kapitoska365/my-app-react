import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloade";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return(
        <div>
            <div className={style.user_info__container}>
                <div>
                    <img src={props.profile.photos.large} alt="" className={style.user_profile__img}/>
                </div>
                <div>
                   <span className={style.white}>INFO</span>
                    <div><span className={style.white}>Full Name:</span>  {props.profile.fullName}</div>
                    <div><span className={style.white}>Status:</span>  {props.profile.aboutMe}</div>
                    <div><span className={style.white}>Looking for Job:</span>  {props.profile.aboutMe ? <span>Yes</span> : <span>No</span>}</div>
                </div>

            </div>
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


// {
//     "aboutMe": "я круто чувак 1001%",
//     "contacts": {
//     "facebook": "facebook.com",
//         "website": null,
//         "vk": "vk.com/dimych",
//         "twitter": "https://twitter.com/@sdf",
//         "instagram": "instagra.com/sds",
//         "youtube": null,
//         "github": "github.com",
//         "mainLink": null
// },
//     "lookingForAJob": true,
//     "lookingForAJobDescription": "не ищу, а дурачусь",
//     "fullName": "samurai dimych",
//     "userId": 2,
//     "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//         "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
// }
// }