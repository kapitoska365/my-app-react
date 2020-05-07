import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        friends: state.siteBar
    }
}


const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;