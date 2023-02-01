import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const getContent =(product)=>{
    return {
        type : GET_CONTENT,
        payload : product
    }
} 

export const addContent =(product)=>{
    return {
        type : ADD_CONTENT,
        payload : product
    }
}

export const deleteContent =(_id)=>{
    return {
        type : DELETE_CONTENT,
        payload : _id
    }
}

export const updateContent =(_id)=>{
   return {
    type : UPDATE_CONTENT,
    payload : _id
   }
}