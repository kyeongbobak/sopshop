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
  OrderItemInfoDetails,
  OrderItemInfoImage,
  OrderItemInfoBrandName,
  OrderItemInfoName,
  OrderItemDiscount,
  OrderItemDelivery,
  OrderItemInfoPrice,
  OrderItemQuantity,
  OrderTotalCost,
  DeliveryInfoWrapper,
  DeliveryInfoTitle,
  OrderInfoFormTitle,
  OrderInfoForm,
  OrderCustomerName,
  OrderCustomerPhoneNumber,
  OrderCustomerEmail,
  DeliveryInfoForm,
  DeliveryReceiverName,
  DeliveryReceiverPhoneNumber,
  DeliveryReceiverAdress,
  ZipCodeInput,
  ZipCodeSearchButton,
  RoadAdressInput,
  DeliveryMessage,
  PaymentWrapper,
  PaymentOptionInner,
  PaymentOptionTitle,
  PaymentOption,
  PaymentFinalInfo,
  PaymentFinalInfoTitle,
  PaymentFinalInfoInner,
  ProductPriceWrapper,
  ProductPrice,
  DiscounPricePriceWrapper,
  DiscounPrice,
  DeliveryPriceWrapper,
  DeliveryPrice,
  PaymentPriceWrapper,
  PaymentPrice,
} from "./BuyerOrderPageStyle";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import Button from "../../components/Button/Button";

export default function BuyerOrderPage() {
  const [orderList, setOrderList] = useState([]);
  const [orderProductInfo, setOrderProductInfos] = useState([]);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);
  const { token } = useContext(AuthContext);
  const { buyerName, setBuyerName } = useState("");

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
                        <OrderItemInfoDetails>
                          <OrderItemInfoBrandName>{orderProductInfo[i].store_name}</OrderItemInfoBrandName>
                          <OrderItemInfoName>{orderProductInfo[i].product_name}</OrderItemInfoName>
                          <OrderItemQuantity>Qty : {list.quantity}개</OrderItemQuantity>
                        </OrderItemInfoDetails>
                      </OrderItemInfoInner>
                      <OrderItemDiscount>-</OrderItemDiscount>
                      <OrderItemDelivery>무료배송</OrderItemDelivery>
                      <OrderItemInfoPrice>{orderProductInfo[i].price * list.quantity}</OrderItemInfoPrice>
                    </>
                  )}
                </OrderItemInfo>
              </OrderItem>
            </OrderItemWrapper>
          ))}

          <OrderTotalCost>
            <p>총 주문금액</p>
            <span>{orderTotalPrice.toLocaleString()}</span>
          </OrderTotalCost>

          <DeliveryInfoWrapper>
            <DeliveryInfoTitle>배송정보</DeliveryInfoTitle>
            <OrderInfoFormTitle>주문자 정보</OrderInfoFormTitle>
            <OrderInfoForm>
              <OrderCustomerName>
                <label htmlFor="name">이름</label>
                <input type="text" name="" id="name" onChange={(e) => e.target.value} value={buyerName} />
              </OrderCustomerName>
              <OrderCustomerPhoneNumber>
                <label htmlFor="phoneNumber">휴대폰</label>
                <input type="text" name="" id="phoneNumberPrefix" />
                <span>-</span>
                <input type="text" name="" id="phoneNumberMid" />
                <span>-</span>
                <input type="text" name="" id="phoneNumberEnd" />
              </OrderCustomerPhoneNumber>
              <OrderCustomerEmail>
                <label htmlFor="">이메일</label>
                <input type="text" name="" id="" />
              </OrderCustomerEmail>
            </OrderInfoForm>
            <OrderInfoFormTitle>배송지 정보</OrderInfoFormTitle>
            <DeliveryInfoForm>
              <DeliveryReceiverName>
                <label htmlFor="">수령인</label>
                <input type="text" />
              </DeliveryReceiverName>
              <DeliveryReceiverPhoneNumber>
                <label htmlFor="">휴대폰</label>
                <input type="text" name="" id="phoneNumberPrefix" />
                <span>-</span>
                <input type="text" name="" id="phoneNumberMid" />
                <span>-</span>
                <input type="text" name="" id="phoneNumberEnd" />
              </DeliveryReceiverPhoneNumber>
              <DeliveryReceiverAdress>
                <label htmlFor="">배송주소</label>
                <ZipCodeInput></ZipCodeInput>
                <ZipCodeSearchButton type="button" value="우편번호 조회"></ZipCodeSearchButton>
                <RoadAdressInput></RoadAdressInput>
              </DeliveryReceiverAdress>
              <DeliveryMessage>
                <label htmlFor="">배송 메세지</label>
                <input type="text" />
              </DeliveryMessage>
            </DeliveryInfoForm>
            <PaymentWrapper>
              <div>
                <PaymentOptionTitle>결제수단</PaymentOptionTitle>
                <PaymentOptionInner>
                  <PaymentOption>
                    <input type="radio" />
                    <span>신용카드 결제</span>
                    <input type="radio" />
                    <span>무통장 입금</span>
                    <input type="radio" />
                    <span>휴대폰 결제</span>
                    <input type="radio" />
                    <span>네이버 페이</span>
                    <input type="radio" />
                    <span>카카오 페이</span>
                  </PaymentOption>
                </PaymentOptionInner>
              </div>
              <PaymentFinalInfo>
                <PaymentFinalInfoTitle>최종 결제 정보</PaymentFinalInfoTitle>
                <PaymentFinalInfoInner>
                  <ProductPriceWrapper>
                    <p>- 상품금액</p>
                    <ProductPrice>{orderTotalPrice.toLocaleString()} 원</ProductPrice>
                  </ProductPriceWrapper>
                  <DiscounPricePriceWrapper>
                    <p>- 할인금액</p>
                    <DiscounPrice>0 원</DiscounPrice>
                  </DiscounPricePriceWrapper>
                  <DeliveryPriceWrapper>
                    <p>- 배송비</p>
                    <DeliveryPrice>0 원</DeliveryPrice>
                  </DeliveryPriceWrapper>
                  <PaymentPriceWrapper>
                    <p>- 결제금액</p>
                    <PaymentPrice>{orderTotalPrice.toLocaleString()} 원</PaymentPrice>
                  </PaymentPriceWrapper>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <span>주문 내용을 확인하였으며, 정보제공에 동의합니다.</span>
                  </div>
                  <Button>결제하기</Button>
                </PaymentFinalInfoInner>
              </PaymentFinalInfo>
            </PaymentWrapper>
          </DeliveryInfoWrapper>
        </OrderPageContents>
      </OrderPageWrapper>
    </>
  );
}
