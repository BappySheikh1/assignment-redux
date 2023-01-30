import { getContent } from "../../actions/productActions"

const loadProductData =()=>{
    return async (dispatch, getState)=>{
        const res =await fetch('products.json')
        const data =await res.json()

        if(data.length){
            dispatch(getContent(data))
        }
    }
}

export default loadProductData