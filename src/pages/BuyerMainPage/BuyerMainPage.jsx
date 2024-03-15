import { MainPageSlider, ProductListWrapper, ProductGroup, ProductList } from "./BuyerMainPageStyle";

export default function BuyerMainPage() {
  return (
    <>
      <MainPageSlider></MainPageSlider>
      <ProductListWrapper>
        <ProductGroup>
          <ProductList></ProductList>
        </ProductGroup>
      </ProductListWrapper>
    </>
  );
}
