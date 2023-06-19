import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cancelToken = useRef(null);

  useEffect(() => {
    cancelToken.current = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://192.168.1.3:8080/api/product/all', {
          cancelToken: cancelToken.current.token
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      cancelToken.current.cancel('Component unmounted');
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(products.data)

  return (
    <div className="w-full h-screen bg-black text-white">
      <h1>Products:</h1>
      <ul>
        {products?.data.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

