import React from 'react';
import { Link } from 'react-router-dom';

const HomeProductCart = ({product}) => {
  const {_id,model,rating, image}=product

    return (
        <div
      className='shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900'
      key={_id}
    >  
      <div className='h-52 w-52 mx-auto'>
        <img src={image} alt={model} />
      </div>
     <div className='h-32'>
      <h1 className='font-bold text-center'>{model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {rating}</p>
      
      <div className='flex gap-2 mt-5 absolute bottom-0 right-0 p-3'>
        <Link to={`/home/${_id}`}>
        <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          view details
        </button>
        </Link>
      </div>
      </div>
    </div>
    );
};

export default HomeProductCart;