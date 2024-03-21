import { useState } from "react";
import { ProductDetailWrapper, ProductDetailTabMenu, ProductDetailLink, ProductReviewLink, ProductQnALink, ProductRefundLink, TabMenuItem } from "./ProductDetailStyle";

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("button");

  const handleTabClick = (e) => {
    setActiveTab(e);
    console.log(e);
  };
  return (
    <>
      <ProductDetailWrapper>
        <ProductDetailTabMenu>
          <TabMenuItem>
            <ProductDetailLink onClick={() => handleTabClick("button")} isActive={activeTab === "button"}>
              버튼
            </ProductDetailLink>
          </TabMenuItem>
          <TabMenuItem>
            <ProductReviewLink onClick={() => handleTabClick("review")} isActive={activeTab === "review"}>
              리뷰
            </ProductReviewLink>
          </TabMenuItem>
          <TabMenuItem>
            <ProductQnALink onClick={() => handleTabClick("Q&A")} isActive={activeTab === "Q&A"}>
              Q&A
            </ProductQnALink>
          </TabMenuItem>
          <TabMenuItem>
            <ProductRefundLink onClick={() => handleTabClick("refund")} isActive={activeTab === "refund"}>
              반품/교환정보
            </ProductRefundLink>
          </TabMenuItem>
        </ProductDetailTabMenu>
      </ProductDetailWrapper>
    </>
  );
}
