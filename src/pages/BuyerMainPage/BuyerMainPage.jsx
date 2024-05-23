import { MainPageSlider, ProductListWrapper, ProductGroup, SearchForm, SearchButton, SearchInput } from "../BuyerMainPage/BuyerMainPageStyle";
import { useContext, useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import SearchIcon from "../../assets/search.png";

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
    const getProduct = async () => {
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
          promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=6"));
        } else {
          promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=4"));
          promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=5"));
          promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=6"));
        }
        const res = await Promise.all(promises);
        const data = await Promise.all(res.map((res) => (token ? res.data : res.json())));
        console.log(data);
        const mergedData = [...data[0].results, ...data[1].results, ...data[2].results];
        const newArray = mergedData.filter((i) => i.store_name === "Too_much_shop" || i.store_name === "FLOPS");
        setProducts([...newArray.slice(2, 5), ...newArray.slice(-4, -2)]);
        console.log(newArray);
        console.log(mergedData);
      } catch (error) {
        console.log("error");
      }
    };
    getProduct();
  }, [token]);

  return (
    <>
      <BuyerHeader />
      {/* <MainPageSlider></MainPageSlider> */}

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
