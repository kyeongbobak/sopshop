import { MainPageSlider, ProductListWrapper, ProductGroup } from "../BuyerMainPage/BuyerMainPageStyle";
import ProductList from "../../components/ProductList/ProductList";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerMainPage() {
  const { token } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  console.log(token);

  const instance = axios.create({
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  // const data = [
  //   {
  //     product_id: `${product_id}`,
  //     product_name: "Hack Your Life 개발자 노트북 파우치",
  //     image: "productList1.png",
  //     price: "29000원",
  //   },
  // ];

  const getProduct = async () => {
    try {
      const res = await instance.get("https://openmarket.weniv.co.kr/products/");
      setProduct(res.data.results);
      console.log(res);
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
          {/* {product.map((product) => (
            <ProductList key={product.product_id} product_name={product.product_name} product_price={product.product_price} />
          ))} */}
        </ProductGroup>
      </ProductListWrapper>
    </>
  );
}
