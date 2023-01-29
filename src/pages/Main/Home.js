import React, { useEffect, useState } from 'react';
import ProductCard from '../../component/ProductCart/ProductCard';



const Home = () => {
 
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5 py-5'>
             {
                products.map((product,i) => <ProductCard key={i} product={product} />)
             }
        </div>
    );
};

export default Home;