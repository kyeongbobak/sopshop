import { useEffect, useState } from "react";
import {
  ProductDetailWrapper,
  ProductDetailContent,
  ProductImage,
  ProductDetailInfo,
  ProductBrandName,
  ProductName,
  ProductPrice,
  ProductDelivary,
  ProductOrderSummery,
  ProductQuanTity,
  ProductOrderPrice,
  ProductTotalPrice,
  ProductTotalQuanTity,
  ProductDetailButtonMenu,
  ProductOrderButton,
  ProductAddCartButton,
  ProductDetailTabMenu,
  ProductDetailLink,
  ProductReviewLink,
  ProductQnALink,
  ProductRefundLink,
  TabMenuItem,
} from "./ProductDetailStyle";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("button");
  const { product_id } = useParams();
  const [product, setProduct] = useState("");

  console.log(useParams());

  const handleTabClick = (e) => {
    setActiveTab(e);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await fetch(`https://openmarket.weniv.co.kr/products/${product_id}`, {
          method: "GET",
        });
        const data = await res.json();
        setProduct(data);
      } catch (error) {}
    };

    getProductDetail();
  }, [product_id]);

  return (
    <>
      <ProductDetailWrapper>
        <ProductDetailContent>
          <ProductImage src={product.image}></ProductImage>
          <ProductDetailInfo>
            <ProductBrandName>{product.store_name}</ProductBrandName>
            <ProductName>{product.product_name}</ProductName>
            <ProductPrice>
              {product.price ? product.price.toLocaleString() : "가격정보 없음"} <span>원</span>
            </ProductPrice>
            <ProductDelivary>택배배송 / 무료배송</ProductDelivary>
            <ProductQuanTity></ProductQuanTity>
            <ProductOrderSummery>
              <strong>총 상품 금액</strong>
              <ProductOrderPrice>
                <ProductTotalPrice>총 수량 개</ProductTotalPrice>
                <ProductTotalQuanTity></ProductTotalQuanTity>
              </ProductOrderPrice>
            </ProductOrderSummery>
            <ProductDetailButtonMenu>
              <ProductOrderButton>바로구매</ProductOrderButton>
              <ProductAddCartButton>장바구니</ProductAddCartButton>
            </ProductDetailButtonMenu>
          </ProductDetailInfo>
        </ProductDetailContent>
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
