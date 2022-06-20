import {ADD_USER, DELETE_USER, GET_ALL_USER} from "./action";


export const getAllUsers=()=>{
    return{
        type:GET_ALL_USER
    }
}

export const addUser = (payload) => {
  return{
      type:ADD_USER,
      payload:payload
  }
}

export const deleteUser = (payload) => {
  return{
      type:DELETE_USER,
      payload:payload
  }
}