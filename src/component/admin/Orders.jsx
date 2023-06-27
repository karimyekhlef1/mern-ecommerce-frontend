import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

export default function Orders() {
  const baseUrl = useSelector((state) => state.Slice.baseUrl);
  const [Orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/order/get`, {
          headers: {
            token: token,
          },
        });
        console.log(response);
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full flex  flex-col  h-72">
      {Orders.map((order) => (
        <OrderCard order={order} />
      ))}
    </div>
  );
}
