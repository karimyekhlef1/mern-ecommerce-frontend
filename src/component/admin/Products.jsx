import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
 import Error from '../Error';
import Loading from '../Loading';
import ProductCard from '../ProductCard';
function Products() {
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
  }, []);

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
        <div className="flex flex-col ">
          {products.length > 0 ? (
            products.map((product) => (  <ProductCard product={product} /> ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
