const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAl_USERS_COUNT = "SET_TOTAl_USERS_COUNT"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

        default:
            return state;
            break;
    }
}

export const followAC = (userId) => {return {type: FOLLOW, userId}};

export const unfollowAC = (userId) => {return {type: UNFOLLOW, userId}};

export const changePageAC = (page) => { return {type: CHANGE_PAGE, page}};

export const setTotalUsersCountAC = (totalCount) => {return {type: SET_TOTAl_USERS_COUNT, totalCount}}

export const setUsersAC = (users) => {return {type: SET_USERS, users}};



export default usersReducer;