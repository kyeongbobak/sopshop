import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResultsWrapper, SearchResultsInner, SearchResultItem, SearchResultsCount, SearchResultItemImage, SearchResultItemDetails, SearchResultItemBrandName, SearchResultItemName, SearchResultItemPrice } from "./BuyerSearchPageStyle";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";

export default function BuyerSearchPage() {
  const { searchKeyword } = useParams();
  const [searchedProductCount, setSearchedProductCount] = useState();
  const [searchResults, setSearchResults] = useState([]);

  console.log(searchKeyword);

  const searchProduct = async () => {
    try {
      const res = await fetch(`https://openmarket.weniv.co.kr/products/?search=${searchKeyword}`, {
        method: "GET",
      });

      const data = await res.json();
      console.log(data.results);
      setSearchedProductCount(data.count);
      setSearchResults(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    searchProduct();
  }, [searchKeyword]);

  return (
    <>
      <BuyerHeader />
      <SearchResultsWrapper>
        <SearchResultsCount>
          <li>
            <strong>{searchedProductCount}</strong> 개의 검색 결과
          </li>
        </SearchResultsCount>
        <SearchResultsInner>
          {searchResults.map((i) => (
            <SearchResultItem key={i.product_id}>
              <SearchResultItemImage src={i.image} />
              <SearchResultItemDetails>
                <SearchResultItemBrandName>{i.store_name}</SearchResultItemBrandName>
                <SearchResultItemName to={`/products/${i.product_id}`}>{i.product_name}</SearchResultItemName>
                <SearchResultItemPrice>{i.price.toLocaleString()}</SearchResultItemPrice>
              </SearchResultItemDetails>
            </SearchResultItem>
          ))}
        </SearchResultsInner>
      </SearchResultsWrapper>
    </>
  );
}
