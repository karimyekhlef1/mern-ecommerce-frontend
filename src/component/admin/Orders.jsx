import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import Error from "../Error";
import Loading from "../Loading";
import DialogConfirmation from "../dialogs/DialogConfirmation";

export default function Orders() {
  const baseUrl = useSelector((state) => state.Slice.baseUrl);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState({ value: null, msg: null })
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${baseUrl}/order/get`, {
        headers: {
          token: token,
        },
      });
      setOrders(response.data);
    } catch (error) {
      setError({ value: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [baseUrl, token]);

  return (
    <div className="w-full flex flex-col h-72">
      {isLoading ? (
        <Loading />
      ) : error.value ? (
        <Error msg={error.msg} />
      ) : orders.data.length > 0 ? (
        orders.data.map((order) => <OrderCard order={order} key={order.id} />)
      ) : (
        <Error msg={orders.msg} />
      )}
    </div>
  );
}
