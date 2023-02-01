import { updateContent } from "../../actions/productActions"

export const updateProductData =(_id)=>{
    return async (dispatch, getState)=>{
      const res = await fetch(`https://moon-tech-server-ruddy.vercel.app/product/${_id}`,{
        method : "PUT",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(_id)
      })
      const data =await res.json()

      if(data.modifiedCount > 0){
        // toast.success('User Update successful',{autoClose: 500})
        dispatch(updateContent(_id))
    }
     
    }
}