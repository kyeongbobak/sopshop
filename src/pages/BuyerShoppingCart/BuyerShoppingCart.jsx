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
  CartItemDeleteButton,
  CartItemInfo,
  CartItemBranName,
  CartItemName,
  CartItemInner,
  CartItemQuantity,
  CartItemQuantityInner,
  CartItemPrice,
  CartItemTotalPrice,
  PriceDetailsContents,
  TotalPrice,
  DisCountPrice,
  DeliveryPrice,
  OrderTotalPrice,
  OrderButton,
  PaymentButton,
} from "./BuyerShoppingCartStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../../components/Button/Button";
import PlusIcon from "../../assets/icon-plus-line.png";
import MinusIcon from "../../assets/icon-minus-line.png";
import Modal from "../../components/Modal/Modal";
import DeleteIcon from "../../assets/icon-delete.png";

export default function BuyerShoppingCart() {
  const { token, isLoggedIn } = useContext(AuthContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [cartProductInfo, setCartProductInfo] = useState([]);
  const [totalProductPrice, setTotalProuctPrice] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modifiedCartItemId, setModifiedCartItemId] = useState(null);
  const [modifiedProductId, setModifiedProductId] = useState(null);
  const [modifiedQuantity, setModifiedQuantity] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

      if (cartItem.length === 0) {
        return setIsEmpty(true);
      }

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

  const ModalOpen = (list) => {
    setIsModalOpen(true);
    setModifiedCartItemId(list.cart_item_id);
    setModifiedProductId(list.product_id);
    setModifiedQuantity(list.quantity);
  };

  const handleCounterChange = (amount) => {
    setModifiedQuantity((prev) => prev + amount);
  };

  const modifyProductQuantity = async (isActive) => {
    console.log(isActive);

    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const body = {
        product_id: modifiedProductId,
        quantity: modifiedQuantity,
        is_active: isActive,
      };

      const res = await instance.put(`https://openmarket.weniv.co.kr/cart/${modifiedCartItemId}/`, body);
      const data = await res.data;
      setIsModalOpen(false);
      console.log(data);
      setCartList((prev) => prev.map((item) => (item.cart_item_id === modifiedCartItemId ? { quantity: modifiedQuantity } : { quantity: item.quantity })));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartList = async (cartItemId) => {
    console.log(cartItemId);

    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const res = await instance.delete(`https://openmarket.weniv.co.kr/cart/${cartItemId}`);
      const data = await res.data;
      window.location.reload();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShoppingCartList();
  }, [token, isLoggedIn]);

  return (
    <>
      <BuyerHeader />
      <ShoppingCartWrapper>
        <ShoppingCartTitle>Cart</ShoppingCartTitle>
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
                <CartItemWrapper>
                  <CartItem key={list.cart_item_id}>
                    <CartItemInput>
                      <label htmlFor="cartItemInput"></label>
                      <input
                        type="radio"
                        name="cartItemCheck"
                        id="cartItemInput"
                        checked={selectedItem === list.cart_item_id}
                        onClick={() => {
                          if (selectedItem === list.cart_item_id) {
                            setSelectedItem(null);
                          } else {
                            setSelectedItem(list.cart_item_id);
                          }
                        }}
                      />
                    </CartItemInput>
                    <CartItemDeleteButton onClick={() => setIsDeleteModalOpen(true)}>
                      <img src={DeleteIcon} alt="" />
                    </CartItemDeleteButton>
                    {isDeleteModalOpen && (
                      <Modal text="취소" submitText="확인" onCancel={() => setIsDeleteModalOpen(false)} onSubmit={() => deleteCartList(list.cart_item_id)} width="210px">
                        상품을 삭제하시겠습니까?
                      </Modal>
                    )}
                    <CartItemInfo>
                      {cartProductInfo[i] && (
                        <>
                          <CartItemInner key={cartProductInfo[i].product_id}>
                            <CartItemBranName>{cartProductInfo[i].store_name}</CartItemBranName>
                            <CartItemName>{cartProductInfo[i].product_name}</CartItemName>
                            <CartItemPrice>{cartProductInfo[i].price.toLocaleString()}</CartItemPrice>
                            <p>택배배송 / 무료배송</p>
                          </CartItemInner>
                          <CartItemQuantity>
                            <CartItemQuantityInner>
                              <button onClick={() => ModalOpen(list)}>
                                <img src={MinusIcon} alt="" />
                              </button>
                              <p>{list.quantity}</p>
                              <button onClick={() => ModalOpen(list)}>
                                <img src={PlusIcon} alt="" />
                              </button>
                            </CartItemQuantityInner>
                            {isModalOpen && (
                              <Modal text="취소" submitText="수정" onCancel={() => setIsModalOpen(false)} onSubmit={() => modifyProductQuantity(true)}>
                                <CartItemQuantityInner>
                                  <button onClick={() => handleCounterChange(-1)}>
                                    <img src={MinusIcon} alt="" />
                                  </button>
                                  <p>{modifiedQuantity}</p>
                                  <button onClick={() => handleCounterChange(+1)}>
                                    <img src={PlusIcon} alt="" />
                                  </button>
                                </CartItemQuantityInner>
                              </Modal>
                            )}
                          </CartItemQuantity>
                          <CartItemTotalPrice>
                            <p>{(list.quantity * cartProductInfo[i].price).toLocaleString()}</p>
                            <OrderButton to={`/order`}>
                              <Button SButton>Order</Button>
                            </OrderButton>
                          </CartItemTotalPrice>
                        </>
                      )}
                    </CartItemInfo>
                  </CartItem>
                </CartItemWrapper>
              ))}
              <PriceDetailsContents>
                <TotalPrice>
                  <span>Total Price</span>
                  <p>{totalProductPrice.toLocaleString()}</p>
                </TotalPrice>
                <div>
                  <img src={MinusIcon} alt="" />
                </div>
                <DisCountPrice>
                  <span>상품 할인</span>
                  <p>
                    0 <span>원</span>
                  </p>
                </DisCountPrice>
                <div>
                  <img src={PlusIcon} alt="" />
                </div>
                <DeliveryPrice>
                  <span>배송비</span>
                  <p>
                    0 <span>원</span>
                  </p>
                </DeliveryPrice>
                <OrderTotalPrice>
                  <span>결제예정금액</span>
                  <p>{totalProductPrice.toLocaleString()}</p>
                </OrderTotalPrice>
              </PriceDetailsContents>
              <PaymentButton to={`/order`}>
                <Button LButton>Order</Button>
              </PaymentButton>
            </>
          )}
        </ShoppingCartContents>
      </ShoppingCartWrapper>
    </>
  );
}
