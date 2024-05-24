import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import BuyerCartegory from "../../components/BuyerCartegory/BuyerCartegory";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import { OrderSuccessPageWrapper, OrderSuccessPageTitle, OrderSuccessPageContents, DeliveryInfoTitle, OrderSuccessMessage, OrderDate } from "./OrderSuccessPageStyle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { DeliveryInfoWrapper, DeliveryInfoInner, DeliveryReceiver, DeliveryReceiverAdress, OrderPrice, PaymentMethod } from "./OrderSuccessPageStyle";

export default function BuyerOrderSuccess() {
  const { token } = useContext(AuthContext);

  const [RecentOrderInfo, setRecentOrderInfo] = useState([]);
  const [RecentOrderDate, setRecentOrderDate] = useState([]);

  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        const instance = axios.create({
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        const res = await instance.get(`https://openmarket.weniv.co.kr/order/`);
        const data = await res.data;
        const OrderInfo = data.results.slice(0, 1);
        const OrderDate = OrderInfo[0].created_at.split("T")[0];
        setRecentOrderInfo(OrderInfo[0]);
        setRecentOrderDate(OrderDate);
      } catch (error) {
        console.log(error);
      }
    };

    getOrderHistory();
  }, []);

  return (
    <>
      <BuyerHeader />
      <BuyerCartegory />
      <OrderSuccessPageWrapper>
        <OrderSuccessPageTitle>Order Result</OrderSuccessPageTitle>
        <OrderSuccessPageContents>
          <OrderSuccessMessage>주문이 완료되었습니다!</OrderSuccessMessage>
          <OrderDate>
            <span>주문 일자 : </span> {RecentOrderDate}
          </OrderDate>
        </OrderSuccessPageContents>
        <DeliveryInfoWrapper>
          <DeliveryInfoTitle>배송정보</DeliveryInfoTitle>
          <DeliveryInfoInner>
            <DeliveryReceiver>
              <span>받는 분</span>
              <span>
                {RecentOrderInfo.receiver} / {RecentOrderInfo.receiver_phone_number}
              </span>
            </DeliveryReceiver>
            <DeliveryReceiverAdress>
              <span>배송지</span> <span>{RecentOrderInfo.address}</span>
            </DeliveryReceiverAdress>
            <OrderPrice>
              <span>결제 금액</span> <span>{RecentOrderInfo.total_price}</span>
            </OrderPrice>
            <PaymentMethod>
              <span>결제 수단</span> <span>{RecentOrderInfo.payment_method}</span>
            </PaymentMethod>
          </DeliveryInfoInner>
        </DeliveryInfoWrapper>
      </OrderSuccessPageWrapper>
      <BuyerFooter />
    </>
  );
}
