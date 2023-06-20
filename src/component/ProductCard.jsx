import React from 'react'
import axios from 'axios';

export default function ProductCard(props) {
   const  product = props.product
   const deletedProduct= async (productId) => {
    console.log(productId)
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from wherever it is stored

    const repons=  await axios.delete(`http://192.168.1.3:8080/api/product/delete/${productId}`, {
        headers: {
          token: token,
        },
      });
    } catch (error) {
      // Handle the error
      console.error(error);
    }

   }
  return (
    <div>
          <div className='bg-gray-300 w-full m-2 p-2 rounded-lg'>
          <div className='flex justify-between items-center '>
           <div key={product._id}>
            <h3>{product.titel}</h3>
            <p>{product.description}</p>
          </div>
          <div >
            <button className='bg-green-500 w-16 mx-2 rounded-lg'>
              Edit
            </button>
            <button className='bg-red-500 w-16 mx-2  rounded-lg' onClick={()=>deletedProduct(product._id)}>
              Delet
            </button>
            </div>
          </div>
     </div>
    </div>
  )
}
