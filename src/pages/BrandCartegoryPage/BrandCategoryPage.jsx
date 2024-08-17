import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { BrandCategoryPageWrapper, ProductListWrapper, ProductPageNumber, PrevButton, PageNumberButton, NextButton, ProductGroup, ProductGroupTitle } from "./BrandCategoryPageStyle";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import { getProducts } from "../../api/Product";

export default function BrandCategoryPage() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [selectedBrandName, setSelectedBrandName] = useState("");

  const { BrandName } = useParams();

  useEffect(() => {
    setSelectedBrandName(BrandName);
  }, [BrandName]);

  useEffect(() => {
    const getProductList = async () => {
      const fetchedProducts = await getProducts(token);
      const filterProducts = fetchedProducts.filter((product) => product.store_name === selectedBrandName);
      setProducts(filterProducts);
    };

    getProductList();
  }, [token, selectedBrandName]);

  return (
    <>
      <BuyerHeader />
      <BrandCategoryPageWrapper>
        <SideBar />
        <ProductListWrapper>
          <ProductGroupTitle>{BrandName}</ProductGroupTitle>
          <ProductGroup>
            {products.map((product) => (
              <ProductList key={product.product_id} product_id={product.product_id} product_img={product.image} product_store_name={product.store_name} product_name={product.product_name} product_price={product.price} />
            ))}
          </ProductGroup>
          <ProductPageNumber>
            <PrevButton to={`/${BrandName}`}>
              <span>Prev</span>
            </PrevButton>
            <PageNumberButton to={`/${BrandName}`}>
              <span>1</span>
            </PageNumberButton>
            <NextButton to={`/${BrandName}`}>
              <span>Next</span>
            </NextButton>
          </ProductPageNumber>
        </ProductListWrapper>
      </BrandCategoryPageWrapper>
      <BuyerFooter />
    </>
  );
}
