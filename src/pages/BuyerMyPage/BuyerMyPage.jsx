import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import {
  BuyerMyPageWrapper,
  BuyerMyPageTitle,
  BuyerMyPageHeader,
  BuyerMyPageContents,
  OrderRecordsWrapper,
  OrderNumber,
  OrderRecordsItem,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductQauntity,
  DeliveryStatus,
  ShippingOption,
  PrevButtonWrapper,
  PrevButton,
} from "./BuyerMyPageStyle";
import { useContext, useEffect, useState } from "react";

export default function BuyerMyPage() {
  const { token, isLoggedIn } = useContext(AuthContext);
  const [orderHistories, setOrderHistories] = useState([]);
  const [orderProductInfos, setOrderProductInfos] = useState([]);
  const [orderProductQuantyties, setOrderProductQuantyties] = useState([]);

  console.log(orderHistories);

  const getOrderHistory = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = await instance.get(`https://openmarket.weniv.co.kr/order/`);
      const data = await res.data;
      console.log(data.results);
      setOrderHistories(data.results.slice(0, 3));

      const orderHistoryInfos = data.results;

      const orderProductIds = orderHistoryInfos.map((i) => i.order_items);
      const mergedProductIds = [].concat(...orderProductIds);
      const productInfos = mergedProductIds.map((productId) => getOrderProductInfo(productId));

      const orderProductQauntyties = orderHistoryInfos.map((i) => i.order_quantity);
      const mergedProductQauntyties = [].concat(...orderProductQauntyties);
      setOrderProductQuantyties(mergedProductQauntyties);

      const productInfoPromises = (await Promise.all(productInfos)).slice(0, 3);

      setOrderProductInfos(productInfoPromises);

      console.log(productInfoPromises);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderProductInfo = async (productId) => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const res = await instance.get(`https://openmarket.weniv.co.kr/products/${productId}/`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, [token, isLoggedIn]);

  return (
    <>
      <BuyerHeader></BuyerHeader>
      <BuyerMyPageWrapper>
        <BuyerMyPageTitle>Order Records</BuyerMyPageTitle>
        <BuyerMyPageHeader>
          <li>주문일자</li>
          <li>이미지</li>
          <li>상품정보</li>
          <li>수량</li>
          <li>상품구매금액</li>
          <li>주문처리상태</li>
          <li>배송구분</li>
        </BuyerMyPageHeader>
        <BuyerMyPageContents>
          <OrderRecordsWrapper>
            {orderHistories.map((order, i) => (
              <>
                <OrderRecordsItem key={order}>
                  <OrderNumber>{order.created_at.slice(0, order.created_at.indexOf("T"))}</OrderNumber>
                  {orderProductInfos[i] && (
                    <>
                      <ProductImage>
                        <img src={orderProductInfos[i].image} alt="" />
                      </ProductImage>
                      <ProductInfo>
                        <p>{orderProductInfos[i].store_name}</p>
                        <p>{orderProductInfos[i].product_name}</p>
                      </ProductInfo>
                      {orderProductQuantyties[i] && <ProductQauntity>{orderProductQuantyties[i]}</ProductQauntity>}
                      <ProductPrice>{orderProductInfos[i].price}</ProductPrice>
                      <DeliveryStatus>{order.delivery_status === "COMPLETE_PAYMENT" && "결제완료"}</DeliveryStatus>
                      <ShippingOption>{orderProductInfos[i].shipping_fee === 0 ? "무료배송" : "기본배송"}</ShippingOption>
                    </>
                  )}
                </OrderRecordsItem>
              </>
            ))}
          </OrderRecordsWrapper>
        </BuyerMyPageContents>
        <PrevButtonWrapper to={`/shoppingCart`}>
          <PrevButton>Prev</PrevButton>
        </PrevButtonWrapper>
      </BuyerMyPageWrapper>
    </>
  );
}
