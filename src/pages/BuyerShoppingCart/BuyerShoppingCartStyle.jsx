import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ShoppingCartWrapper = styled.div`
  width: 1280px;
  margin: 0 auto 300px;
`;

export const ShoppingCartTitle = styled.h1`
  font-size: var(--font-extra-size);
  text-align: center;
  margin: 54px 0 52px;
`;

export const ShoppingCartContents = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const EmptyCartMessage = styled.div`
  margin-top: 250px;
  p:nth-child(1) {
    font-size: var(--font-lg-size);
    font-weight: var(--font-bold);
    padding-bottom: 17px;
  }

  p:nth-child(2) {
    font-size: var(--font-sm-size);
  }
`;

export const CartItemWrapper = styled.ul`
  margin-bottom: 10px;
  position: relative;
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
    width: 15px;
    height: 15px;
    border: 1px solid var(--black-color);
    border-radius: 50%;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    background-color: var(--black-color);
    border: 3px solid white;
    box-shadow: 0 0 0 1.6px var(--black-color);
  }
`;

export const CartItemDeleteButton = styled.button`
  position: absolute;
  top: 18px;
  left: 1240px;
  cursor: pointer;
  img {
    width: 16px;
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItemInfoInner = styled.div`
  width: 362px;
  text-align: left;
  padding-left: 238px;

  p {
    margin-top: 40px;
    font-size: var(--font-sm-size);
    color: var(--black-color);
  }
`;

export const CartItemInfoBranName = styled.div`
  font-size: var(--font-sm-size);
  color: var(--black-color);
`;

export const CartItemInfoName = styled.div`
  font-size: var(--font-lg-size);
  margin-top: 20px;
`;

export const CartItemInfoPrice = styled.div`
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
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  display: flex;
  text-align: center;
  align-items: center;
  padding: 46px 112px;
  margin: 20px 0 40px;

  div {
    padding: 8px 8px;
  }
`;

export const PriceDetailsContentsCommon = css`
  span {
    font-size: var(--font-md-size);
  }

  p {
    font-size: var(--font-max-size);
    padding-top: 12px;
  }
`;

export const TotalPrice = styled.p`
  ${PriceDetailsContentsCommon}
  width: 320px;
`;

export const DisCountPrice = styled.p`
  ${PriceDetailsContentsCommon}
  width: 320px;
`;

export const DeliveryPrice = styled.p`
  ${PriceDetailsContentsCommon}
  width: 320px;
`;

export const OrderTotalPrice = styled.p`
  ${PriceDetailsContentsCommon}
  width: 320px;

  span {
    font-weight: var(--font-bold);
  }
`;

export const OrderButton = styled(Link)``;

export const PaymentButton = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;
