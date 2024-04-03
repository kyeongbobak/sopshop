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
  margin-top: 220px;
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

export const CartItemWrapper = styled.ul``;

export const CartItem = styled.li``;

export const CartItemInput = styled.input``;

export const CartItemInfo = styled.div``;

export const CartItemQuantity = styled.div``;

export const CartItemPrice = styled.div``;
