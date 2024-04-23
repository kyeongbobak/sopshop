import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

import { useContext, useEffect, useState } from "react";

export default function BuyerMyPage() {
  const { token, isLoggedIn } = useContext(AuthContext);
  const [orderHistory, setOrderHistory] = useState("");

  const getOrderHistory = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = await instance.get(`https://openmarket.weniv.co.kr/order/`);
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, [token, isLoggedIn]);

  return (
    <>
      <BuyerHeader></BuyerHeader>
    </>
  );
}
