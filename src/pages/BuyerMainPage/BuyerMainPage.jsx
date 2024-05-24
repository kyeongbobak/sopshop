import { ProductListWrapper, ProductGroup, SearchForm, SearchButton, SearchInput } from "../BuyerMainPage/BuyerMainPageStyle";
import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";

import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import BuyerCartegory from "../../components/BuyerCartegory/BuyerCartegory";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import SearchIcon from "../../assets/img/search.png";

import getProduct from "../../api/ProductApi";

export default function BuyerMainPage() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products/search/${searchKeyword}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProduct(token);
      const BrandProductList = fetchedProducts.filter((i) => i.store_name === "FLOPS" || i.store_name === "Too_much_shop").slice(2, 9);
      const DittoProductList = fetchedProducts.filter((i) => i.product_name.includes("헤어 집게핀"));
      const mainPageProductList = [...BrandProductList, ...DittoProductList];

      setProducts(mainPageProductList);
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
            <ProductList key={product.product_id} product_id={product.product_id} product_img={product.image} product_store_name={product.store_name} product product_name={product.product_name} product_price={product.price} />
          ))}
        </ProductGroup>
      </ProductListWrapper>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput type="text" placeholder="search" value={searchKeyword} onChange={handleChange} />
        <SearchButton type="submit">
          <div>
            <img src={SearchIcon} alt="" />
          </div>
        </SearchButton>
      </SearchForm>
      <BuyerFooter />
    </>
  );
}
