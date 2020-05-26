import * as axios from "axios";

const INSTANCE = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "6b38da95-1efa-4c6f-a50e-68daea2fff7b"}
});

export const UserAPI =  {

    getUsers: (pageSize, currentPage) => {
        return INSTANCE.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {return response.data})
    },

    unfollowUser: (userId) => {
        return INSTANCE.delete(`follow/${userId}`).then( response => {return response.data})
    },

    followUser: (userId) => {
        return INSTANCE.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then( response => {return  response.data}).catch((err) => console.log(err))
    }
}

