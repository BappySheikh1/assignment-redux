import { updateContent } from "../../actions/productActions"

export const updateProductData =(_id)=>{
    return async (dispatch, getState)=>{
      const res = await fetch(`http://localhost:5000/product/${_id}`,{
        method : "PUT",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(_id)
      })
      const data =await res.json()

     if(data){
        dispatch(updateContent(_id))
     }
    }
}