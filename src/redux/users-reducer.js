import {UserAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAl_USERS_COUNT = "SET_TOTAl_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_TOTAl_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case FOLLOWING_IN_PROGRESS:
            debugger;
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
            break;
    }
}

export const follow = (userId) => {return {type: FOLLOW, userId}};

export const unfollow = (userId) => {return {type: UNFOLLOW, userId}};

export const changePage = (page) => { return {type: CHANGE_PAGE, page}};

export const setTotalUsersCount = (totalCount) => {return {type: SET_TOTAl_USERS_COUNT, totalCount}}

export const setUsers = (users) => {return {type: SET_USERS, users}};

export const toggleIsFetching = (isFetching) => { return {type: TOGGLE_IS_FETCHING, isFetching}}

export const toogleInProgress = (isFetching, userId) => { return {type: FOLLOWING_IN_PROGRESS, isFetching, userId}}

//THUNK CREATOR
export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UserAPI.getUsers(pageSize, currentPage).then( data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }

}


export default usersReducer;