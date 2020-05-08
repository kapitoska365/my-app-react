import React from "react";
import style from "./Users.module.css"

let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers( [
            {id: 1, followed: true, fullName: "Trump", status: "I am good", location:{city: "Washington DC", country: "USA"}, avatar: "https://cdn.dribbble.com/users/1210339/screenshots/2909973/trump2_dribbble.jpg"},
            {id: 2, followed: false, fullName: "Dodon", status: "Eu sunt glavniii", location:{city: "Chisinau", country: "Moldova"}, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSla7pOCzstVHKtrozQ3z1eCOZG458dVoae5DZOOgYQtDVnNY6q&usqp=CAU"},
            {id: 3, followed: true, fullName: "Putin", status: "Azm esti cari", location:{city: "Moscow", country: "Russia"}, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg0xts6ni7PLCTMn2aTeTBnlvrL1nbUSfg9Y_qNS2vW62at1rv&usqp=CAU"}
        ])
    }

    let users = props.users.map((users) => <div >
        <span>
            <div>
                <img src={users.avatar} className={style.img__avatar}/>
            </div>
            <div>
                {users.followed
                    ? <button onClick={() => {props.unfollow(users.id)}}>Unfollow</button>
                    : <button onClick={() => {props.follow(users.id)} }>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>
                    {users.fullName}
                </div>
                <div>
                    {users.status}
                </div>
            </span>
            <span>
                <div>{users.location.city}</div>
                <div>{users.location.country}</div>
            </span>
        </span>
    </div>)
    return <div>{users}</div>
}

export default Users;