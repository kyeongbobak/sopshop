import { useEffect, useState } from "react";
import { ProductDetailWrapper, ProductDetailContent, ProductImage, ProductBrandName, ProductName, ProductPrice, ProductDetailTabMenu, ProductDetailLink, ProductReviewLink, ProductQnALink, ProductRefundLink, TabMenuItem } from "./ProductDetailStyle";
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
          <ProductBrandName>{product.store_name}</ProductBrandName>
          <ProductName>{product.product_name}</ProductName>
          <ProductPrice>{Math.floor(product.price).toLocaleString()} 원</ProductPrice>
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
