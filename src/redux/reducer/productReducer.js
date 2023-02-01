import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

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

     case ADD_CONTENT : 
        return {
           ...state,
           products : [...state.products, action.payload]
        }        

      case DELETE_CONTENT :
        return {
            ...state,
            products : state.products.filter(product => product._id !== action.payload)
        }  
      
      case UPDATE_CONTENT :
        return {
            ...state,
            
        }
   

        default :
          return state;
    }
   
}