import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import { ShoppingCartWrapper, ShoppingCartTitle, ShoppingCartContents, EmptyCartMessage, CartItem, CartItemWrapper, CartItemInput, CartItemInfo, CartItemQuantity, CartItemPrice } from "./BuyerShoppingCartStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerShoppingCart() {
  const { token, setIsLoggedIn } = useContext(AuthContext);
  const [isEmpty, setIsEmpty] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartProductInfo, setCartProductInfo] = useState([]);

  const getShoppingCartList = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const res = await instance.get("https://openmarket.weniv.co.kr/cart/");
      console.log(res.data);
      setIsEmpty(false);
      setCartList(res.data.results);
      res.data.results.forEach((list) => getProductInfo(list.product_id));
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
      console.log(res.data);
      setCartProductInfo(res.data);
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
        {isEmpty ? <ProductInfoHeader type="cart" /> : <ProductInfoHeader type="order" />}
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
              {cartList.map((list) => (
                <CartItemWrapper key={list.cart_item_id}>
                  <CartItem>
                    <CartItemInput />

                    <CartItemInfo>
                      {cartProductInfo && (
                        <>
                          <span>{cartProductInfo.store_name}</span>
                          <div>{cartProductInfo.product_name}</div>
                          <div>{cartProductInfo.price}</div>
                        </>
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
