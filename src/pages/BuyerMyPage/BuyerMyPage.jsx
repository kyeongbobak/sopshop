import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import Button from "../../components/Button/Button";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import {
  BuyerMyPageWrapper,
  BuyerMyPageTitle,
  BuyerMyPageHeader,
  BuyerMyPageContents,
  OrderRecordsWrapper,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductQauntity,
  PointsEarned,
  ShippingOption,
  ShippingFee,
  OrderRecordsImage,
  ProductTotalPrice,
} from "./BuyerMyPageStyle";
import { useContext, useEffect, useState } from "react";

export default function BuyerMyPage() {
  const { token, isLoggedIn } = useContext(AuthContext);
  const [orderProductInfo, setOrderProductInfo] = useState("");

  console.log(orderProductInfo);

  const getOrderProductInfo = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      // const res = await instance.get(`https://openmarket.weniv.co.kr/products/${}/`)
    } catch (error) {
      console.log("error");
    }
  };

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
      <BuyerMyPageWrapper>
        <BuyerMyPageTitle>Order Records</BuyerMyPageTitle>
        <BuyerMyPageHeader>
          <li>이미지</li>
          <li>상품정보</li>
          <li>판매가</li>
          <li>수량</li>
          <li>적립금</li>
          <li>배송구분</li>
          <li>배송비</li>
          <li>합계</li>
        </BuyerMyPageHeader>
        <BuyerMyPageContents>
          <OrderRecordsWrapper>
            <ProductImage>
              <img src="" alt="" />
            </ProductImage>
            <ProductInfo></ProductInfo>
            <ProductPrice></ProductPrice>
            <ProductQauntity></ProductQauntity>
            <PointsEarned></PointsEarned>
            <ShippingOption></ShippingOption>
            <ShippingFee></ShippingFee>
            <OrderRecordsImage>
              <img src="" alt="" />
            </OrderRecordsImage>
            <ProductTotalPrice></ProductTotalPrice>
          </OrderRecordsWrapper>
        </BuyerMyPageContents>
        <Button MsButton>Prev</Button>
      </BuyerMyPageWrapper>
    </>
  );
}
