import {call,put,takeEvery} from "redux-saga/effects"
import usersData from "../Constants";
import {
    ADD_USER,
    ADD_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    GET_ALL_USER,
    GET_ALL_USER_SUCCESS
} from "../Actions/action";


function* getAllUsers() {
    try {
        const users=usersData
        yield put({type:GET_ALL_USER_SUCCESS,payload:users})
    }catch (e){

    }

}

function* deleteUser(action){
    try {
        yield put({type:DELETE_USER_SUCCESS,payload:action.payload})
    }catch (e) {

    }
}

function* addUser(action){
    try {
        yield put({type:ADD_USER_SUCCESS,payload:action.payload})
    }catch (e) {

    }
}
function* userSaga() {
    yield takeEvery(GET_ALL_USER,getAllUsers)
    yield takeEvery(DELETE_USER,deleteUser)
    yield takeEvery(ADD_USER,addUser)
}

export default userSaga;