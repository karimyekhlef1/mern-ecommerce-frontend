import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

function Home() {
  const baseUrl = useSelector((state) => state.Slice.baseUrl);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  // const history = useHistory();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/all`);
        console.log(response.data)
        setProducts(response.data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  const handelOrder=(ProductId)=>{
    // history.push(`/OrderNow/${ProductId}`);



  }

  return (
    <div className="w-full h-screen ">
      <h1>Products:</h1>
      {error ? (
        <p>Error occurred while fetching products: {error.message}</p>
      ) : (
        <div className='flex flex-grow '>
          {products.length > 0 ? (
            products.map((product) => (
              <div  className='bg-gray-200 rounded-xl border border-white w-1/4'
               key={product._id}>
                <h3>{product.titel}</h3>
                <p>{product.description}</p>
                <div>
                 <button className='bg-blue-500' onClick={()=>handelOrder(product._id)} >Order Now</button>
                  </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;


