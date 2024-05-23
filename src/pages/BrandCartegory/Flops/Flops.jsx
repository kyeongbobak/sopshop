import BuyerCartegory from "../../../components/BuyerCartegory/BuyerCartegory";
import BuyerHeader from "../../../components/BuyerHeader/BuyerHeader";
import BuyerFooter from "../../../components/BuyerFooter/BuyerFooter";
import { ProductListWrapper, ProductGroup } from "./FlopsStyle";
import ProductList from "../../../components/ProductList/ProductList";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import getProduct from "../../../api/ProductApi";

export default function Flops() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProduct(token);
      console.log(fetchedProducts);
      const filterProducts = fetchedProducts.filter((product) => product.store_name === "FLOPS");
      setProducts(filterProducts);
    };

    fetchData();
  }, [token]);

  return (
    <>
      <BuyerHeader />
      <BuyerCartegory />
      <ProductListWrapper>
        <ProductGroup>
          {products.map((product) => (
            <ProductList key={product.product_id} product_id={product.product_id} product_img={product.image} product_store_name={product.store_name} product_name={product.product_name} product_price={product.price} />
          ))}
        </ProductGroup>
      </ProductListWrapper>
      <BuyerFooter />
    </>
  );
}
