import { MainPageSlider, ProductListWrapper, ProductGroup } from "../BuyerMainPage/BuyerMainPageStyle";
import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerMainPage() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [];
        if (token) {
          const instance = axios.create({
            headers: {
              Authorization: `JWT ${token}`,
            },
          });
          promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=4"));
          promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=5"));
        } else {
          promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=4"));
          promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=5"));
        }
        const res = await Promise.all(promises);
        console.log(Promise.all);
        const data = await Promise.all(res.map((res) => (token ? res.data : res.json())));
        console.log(res);
        const mergedData = data.flatMap((d) => d.results);
        // 필요한 부분을 바로 추출
        console.log(mergedData);
        setProducts([...mergedData.slice(0, 3), ...mergedData.slice(-4, -2)]);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <MainPageSlider></MainPageSlider>
      <ProductListWrapper>
        <ProductGroup>
          {products.map((product) => (
            <ProductList key={product.product_id} product_img={product.image} product_store_name={product.store_name} product product_name={product.product_name} product_price={product.price} />
          ))}
        </ProductGroup>
      </ProductListWrapper>
    </>
  );
}
