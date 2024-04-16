import { useContext, useEffect, useState } from "react";
import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import { OrderPageWrapper, OrderPageTitle, OrderPageContents, OrderItemWrapper, OrderItemImage, OrderItemDiscount, OrderItemDelivery, OrderItemPrice } from "./BuyerOrderPageStyle";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

export default function BuyerOrderPage() {
  return (
    <>
      <BuyerHeader />
      <OrderPageWrapper>
        <OrderPageTitle>Order</OrderPageTitle>
        <ProductInfoHeader type="order"></ProductInfoHeader>
        <OrderPageContents>
          {orderList.map((list, i) => (
            <OrderItemWrapper>
              <OrderItemImage></OrderItemImage>
              <OrderItemDiscount></OrderItemDiscount>
              <OrderItemDelivery></OrderItemDelivery>
              <OrderItemPrice></OrderItemPrice>
            </OrderItemWrapper>
          ))}
        </OrderPageContents>
      </OrderPageWrapper>
    </>
  );
}
