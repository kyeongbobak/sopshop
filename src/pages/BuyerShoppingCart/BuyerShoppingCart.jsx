import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import { ShoppingCartWrapper, ShoppingCartTitle, ShoppingCartContents, EmptyCartMessage, CartItem, CartItemWrapper, CartItemInput, CartItemInfo, CartItemQuantity, CartItemPrice } from "./BuyerShoppingCartStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerShoppingCart() {
  const { token, setIsLoggedIn } = useContext(AuthContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [cartProductInfoList, setCartProductInfoList] = useState([]);

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
      console.log(cartItem);
      cartItem.forEach((list) => getProductInfo(list.product_id));
      const productInfoPromises = cartItem.map((list) => getProductInfo(list.product_id));

      const productInfos = await Promise.all(productInfoPromises);
      console.log(productInfoPromises);
      console.log(productInfos);
      setCartProductInfoList(productInfos);
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
              {cartList.map((list, index) => (
                <CartItemWrapper key={list.cart_item_id}>
                  <CartItem>
                    <CartItemInput key={list.product_id} type="radio" />
                    <CartItemInfo>
                      {cartProductInfoList[index] && (
                        <div key={cartProductInfoList[index].product_id}>
                          <span>{cartProductInfoList[index].store_name}</span>
                          <div>{cartProductInfoList[index].product_name}</div>
                          <div>{cartProductInfoList[index].price}</div>
                        </div>
                      )}
                    </CartItemInfo>

                    <CartItemQuantity>{list.quantity}</CartItemQuantity>
                    <CartItemPrice></CartItemPrice>
                  </CartItem>
                </CartItemWrapper>
              ))}
            </>
          )}
        </ShoppingCartContents>
      </ShoppingCartWrapper>
    </>
  );
}
