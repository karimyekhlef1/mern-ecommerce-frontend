import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loading from '../component/Loading';
import Error from '../component/Error';

function Home() {
  const baseUrl = useSelector((state) => state.Slice.baseUrl);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({ value: false, msg: null });
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/product/all`);
      setProducts(response.data.data);
    } catch (error) {
      setError({ value: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    fetchProducts();
  }, [fetchProducts]);

  const handleOrder = (productId) => {
  };

  return (
    <div className="w-full h-screen">
      <h1>Products:</h1>
      {isLoading ? (
        <Loading />
      ) : error.value ? (
        <Error msg={error.msg} />
      ) : (
        <div className="flex flex-grow">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="bg-gray-200 rounded-xl border border-white w-1/4"
                key={product._id}
              >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div>
                  <button
                    className="bg-blue-500"
                    onClick={() => handleOrder(product._id)}
                  >
                    Order Now
                  </button>
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
