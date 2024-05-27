import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import BuyerCartegory from "../../components/BuyerCartegory/BuyerCartegory";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
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

export default function BuyerMyPage() {
  const { token } = useContext(AuthContext);
  const [orderHistories, setOrderHistories] = useState([]);
  const [orderProductInfos, setOrderProductInfos] = useState([]);
  const [orderProductQuantyties, setOrderProductQuantyties] = useState([]);

  const getOrderProductInfo = useCallback(
    async (productId) => {
      try {
        const instance = axios.create({
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        const res = await instance.get(`https://openmarket.weniv.co.kr/products/${productId}/`);
        return res.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    [token]
  );

  const getOrderHistory = useCallback(async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = await instance.get(`https://openmarket.weniv.co.kr/order/`);
      const data = res.data;
      setOrderHistories(data.results.slice(0, 3));

      const orderHistoryInfos = data.results;
      const orderProductIds = orderHistoryInfos.map((i) => i.order_items).flat();
      const orderProductQauntyties = orderHistoryInfos.map((i) => i.order_quantity).flat();
      setOrderProductQuantyties(orderProductQauntyties);

      const productInfoPromises = await Promise.all(orderProductIds.map((productId) => getOrderProductInfo(productId)));
      setOrderProductInfos(productInfoPromises.slice(0, 3));
    } catch (error) {
      console.log("error", error);
    }
  }, [token, getOrderProductInfo]);

  useEffect(() => {
    if (token) {
      getOrderHistory();
    }
  }, [token, getOrderHistory]);

  return (
    <>
      <BuyerHeader />
      <BuyerCartegory />
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
              <OrderRecordsItem key={order.created_at}>
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
                    <ProductQauntity>{orderProductQuantyties[i]}</ProductQauntity>
                    <ProductPrice>{orderProductInfos[i].price.toLocaleString()}</ProductPrice>
                    <DeliveryStatus>{order.delivery_status === "COMPLETE_PAYMENT" && "결제완료"}</DeliveryStatus>
                    <ShippingOption>{orderProductInfos[i].shipping_fee === 0 ? "무료배송" : "기본배송"}</ShippingOption>
                  </>
                )}
              </OrderRecordsItem>
            ))}
          </OrderRecordsWrapper>
        </BuyerMyPageContents>
        <PrevButtonWrapper to={`/shoppingCart`}>
          <PrevButton>Prev</PrevButton>
        </PrevButtonWrapper>
      </BuyerMyPageWrapper>
      <BuyerFooter />
    </>
  );
}
