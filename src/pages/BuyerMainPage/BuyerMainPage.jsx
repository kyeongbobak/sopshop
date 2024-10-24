import { ProductListWrapper, ProductGroup, MainPageContentsWrapper } from "../BuyerMainPage/BuyerMainPageStyle";
import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { AuthContext } from "../../contexts/AuthContext";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import SideBar from "../../components/SideBar/SideBar";
import { getProducts } from "../../api/Product";
export default function BuyerMainPage() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const data = await getProducts();

      const BrandProductList = data.filter((i) => i.store_name === "FLOPS" || i.store_name === "Too_much_shop").slice(2, 9);
      const DittoProductList = data.filter((i) => i.product_name.includes("헤어 집게핀"));
      const mainPageProductList = [...BrandProductList, ...DittoProductList];
      setProducts(mainPageProductList);
    };

    getProductList();
  }, [token]);

  return (
    <>
      <BuyerHeader />
      <MainPageContentsWrapper>
        <SideBar />
        <ProductListWrapper>
          <ProductGroup>
            {products.map((product) => (
              <ProductList key={product.product_id} product_id={product.product_id} product_img={product.image} product_store_name={product.store_name} product product_name={product.product_name} product_price={product.price} />
            ))}
          </ProductGroup>
        </ProductListWrapper>
      </MainPageContentsWrapper>
      <BuyerFooter />
    </>
  );
}
