import { MainPageSlider, ProductListWrapper, ProductGroup } from "../BuyerMainPage/BuyerMainPageStyle";
import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerMainPage() {
  const { token, setToken } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  console.log(token);
  console.log(setToken);

  const getProduct = async () => {
    try {
      let res;
      if (token) {
        const instance = axios.create({
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        res = await instance.get("https://openmarket.weniv.co.kr/products/");
      } else {
        res = await fetch("https://openmarket.weniv.co.kr/products/", {
          method: "GET",
        });
      }
      const data = token ? await res.data : await res.json();
      setProduct(data.results);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, [token]);

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
