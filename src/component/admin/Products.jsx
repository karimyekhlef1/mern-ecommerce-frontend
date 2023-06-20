import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.3:8080/api/product/all');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    console.log('Response has changed:', products);
  }, [products]);

  console.log(products)
  return (
    <div>
      <h1>Products:</h1>
      <div className='flex flex-col w-full p-2'>
        {products?.data?.map(product =>  
          <ProductCard  product ={product}
        />)}
      </div>
    </div>
  );
}

export default Products;
