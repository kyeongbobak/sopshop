import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import { BrandCategoryPageWrapper, ProductListWrapper, ProductPageNumber, PrevButton, PageNumberButton, NextButton, ProductGroup, ProductGroupTitle } from "./BrandCategoryPageStyle";
import ProductList from "../../components/ProductList/ProductList";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import getProduct from "../../api/ProductApi";
import { useParams } from "react-router-dom";

export default function BrandCategoryPage() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [selectedBrandName, setSelectedBrandName] = useState("");

  const { BrandName } = useParams();

  useEffect(() => {
    setSelectedBrandName(BrandName);
  }, [BrandName]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProduct(token);
      console.log(fetchedProducts);
      const filterProducts = fetchedProducts.filter((product) => product.store_name === selectedBrandName);
      setProducts(filterProducts);
    };

    fetchData();
  }, [token, selectedBrandName]);

  return (
    <>
      <BuyerHeader />
      <BrandCategoryPageWrapper>
        <Sidebar />
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
