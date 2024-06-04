import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SearchPageWrapper,
  SearchResultsWrapper,
  SearchResultsInner,
  SearchResultItem,
  SearchResultsCount,
  SearchResultItemImage,
  SearchResultItemDetails,
  SearchResultItemBrandName,
  SearchResultItemName,
  SearchResultItemPrice,
} from "./BuyerSearchPageStyle";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import { search } from "../../api/Product";

export default function BuyerSearchPage() {
  const { searchKeyword } = useParams();
  const [searchedProductCount, setSearchedProductCount] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchProduct = async () => {
      return await search(setSearchedProductCount, setSearchResults, searchKeyword);
    };
    searchProduct();
  }, [searchKeyword]);

  return (
    <>
      <BuyerHeader />
      <SearchPageWrapper>
        <Sidebar />
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
      </SearchPageWrapper>
      <BuyerFooter />
    </>
  );
}
