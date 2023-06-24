import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);


  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.9:8080/api/product/all', {

        });
        console.log(response)
        setProducts(response.data);
      } catch (error) {
        if (!axios.isCancel(error)) {

        }
      }
    };

    fetchProducts();
  }
  )
  // console.log(products)
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

