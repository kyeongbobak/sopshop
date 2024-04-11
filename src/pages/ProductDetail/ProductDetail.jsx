import { useContext, useEffect, useState } from "react";
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
  ProductQuanTityInner,
  ProductOrderPrice,
  ProductTotalPrice,
  ProductTotalQuanTity,
  ProductDetailButtonMenu,
  ProductOrderButton,
  ProductAddCartButton,
  ProductDetailTabMenu,
  ProductReviewLink,
  ProductQnALink,
  ProductRefundLink,
  TabMenuItem,
} from "./ProductDetailStyle";
import { useParams, useNavigate } from "react-router-dom";

import PlusIcon from "../../assets/icon-plus-line.png";
import MinusIcon from "../../assets/icon-minus-line.png";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "../../components/Modal/Modal";

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("button");
  const { product_id } = useParams();
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const { token, setIsLoggedIn } = useContext(AuthContext);
  const [loginRequired, setLoginRequired] = useState(false);

  const navigate = useNavigate();

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

  const handleCounterChange = (amount) => {
    setCount((prev) => {
      const newCount = prev + amount;
      if (newCount < 1) {
        return 1;
      } else if (newCount > product.stock) {
        alert(`이 제품의 최대 구매 가능한 수량은 ${newCount - 1}개 입니다.`);
        return prev;
      } else {
        return newCount;
      }
    });
  };

  const AddToCart = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const body = {
        product_id: `${product_id}`,
        quantity: `${count}`,
        check: `${product.product_id === product_id ? "true" : "false"}`,
      };

      const res = await instance.post("https://openmarket.weniv.co.kr/cart/", body);
      console.log(res.data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <BuyerHeader />
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
            <ProductQuanTity>
              <ProductQuanTityInner>
                <button onClick={() => handleCounterChange(-1)}>
                  <img src={MinusIcon} alt="" />
                </button>
                <p>{count}</p>
                <button onClick={() => handleCounterChange(1)}>
                  <img src={PlusIcon} alt="" />
                </button>
              </ProductQuanTityInner>
            </ProductQuanTity>
            <ProductOrderSummery>
              <strong>총 상품 금액</strong>
              <ProductOrderPrice>
                <ProductTotalQuanTity>
                  <p>
                    총 수량 <strong>{count > product.stock ? product.stock : count}</strong> 개
                  </p>
                </ProductTotalQuanTity>
                <ProductTotalPrice>
                  <p>
                    {product.price ? product.price * count : product.price}
                    <span>원</span>
                  </p>
                </ProductTotalPrice>
              </ProductOrderPrice>
            </ProductOrderSummery>
            <ProductDetailButtonMenu>
              {setIsLoggedIn ? <ProductOrderButton onClick={() => setLoginRequired(true)}>바로구매</ProductOrderButton> : <ProductOrderButton>바로구매</ProductOrderButton>}
              <ProductAddCartButton onClick={() => AddToCart()}>장바구니</ProductAddCartButton>
              {loginRequired && (
                <Modal text="아니오" submitText="예" onCancel={() => setLoginRequired(false)} onSubmit={() => navigate(`/login`)} width="210px">
                  로그인이 필요한 서비스입니다. 로그인 하시겠습니까?
                </Modal>
              )}
            </ProductDetailButtonMenu>
          </ProductDetailInfo>
        </ProductDetailContent>
        <ProductDetailTabMenu>
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
