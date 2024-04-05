import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import {
  ShoppingCartWrapper,
  ShoppingCartTitle,
  ShoppingCartContents,
  EmptyCartMessage,
  CartItem,
  CartItemWrapper,
  CartItemInput,
  CartItemInfo,
  CartItemBranName,
  CartItemName,
  CartItemInner,
  CartItemQuantity,
  CartItemPrice,
  CartItemTotalPrice,
  PriceDetailsContents,
  TotalPrice,
  DisCountPrice,
  DeliveryPrice,
  OrderTotalPrice,
  OrderButton,
} from "./BuyerShoppingCartStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../../components/Button/Button";
import PlusIcon from "../../assets/icon-plus-line.png";
import MinusIcon from "../../assets/icon-minus-line.png";

export default function BuyerShoppingCart() {
  const { token, setIsLoggedIn } = useContext(AuthContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [cartProductInfo, setCartProductInfo] = useState([]);
  const [totalProductPrice, setTotalProuctPrice] = useState(0);
  const [count, setCount] = useState(1);

  const getShoppingCartList = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = await instance.get("https://openmarket.weniv.co.kr/cart/");
      setIsEmpty(false);
      const cartItem = res.data.results;
      setCartList(cartItem);

      const productInfos = cartItem.map((list) => getProductInfo(list.product_id));
      const productInfoPromises = await Promise.all(productInfos);
      setCartProductInfo(productInfoPromises);

      Promise.all(productInfoPromises).then((product) => {
        const totalProductPrice = product.map((v, i) => v.price * cartItem[i].quantity);
        const cartTotalPrice = totalProductPrice.reduce((acc, cur) => acc + cur, 0);
        setTotalProuctPrice(cartTotalPrice);
      });
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
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCounterChange = (amount) => {
    setCount((prev) => {
      const newCount = prev + amount;
      if (newCount < 1) {
        return 1;
      } else if (newCount) {
        alert(`이 제품의 최대 구매 가능한 수량은 ${newCount - 1}개 입니다.`);
        return prev;
      } else {
        return newCount;
      }
    });
  };

  useEffect(() => {
    getShoppingCartList();
  }, [token, setIsLoggedIn]);

  return (
    <>
      <BuyerHeader />
      <ShoppingCartWrapper>
        <ShoppingCartTitle>장바구니</ShoppingCartTitle>
        <ProductInfoHeader type="cart" />
        <ShoppingCartContents>
          {isEmpty ? (
            <>
              <EmptyCartMessage>
                <p>장바구니에 담긴 상품이 없습니다.</p>
                <p>원하는 상품을 장바구니에 담아보세요!</p>
              </EmptyCartMessage>
            </>
          ) : (
            <>
              {cartList.map((list, i) => (
                <CartItemWrapper key={list.cart_item_id}>
                  <CartItem>
                    <CartItemInput type="radio" />
                    <CartItemInfo>
                      {cartProductInfo[i] && (
                        <>
                          <CartItemInner key={cartProductInfo[i].product_id}>
                            <CartItemBranName>{cartProductInfo[i].store_name}</CartItemBranName>
                            <CartItemName>{cartProductInfo[i].product_name}</CartItemName>
                            <CartItemPrice>{cartProductInfo[i].price.toLocaleString()} 원</CartItemPrice>
                            <p>택배배송 / 무료배송</p>
                          </CartItemInner>
                          <CartItemQuantity>{list.quantity}</CartItemQuantity>
                          <CartItemTotalPrice>
                            <p>{(list.quantity * cartProductInfo[i].price).toLocaleString()} 원</p>
                            <OrderButton to={`/order`}>
                              <Button SButton>주문하기</Button>
                            </OrderButton>
                          </CartItemTotalPrice>
                        </>
                      )}
                    </CartItemInfo>
                  </CartItem>
                </CartItemWrapper>
              ))}
            </>
          )}
        </ShoppingCartContents>
        <PriceDetailsContents>
          <TotalPrice>{totalProductPrice.toLocaleString()} 원</TotalPrice>
          <DisCountPrice>0 원</DisCountPrice>
          <DeliveryPrice>0 원</DeliveryPrice>
          <OrderTotalPrice>{totalProductPrice.toLocaleString()} 원</OrderTotalPrice>
        </PriceDetailsContents>
        <OrderButton to={`/order`}>
          <Button LButton>주문하기</Button>
        </OrderButton>
      </ShoppingCartWrapper>
    </>
  );
}
