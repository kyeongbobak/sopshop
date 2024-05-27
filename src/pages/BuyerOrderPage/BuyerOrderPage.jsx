import { useContext, useEffect, useState, useCallback } from "react";
import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import BuyerCartegory from "../../components/BuyerCartegory/BuyerCartegory";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
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
  AdditionalAdressInput,
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
import AdressSearchModal from "../../components/Modal/AdressSearchModal/AdressSearchModal";
import { useNavigate } from "react-router-dom";

export default function BuyerOrderPage() {
  const { token } = useContext(AuthContext);
  const [orderList, setOrderList] = useState([]);
  const [orderProductInfo, setOrderProductInfos] = useState([]);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);
  const [buyerName, setBuyerName] = useState("");
  const [prefixNumber, setPreFixNumber] = useState("");
  const [midNumber, setMidNumber] = useState("");
  const [endNumber, setEndNumber] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [receiver, setReceiver] = useState("");
  const [zipSearch, setZipSearch] = useState(false);
  const [zoneCode, setZonCode] = useState("");
  const [roadAdress, setRoadAdress] = useState("");
  const [additionalAdress, setAdditionalAdress] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [receiverPrefixNumber, setReceiverPreFixNumber] = useState("");
  const [receiverMidNumber, setReceiverMidNumber] = useState("");
  const [receiverEndNumber, setReceiverEndNumber] = useState("");
  const [selectedPaymentOption, setSeletedPaymentOption] = useState("");
  const [fullproductId, setFullProductId] = useState([]);
  const [fullQuantity, setFullQuantity] = useState([]);
  const [totalShippingFee, setTotalShippingFee] = useState(0);

  const navigate = useNavigate();

  const getProductInfo = useCallback(
    async (id) => {
      try {
        const instance = axios.create({
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        const res = await instance.get(`https://openmarket.weniv.co.kr/products/${id}`);
        const data = await res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    [token]
  );

  const getOrderList = useCallback(async () => {
    try {
      const instance = axios.create({
        headers: { Authorization: `JWT ${token}` },
      });

      const res = await instance.get("https://openmarket.weniv.co.kr/cart/");
      const orderItem = await res.data.results;

      setOrderList(orderItem);

      console.log(orderItem);

      const AllProductId = orderItem.map((i) => i.product_id).join();
      const AllQuantity = orderItem.map((i) => i.quantity).join();
      setFullProductId(AllProductId);

      setFullQuantity(AllQuantity);

      const prouductInfos = orderItem.map((item) => getProductInfo(item.product_id));

      const productInfoPromises = await Promise.all(prouductInfos);

      Promise.all(productInfoPromises).then((product) => {
        const productPrice = product.map((v, i) => v.price * orderItem[i].quantity);
        const productShippingFee = product.map((i) => i.shipping_fee).reduce((acc, cur) => acc + cur, 0);
        const totalPrice = productPrice.reduce((acc, cur) => acc + cur, 0);
        setOrderTotalPrice(totalPrice + productShippingFee);
        setTotalShippingFee(productShippingFee);
      });

      console.log(productInfoPromises);

      setOrderProductInfos(productInfoPromises);
    } catch (error) {
      console.log(error);
    }
  }, [token, getProductInfo]);

  const getAdress = (data) => {
    setZonCode(data.zonecode);
    setRoadAdress(data.roadAddress);
  };

  const handleSelectedOption = (option) => {
    setSeletedPaymentOption(option);
  };

  const submitPayment = async (e) => {
    e.preventDefault();

    const fullAddress = zoneCode.concat(roadAdress).concat(additionalAdress);
    const PhoneNumber = receiverPrefixNumber.concat(receiverMidNumber).concat(receiverEndNumber);
    console.log(PhoneNumber);

    const directOrder = {
      product_id: fullproductId,
      quantity: fullQuantity,
      order_kind: "direct_order",
      total_price: orderTotalPrice,
      receiver: receiver,
      receiver_phone_number: PhoneNumber,
      address: fullAddress,
      address_message: deliveryMessage,
      payment_method: selectedPaymentOption,
    };

    const cartOrder = {
      total_price: orderTotalPrice,
      order_kind: "cart_order",
      receiver: receiver,
      receiver_phone_number: PhoneNumber,
      address: fullAddress,
      address_message: deliveryMessage,
      payment_method: selectedPaymentOption,
    };

    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = orderList.length === 1 ? await instance.post("https://openmarket.weniv.co.kr/order/", directOrder) : await instance.post("https://openmarket.weniv.co.kr/order/", cartOrder);
      const data = await res.data;
      console.log(data);

      if (res.status >= 200 && res.status < 300) {
        navigate(`/orderSuccess`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderList();
  }, [token, getOrderList]);

  return (
    <>
      <BuyerHeader />
      <BuyerCartegory />
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
                      <OrderItemDelivery>{orderProductInfo[i].shipping_fee.toLocaleString()}</OrderItemDelivery>
                      <OrderItemInfoPrice>{(parseInt(orderProductInfo[i].price) * parseInt(list.quantity)).toLocaleString()}</OrderItemInfoPrice>
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
                <input type="text" name="" id="name" onChange={(e) => setBuyerName(e.target.value)} value={buyerName} />
              </OrderCustomerName>
              <OrderCustomerPhoneNumber>
                <label htmlFor="phoneNumber">휴대폰</label>
                <input type="text" name="" id="phoneNumberPrefix" value={prefixNumber} onChange={(e) => setPreFixNumber(e.target.value)} />
                <span>-</span>
                <input type="text" name="" id="phoneNumberMid" value={midNumber} onChange={(e) => setMidNumber(e.target.value)} />
                <span>-</span>
                <input type="text" name="" id="phoneNumberEnd" value={endNumber} onChange={(e) => setEndNumber(e.target.value)} />
              </OrderCustomerPhoneNumber>
              <OrderCustomerEmail>
                <label htmlFor="email">이메일</label>
                <input type="email" name="" id="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
              </OrderCustomerEmail>
            </OrderInfoForm>

            <OrderInfoFormTitle>배송지 정보</OrderInfoFormTitle>
            <DeliveryInfoForm onSubmit={submitPayment}>
              <DeliveryReceiverName>
                <label htmlFor="">수령인</label>
                <input type="text" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
              </DeliveryReceiverName>
              <DeliveryReceiverPhoneNumber>
                <label htmlFor="ReceiverPhoneNumber">휴대폰</label>
                <input type="text" name="" id="ReceiverPhoneNumberPrefix" value={receiverPrefixNumber} onChange={(e) => setReceiverPreFixNumber(e.target.value)} />
                <span>-</span>
                <input type="text" name="" id="ReceiverPhoneNumberMid" value={receiverMidNumber} onChange={(e) => setReceiverMidNumber(e.target.value)} />
                <span>-</span>
                <input type="text" name="" id="ReceiverPhoneNumberEnd" value={receiverEndNumber} onChange={(e) => setReceiverEndNumber(e.target.value)} />
              </DeliveryReceiverPhoneNumber>
              <DeliveryReceiverAdress>
                <label htmlFor="adress">배송주소</label>
                <ZipCodeInput type="text" id="adress" value={zoneCode}></ZipCodeInput>
                <ZipCodeSearchButton type="button" value="우편번호 조회" onClick={() => setZipSearch(true)}></ZipCodeSearchButton>
                {zipSearch && <AdressSearchModal onComplete={getAdress}></AdressSearchModal>}
                <RoadAdressInput type="text" id="adress" value={roadAdress}></RoadAdressInput>
                <AdditionalAdressInput type="text" id="additionalAdress" value={additionalAdress} onChange={(e) => setAdditionalAdress(e.target.value)}></AdditionalAdressInput>
              </DeliveryReceiverAdress>
              <DeliveryMessage>
                <label htmlFor="deliveryMessage">배송 메세지</label>
                <input type="text" id="deliveryMessage" value={deliveryMessage} onChange={(e) => setDeliveryMessage(e.target.value)} />
              </DeliveryMessage>

              <PaymentWrapper>
                <div>
                  <PaymentOptionTitle>결제수단</PaymentOptionTitle>
                  <PaymentOptionInner>
                    <PaymentOption>
                      <input type="radio" onClick={() => handleSelectedOption("CARD")} />
                      <span>신용카드 결제</span>
                      <input type="radio" onClick={() => handleSelectedOption("DEPOSIT")} />
                      <span>무통장 입금</span>
                      <input type="radio" onClick={() => handleSelectedOption("PHONE_PAYMENT")} />
                      <span>휴대폰 결제</span>
                      <input type="radio" onClick={() => handleSelectedOption("NAVERPAY")} />
                      <span>네이버 페이</span>
                      <input type="radio" onClick={() => handleSelectedOption("KAKAOPAY")} />
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
                      <DeliveryPrice>{totalShippingFee.toLocaleString()} 원</DeliveryPrice>
                    </DeliveryPriceWrapper>
                    <PaymentPriceWrapper>
                      <p>- 결제금액</p>
                      <PaymentPrice>{orderTotalPrice.toLocaleString()} 원</PaymentPrice>
                    </PaymentPriceWrapper>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span>주문 내용을 확인하였으며, 정보제공에 동의합니다.</span>
                    </div>
                    <Button type="submit">결제하기</Button>
                  </PaymentFinalInfoInner>
                </PaymentFinalInfo>
              </PaymentWrapper>
            </DeliveryInfoForm>
          </DeliveryInfoWrapper>
        </OrderPageContents>
      </OrderPageWrapper>
      <BuyerFooter />
    </>
  );
}
