import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import DialogConfirmation from '../dialogs/DialogConfirmation';

export default function OrderCard(props) {
    const baseUrl = useSelector((state) => state.Slice.baseUrl);
    const order = props.order
    const token = localStorage.getItem('token')
     const handleDeleteOrder = async () => {
        try {
      const response = await axios.delete(`${baseUrl}/order/delet`, {
        headers: {
          token: token,
          orderId: order._id
        },
      });
          // Handle the successful deletion, such as showing a success message or refreshing the order list
          console.log('Order deleted successfully:', response.data);
        } catch (error) {
          // Handle the error, such as showing an error message or logging the error
          console.error('Error occurred while deleting the order:', error);
        }
      };
  return (
    <div className="bg-gray-200 rounded-lg border-white  m-5 flex justify-between">
    <div>
      <p>USER : </p>
      <div>
        <p>User name :{order.nameUser} </p>
        <p>phone User :{order.phoneUser} </p>
      </div>
    </div>
    <div>
      <p>PROUDACT :</p>
      <div>
        <p>Product Title : {order.product.titel}</p>
      </div>
    </div>
    <div>
      <button className=" bg-green-500 rounded-xl border border-white p-2">
        Accept
      </button>
      <button className="bg-red-500 rounded-xl border border-white p-2" onClick={()=>handleDeleteOrder(order._id)}>
        Delet              
      </button>
    </div>
    <DialogConfirmation />
  </div>
  )
}
