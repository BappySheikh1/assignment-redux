import { getContent } from "../../actions/productActions"

const loadProductData =()=>{
    return async (dispatch, getState)=>{
        const res =await fetch('http://localhost:5000/products')
        const data =await res.json()
        // console.log(data);
        if(data.length){
            dispatch(getContent(data))
        }
    }
}

export default loadProductData