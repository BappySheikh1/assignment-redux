import { deleteContent } from "../../actions/productActions"

export const deleteProductData =(_id)=>{
    return async(dispatch,getState)=>{
        const res =await fetch(`http://localhost:5000/product/${_id}`,{
            method : 'DELETE',
            headers: {
                "Content-type" : 'application/json'
            } 
        })
        const data =await res.json()

        if(data.acknowledged){
          dispatch(deleteContent(_id))
        }
    }
}
