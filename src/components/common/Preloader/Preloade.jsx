import React from "react";
import spinner from "../../../assets/images/spinner5.gif";

let Preloader = (props) => {
    return <div>
         <img src={spinner} style={{width:"50px", height: "50px"}}/>
    </div>
}

export default Preloader;