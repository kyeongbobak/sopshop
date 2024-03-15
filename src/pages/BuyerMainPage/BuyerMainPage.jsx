import { MainPageSlider, ProductListWrapper, ProductGroup } from "../BuyerMainPage/BuyerMainPageStyle";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

export default function BuyerMainPage() {
  const { product_id } = useParams();
  const { token } = useContext(AuthContext);

  const instance = axios.create({
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  const data = [
    {
      product_id: `${product_id}`,
      product_name: "Hack Your Life 개발자 노트북 파우치",
      image: "productList1.png",
      price: "29000원",
    },
  ];

  const getProduct = async () => {
    try {
      const res = await instance.get("https://openmarket.weniv.co.kr/products/");
      const body = await res.json();
      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <MainPageSlider></MainPageSlider>
      <ProductListWrapper>
        <ProductGroup>
          {data.map((product) => (
            <ProductList key={product.product_id} product_name={product.product_name} product_price={product.product_price} />
          ))}
        </ProductGroup>
      </ProductListWrapper>
    </>
  );
}
