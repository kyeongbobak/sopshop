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
  TabMenuContents,
  ProductSoldOutButton,
} from "./ProductDetailStyle";
import { useParams, useNavigate } from "react-router-dom";

import PlusIcon from "../../assets/img/icon-plus-line.png";
import MinusIcon from "../../assets/img/icon-minus-line.png";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";

import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import AlertModal from "../../components/Modal/AlertModal/AlertModal";

export default function ProductDetail() {
  const { product_id } = useParams();
  const [activeTab, setActiveTab] = useState("review");
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const { token, isLoggedIn } = useContext(AuthContext);
  const [loginRequired, setLoginRequired] = useState(false);
  const [addToCartWarning, setAddToCartWarning] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [menuContents, setMenuContents] = useState("");

  console.log(product);

  const navigate = useNavigate();

  const handleTabClick = (e) => {
    setActiveTab(e);
    console.log(typeof e);
    setMenuContents(e);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await fetch(`https://openmarket.weniv.co.kr/products/${product_id}`, {
          method: "GET",
        });
        const data = await res.json();
        setProduct(data);
        if (data.stock === 0) {
          setSoldOut(true);
          setCount(0);
        }
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

  const checkCartContents = async () => {
    try {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      const res = await instance.get("https://openmarket.weniv.co.kr/cart/");
      const cartContents = res.data.results;
      console.log(cartContents);

      const existingProduct = cartContents.find((v) => v.product_id === Number(product_id));

      console.log(existingProduct);

      if (existingProduct) {
        setAddToCartWarning(true);
      } else {
        AddToCart();
        navigate(`/shoppingCart`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDirectOrder = () => {
    AddToCart();
    navigate(`/order`);
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
          <ProductImage src={product.image} />
          <ProductDetailInfo>
            <ProductBrandName>{product.store_name}</ProductBrandName>
            <ProductName>{product.product_name}</ProductName>
            <ProductPrice>
              {product.price ? product.price.toLocaleString() : "가격정보 없음"} <span></span>
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
              <strong>Total Price</strong>
              <ProductOrderPrice>
                <ProductTotalQuanTity>
                  <p>
                    총 수량 <strong>{count > product.stock ? product.stock : count}</strong> 개
                  </p>
                </ProductTotalQuanTity>
                <ProductTotalPrice>
                  <p>{product.price ? (product.price * count).toLocaleString() : product.price}</p>
                </ProductTotalPrice>
              </ProductOrderPrice>
            </ProductOrderSummery>
            <ProductDetailButtonMenu>
              {soldOut ? (
                <>
                  <ProductSoldOutButton>Out Of Stock</ProductSoldOutButton>
                </>
              ) : (
                <>
                  {!isLoggedIn ? <ProductOrderButton onClick={() => setLoginRequired(true)}>Buy Now</ProductOrderButton> : <ProductOrderButton onClick={() => getDirectOrder()}>Buy Now</ProductOrderButton>}
                  {!isLoggedIn ? <ProductAddCartButton onClick={() => setLoginRequired(true)}>Add To Cart</ProductAddCartButton> : <ProductAddCartButton onClick={() => checkCartContents()}>Add To Cart</ProductAddCartButton>}
                </>
              )}
              {loginRequired && (
                <AlertModal text="아니오" submitText="예" onCancel={() => setLoginRequired(false)} onSubmit={() => navigate(`/login`)} width="210px">
                  로그인이 필요한 서비스입니다. 로그인 하시겠습니까?
                </AlertModal>
              )}

              {addToCartWarning && (
                <AlertModal text="아니오" submitText="예" onCancel={() => setAddToCartWarning(false)} onSubmit={() => navigate(`/shoppingCart`)} width="221px">
                  이미 장바구니에 있는 상품입니다. 장바구니로 이동하시겠습니까?
                </AlertModal>
              )}
            </ProductDetailButtonMenu>
          </ProductDetailInfo>
        </ProductDetailContent>
        <ProductDetailTabMenu>
          <TabMenuItem>
            <ProductReviewLink onClick={() => handleTabClick("review")} isActive={activeTab === "review"}>
              Review
            </ProductReviewLink>
          </TabMenuItem>
          <TabMenuItem>
            <ProductQnALink onClick={() => handleTabClick("Q&A")} isActive={activeTab === "Q&A"}>
              Q&A
            </ProductQnALink>
          </TabMenuItem>
          <TabMenuItem>
            <ProductRefundLink onClick={() => handleTabClick("refund")} isActive={activeTab === "refund"}>
              반품/교환
            </ProductRefundLink>
          </TabMenuItem>
        </ProductDetailTabMenu>
        <TabMenuContents>{menuContents}</TabMenuContents>
      </ProductDetailWrapper>
      <BuyerFooter />
    </>
  );
}
