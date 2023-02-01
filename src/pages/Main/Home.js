import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import HomeProductCart from '../../component/ProductCart/HomeProductCart';
import loadProductData from '../../redux/thunk/product/fetchProductData';



const Home = () => {
 const dispatch= useDispatch()
 const products = useSelector((state)=> state.products)

    

    useEffect(()=>{
       dispatch(loadProductData())
    },[dispatch])
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5 py-5'>
             {
                products?.map((product,i) => <HomeProductCart key={i} product={product} />)
             }
        </div>
    );
};

export default Home;