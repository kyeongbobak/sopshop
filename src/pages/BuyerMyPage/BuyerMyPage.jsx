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
  OrderRecordsItem,
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
  const [orderHistories, setOrderHistories] = useState([]);
  const [orderProductInfos, setOrderProductInfos] = useState([]);

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
      setOrderHistories(data.results);

      const orderHistoryInfos = data.results;

      const orderProductIds = orderHistoryInfos.map((i) => i.order_items);
      const mergedProductIds = [].concat(...orderProductIds);
      const productInfos = mergedProductIds.map((productId) => getOrderProductInfo(productId));

      const productInfoPromises = (await Promise.all(productInfos)).splice(0, 3);

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
            {orderHistories.map((order, i) => (
              <>
                <OrderRecordsItem key={order}>
                  {orderProductInfos[i] && (
                    <>
                      <ProductImage>
                        <img src={orderProductInfos[i].image} alt="" />
                      </ProductImage>
                      <ProductInfo>
                        <p>{orderProductInfos[i].product_name}</p>
                      </ProductInfo>
                      <ProductPrice>{orderProductInfos[i].price}</ProductPrice>
                      <ProductQauntity></ProductQauntity>
                      <PointsEarned></PointsEarned>
                      <ShippingOption></ShippingOption>
                      <ShippingFee></ShippingFee>
                      <OrderRecordsImage>
                        <img src="" alt="" />
                      </OrderRecordsImage>
                      <ProductTotalPrice></ProductTotalPrice>
                    </>
                  )}
                </OrderRecordsItem>
              </>
            ))}
          </OrderRecordsWrapper>
        </BuyerMyPageContents>
        <Button MsButton>Prev</Button>
      </BuyerMyPageWrapper>
    </>
  );
}
