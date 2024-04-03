import ProductInfoHeader from "../../components/ProductInfoHeader/ProductInfoHeader";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import { ShoppingCartWrapper, ShoppingCartTitle, ShoppingCartContents, EmptyCartMessage } from "./BuyerShoppingCartStyle";

export default function BuyerShoppingCart() {
  return (
    <>
      <BuyerHeader />
      <ShoppingCartWrapper>
        <ShoppingCartTitle>장바구니</ShoppingCartTitle>
        <ProductInfoHeader type="cart" />
        <ShoppingCartContents>
          <EmptyCartMessage>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <p>원하는 상품을 장바구니에 담아보세요!</p>
          </EmptyCartMessage>
        </ShoppingCartContents>
      </ShoppingCartWrapper>
    </>
  );
}
