import React ,{ useEffect, useState} from 'react' 
import axios from 'axios';
export default function Orders() {
  const [Orders , setOrders] = useState([])
const token = localStorage.getItem('token')
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.9:8080/api/order/get' , {
          headers: {
            token: token,
          },
        });
        console.log(response)
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);



  return (
    <div className='w-1/2  h-72 bg-red-500'>
      {
        Orders.map((order)=>(
        <div className='bg-gray-200'>
          {order.nameUser}
        </div>))
      }
      
    </div>
  )
}
