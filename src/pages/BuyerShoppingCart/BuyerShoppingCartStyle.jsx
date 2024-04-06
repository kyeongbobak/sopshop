import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const ShoppingCartTitle = styled.h1`
  font-size: var(--font-extra-size);
  font-weight: var(--font-bold);
  text-align: center;
  margin: 54px 0 52px;
`;

export const ShoppingCartContents = styled.div`
  text-align: center;
  margin-top: 35px;
`;

export const EmptyCartMessage = styled.div`
  p:nth-child(1) {
    font-size: var(--font-lg-size);
    font-weight: var(--font-bold);
    padding-bottom: 17px;
  }

  p:nth-child(2) {
    font-size: var(--font-sm-size);
    font-weight: var(--font-bold);
  }
`;

export const CartItemWrapper = styled.ul`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CartItem = styled.li`
  width: auto;
  display: flex;
  align-items: center;
`;

export const CartItemInput = styled.div`
  flex-grow: 1;
  margin: 90px 0;
  input {
    border-radius: 50px;
  }

  input[type="radio"] {
    appearance: none;
    width: 23px;
    height: 23px;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    background-color: var(--main-color);
    border: 3px solid white;
    box-shadow: 0 0 0 1.6px var(--main-color);
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItemInner = styled.div`
  width: 362px;
  text-align: left;
  padding-left: 238px;

  p {
    margin-top: 40px;
    font-size: var(--font-sm-size);
    color: var(--black-color);
  }
`;

export const CartItemBranName = styled.div`
  font-size: var(--font-sm-size);
  color: var(--black-color);
`;

export const CartItemName = styled.div`
  font-size: var(--font-lg-size);
  margin-top: 20px;
`;

export const CartItemPrice = styled.div`
  font-size: var(--font-md-size);
  font-weight: var(--font-bold);
  margin-top: 20px;
`;

export const CartItemQuantity = styled.div`
  width: 300px;
  font-size: var(--font-lg-size);
  display: flex;
  justify-content: center;
`;

export const CartItemQuantityInner = styled.div`
  display: flex;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
  padding: 15px 0;
  button {
    width: 50px;
  }
  p {
    width: 50px;
    font-size: var(--font-lg-size);
  }
`;

export const CartItemTotalPrice = styled.div`
  width: 300px;
  font-size: var(--font-lg-size);

  button {
    margin-top: 28px;
  }
`;

export const PriceDetailsContents = styled.div`
  background-color: var(--light-gray-color);
`;

export const TotalPrice = styled.p``;

export const DisCountPrice = styled.p``;

export const DeliveryPrice = styled.p``;

export const OrderTotalPrice = styled.p``;

export const OrderButton = styled(Link)``;
