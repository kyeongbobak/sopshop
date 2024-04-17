import { useContext, useEffect, useState } from "react";
import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import {
  OrderPageWrapper,
  OrderItem,
  OrderPageTitle,
  OrderPageContents,
  OrderItemWrapper,
  OrderItemInfo,
  OrderItemInfoInner,
  OrderItemInfoImage,
  OrderItemInfoBrandName,
  OrderItemDiscount,
  OrderItemDelivery,
  OrderItemInfoPrice,
  OrderItemQuantity,
} from "./BuyerOrderPageStyle";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

export default function BuyerOrderPage() {
  const [orderList, setOrderList] = useState([]);
  const [orderProductInfo, setOrderProductInfos] = useState([]);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);
  const { token } = useContext(AuthContext);

  const getOrderList = async () => {
    try {
      const instance = axios.create({
        headers: { Authorization: `JWT ${token}` },
      });

      const res = await instance.get("https://openmarket.weniv.co.kr/cart/");
      const orderItem = await res.data.results;
      console.log(orderItem);
      setOrderList(orderItem);

      const prouductInfos = orderItem.map((item) => getProductInfo(item.product_id));

      const productInfoPromises = await Promise.all(prouductInfos);

      Promise.all(productInfoPromises).then((product) => {
        const productPrice = product.map((v, i) => v.price * orderItem[i].quantity);
        console.log(productPrice);

        const totalPrice = productPrice.reduce((acc, cur) => acc + cur, 0);
        setOrderTotalPrice(totalPrice);
        console.log(totalPrice);
      });

      setOrderProductInfos(productInfoPromises);

      console.log(productInfoPromises);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductInfo = async (id) => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = await instance.get(`https://openmarket.weniv.co.kr/products/${id}`);
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderList();
  }, [token]);

  return (
    <>
      <BuyerHeader />
      <OrderPageWrapper>
        <OrderPageTitle>Order</OrderPageTitle>
        <ProductInfoHeader type="order"></ProductInfoHeader>
        <OrderPageContents>
          {orderList.map((list, i) => (
            <OrderItemWrapper>
              <OrderItem key={list.cart_item_id}>
                <OrderItemInfo>
                  {orderProductInfo[i] && (
                    <>
                      <OrderItemInfoInner key={orderProductInfo[i].product_id}>
                        <OrderItemInfoImage>
                          <img src={orderProductInfo[i].image} alt="" />
                        </OrderItemInfoImage>
                        <OrderItemInfoBrandName>{orderProductInfo[i].store_name}</OrderItemInfoBrandName>
                        <OrderItemDiscount>-</OrderItemDiscount>
                        <OrderItemDelivery>무료배송</OrderItemDelivery>
                        <OrderItemInfoPrice>{orderProductInfo[i].price * list.quantity}</OrderItemInfoPrice>
                      </OrderItemInfoInner>
                    </>
                  )}
                  <OrderItemQuantity>수량 {list.quantity} 개</OrderItemQuantity>
                </OrderItemInfo>
              </OrderItem>
            </OrderItemWrapper>
          ))}
        </OrderPageContents>
      </OrderPageWrapper>
    </>
  );
}
