import { GET_CONTENT } from "../actionTypes/actionTypes";

export const initialState ={
 products : [],
};

export const productReducer =(state = initialState, action)=>{
    
    switch(action.type){
        
     case GET_CONTENT :
        return {
            ...state,
            products : action.payload
        }

        default :
          return state;
    }
   
}