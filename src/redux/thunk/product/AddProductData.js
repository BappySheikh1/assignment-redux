import { addContent } from "../../actions/productActions"

export const AddProductData =(product)=>{
    return async (dispatch,getState)=>{
       const res = await fetch(`http://localhost:5000/product`,{
        method : "POST",
        headers :{
            "Content-type" : "application/json"
        },
        body: JSON.stringify(product)
       })
       const data =await res.json()

       if(data.acknowledged){
         dispatch(addContent({
            _id : data.insertedId,
            ...product,
         }))
       }
    }
}