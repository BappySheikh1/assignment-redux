import React from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { updateProductData } from '../../redux/thunk/product/UpdateProductData';

const UpdateProduct = () => {
    const product =useLoaderData()
   
    const {_id}=product
    const dispatch =useDispatch()

    const handleAddService=event=>{
        event.preventDefault();
        const form =event.target

        const model =form.model.value
        const brand =form.brand.value;
        const price= form.price.value ;
       
    
        const product = {
          model: model,
          price : price,
          brand: brand,
          
        };

    
      dispatch(updateProductData({product,_id}))
    } 

    return (
        <div className="grid place-items-center my-[20vh]">
             <form onSubmit={handleAddService} >

             <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <div>
                    <label htmlFor="" className='text-lg  ml-2 '>Model</label>
                    <input type="text" name='model' defaultValue={product.model} className="input input-bordered w-full " />
                    </div>
                    
                    <div>
                    <label htmlFor="" className='text-lg  ml-2 '>Image</label>
                    <input type="text" name='image' defaultValue={product.image}  className="input input-bordered w-full " />
                    </div>
                    
                    <div>
                     <label htmlFor=""  className='text-lg  ml-2 '>Brand</label>
                     <select name='brand' defaultValue={product.brand} className="select select-bordered w-full max-w-xs">
  
                      <option>AMD</option>
                      <option>Intel</option>
                    </select>
                    </div>
                    
                    <div>
                    <label htmlFor="" className='text-lg  ml-2 '>Price</label>
                    <input type="text" name='price' defaultValue={product.price} className="input input-bordered w-full "  />
                    </div>
               </div>
                 
                  <div className='my-6'>
                     <label htmlFor="" className='text-lg  ml-2 '>Availability</label>
                  
                    <div className='flex items-center mt-4'>
                    <div className='flex items-center'>
                    <label htmlFor="" className='text-lg  ml-2 '>Available</label>
                    <input type="radio" name="radio-1" className="radio mx-2" value='' />
                    </div>
                    
                    <div className='flex items-center'>
                    <label htmlFor="" className='text-lg  ml-2 '>Stock out</label>
                    <input type="radio" name="radio-1" className="radio mx-2" value='' />
                    </div>
                    </div>
                
                  </div>
                
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        

                      <div>
                      <label htmlFor="" className='text-lg  ml-2 '>Key Feature 1</label>
                      <input type="text" name='key1' defaultValue={product.keyFeature}  className="input input-bordered w-full " />
                      </div>
                      
                      <div>
                      <label htmlFor="" className='text-lg  ml-2 '>Key Feature 2</label>
                      <input type="text" name='key2' defaultValue={product.keyFeature[1]}  className="input input-bordered w-full " />
                      </div>
                      
                      <div>
                       <label htmlFor="" className='text-lg  ml-2 '>Key Feature 3</label>
                      <input type="text" name='key3' defaultValue={product.keyFeature[2]} className="input input-bordered w-full " required/>
                      </div>
                      
                      <div>
                      <label htmlFor="" className='text-lg  ml-2 '>Key Feature 4</label>
                      <input type="text" name='key4' defaultValue={product.keyFeature[3]} className="input input-bordered w-full "  />
                      </div>
                      </div>
                 
                      <input type="submit" className='btn mt-5 text-white bg-blue-600 border-none hover:bg-blue-700' value='Submit'  />

             
       
       </form>
        </div>
    );
};

export default UpdateProduct;