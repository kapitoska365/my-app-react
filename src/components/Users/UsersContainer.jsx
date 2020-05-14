import React from "react";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC, changePageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then( response => {
            console.log('Starting Request', response)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    changePager = (page) => {
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then( response => {
            console.log('Starting Request', response)
            this.props.setUsers(response.data.items);
        })
    }

    // getUsers = () => {
    //     if(this.props.users.length === 0){
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
    //             this.props.setUsers(response.data.items);
    //         })
    //     }
    // }

    render = () => {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      changePager={this.changePager}
        />
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (page) => {
            dispatch(changePageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;