import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    toggleIsFetching,
    followingInProgress, toogleInProgress, getUsersThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloade";
import {UserAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        // UserAPI.getUsers(this.props.pageSize, this.props.currentPage).then( data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })

        this.props.getUsersThunkCreator();
    }

    changePager = (page) => {
        this.props.changePage(page);
        this.props.toggleIsFetching(true);
        UserAPI.getUsers(this.props.pageSize, page).then( data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      changePager={this.changePager}
                      toogleInProgress={this.props.toogleInProgress}
                      followInProgress={this.props.followInProgress}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress

    }
}

/*let mapDispatchToProps = (dispatch) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

const UsersContainer = connect(mapStateToProps, {follow,
                                                 unfollow,
                                                 setUsers,
                                                 changePage,
                                                 setTotalUsersCount,
                                                 toggleIsFetching,
                                                 toogleInProgress,
                                                 getUsersThunkCreator})(UsersAPIComponent);

export default UsersContainer;