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
          {product.map((product) => (
            <ProductList key={product.product_id} product_img={product.image} product_store_name={product.store_name} product product_name={product.product_name} product_price={product.price} />
          ))}
        </ProductGroup>
      </ProductListWrapper>
    </>
  );
}
