import { GET_CONTENT } from "../actionTypes/actionTypes";

export const initialState ={
 TEST : "TEST"
};

export const productReducer =(state = initialState, action)=>{
    console.log(state);
    switch(action.type){
     case GET_CONTENT :
        return {
            ...state
        }
        default :
          return state;
    }
   
}