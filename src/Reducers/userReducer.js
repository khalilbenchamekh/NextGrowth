import {ADD_USER_SUCCESS, DELETE_USER_SUCCESS, GET_ALL_USER_SUCCESS} from "../Actions/action";

const initialState={
    count:1,
    users:[]
}
const userReducer=(state=initialState,action)=> {
    switch (action.type) {
        case GET_ALL_USER_SUCCESS:
            return{
                ...state,
                users: action.payload
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                users: state.users.unshift(action.payload)
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user=>user.id!==action.payload.id)
            }
        default :
            return state;
    }
}
export default userReducer;