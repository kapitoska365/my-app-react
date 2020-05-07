import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
    return {
        friends: state.siteBar
    }
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;