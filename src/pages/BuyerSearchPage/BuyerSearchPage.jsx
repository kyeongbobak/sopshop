import { useEffect, useState } from "react";
import BuyerHeader from "../../components/BuyerHeader/BuyerHeader";
import { useParams } from "react-router-dom";

export default function BuyerSearchPage() {
  const { searchKeyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  console.log(searchKeyword);

  const searchProduct = async () => {
    try {
      const res = await fetch(`https://openmarket.weniv.co.kr/products/?search=${searchKeyword}`, {
        method: "GET",
      });

      const data = await res.json();
      console.log(data.results);
      setSearchResults(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    searchProduct();
  }, [searchKeyword]);

  return (
    <>
      <BuyerHeader />
      {searchResults.map((v) => (
        <div key={v.product_id}>
          <p>{v.product_name}</p>
        </div>
      ))}
    </>
  );
}
